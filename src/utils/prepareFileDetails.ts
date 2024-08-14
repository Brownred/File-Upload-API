import path from 'path'
import parseFileName from './parseFileName'

export default (file: Express.Multer.File) => {
    const {base, ext} = parseFileName(file.originalname);

    const fullFilePath = path.join('tmp/uploads', base, `full${ext}`)
    const compressedFilePath = path.join('tmp/uploads', base, `min${ext}`)

    return { fullFilePath, compressedFilePath, ext}
}