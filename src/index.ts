// Native imports
import path from "path"
import fs from "fs"

// Third party imports
import express, { Request, Response} from 'express';
import multer from "multer";

// custom utilities
import parseFileName from "./utils/parseFileName";
import { BAD_REQUEST } from "./constants/http";
import { MediaType } from "./types/MediaTypes";
import prepareFileDetails from "./utils/prepareFileDetails";
import compressImage from "./utils/compressImage";
import { checkFileValidMW } from "./middlewares/checkFileValid";



// config
const app = express()

const multerStorage = multer.diskStorage({
    destination(_, file, callback) {
    const {base} = parseFileName(file.originalname)

    fs.promises.mkdir(path.join('tmp/uploads', base), {recursive: true})
    .then(() => {
        callback(null, `tmp/uploads/${base}`)
    })
    },
    filename: (_, file, cb) => (cb(null, `full${parseFileName(file.originalname).ext}`))
})


const upload = multer({storage: multerStorage})


// Routes
app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})


app.post('/upload', upload.single('file'), checkFileValidMW, async ( req: Request, res: Response) => {
    const { file } = req
    // console.log(file) 
    res.send("file Uploaded successfully")

    // implement compression
    if (file) {
        const {fullFilePath, compressedFilePath, ext} = prepareFileDetails(file)
        res.on("finish", async () => await compressImage(fullFilePath, compressedFilePath, 20, ext as MediaType)) // Params in callback; where does the file come from, where does the file go, how much compression, what kind of file is it(media type)
    }
})

// Send the file uploaded to the client
app.get('/:filename', async (req: Request, res: Response) => {
    const { filename } = req.params
    const { base, ext } = parseFileName(filename)
    const size = req.query.size == 'min' ? `min${ext}` : `full${ext}`;
    const parentDir = path.dirname(__dirname)
    const filePath = path.join(parentDir, 'tmp/uploads', base, size)
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(BAD_REQUEST).send(`unable to find: ${filename}`)
            return;
        }
        res.sendFile(filePath)
    })
})


// Instantiation
app.listen(3000, () => {
    console.log("Server started")
})