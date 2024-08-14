import sharp from "sharp";
import { MediaType } from '../types/MediaTypes';

export default async (inputPath: string, outputPath: string, quality: number, MediaType: MediaType): Promise<void>  => {
    try {
        
        let instance = sharp(inputPath)

        switch (MediaType) {
            case '.png':
                instance = instance.png({quality});
                break;
            case ".jpg":
                break;
            case ".webp":
                instance = instance.png({quality});
                break;
            case ".gif":
                instance = instance.png({quality});
                break;
            default:
                break;
        }

        await instance.toFile(outputPath);
        console.log('image compressed successfully.')

    } catch (error) {
        
        console.error('Failed to compress image:', error)

    }
}