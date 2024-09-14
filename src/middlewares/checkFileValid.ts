import {Request, Response, NextFunction } from "express"
import { BAD_REQUEST } from "../constants/http"

export const checkFileValidMW = (req: Request, res: Response, next: NextFunction) => {
    if (!req.file || !req.file.filename) {
        res.sendStatus(BAD_REQUEST)
    }
    next()
}