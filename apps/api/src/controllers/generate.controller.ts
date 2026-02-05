import { Request, Response } from "express";
import { extractFileKey, getFigmaFile, parseToUISchema, sendResponse } from "../lib/helper";
import { generatedCode } from "../services/gemini.service";
import Generation from "../models/generation.model";


export const generateCodeController = async (req : Request, res : Response) =>{
    try {
        const {figmaUrl, framework} = req.body;
        const fileKey = extractFileKey(figmaUrl);
        if(!fileKey){
            sendResponse(res, 400, false, "Invalid Figma URL",)
            return
        }
        const figmaDoc = await getFigmaFile(fileKey);
        if(!figmaDoc){
            sendResponse(res, 400, false, "Invalid Figma URL",)
            return
        }

        const schema = parseToUISchema(figmaDoc);

        const code = await generatedCode(schema);

        await Generation.create({
            figmaUrl,
            framework,
            code
        })


        return sendResponse(res, 200, true, "Code generated successfully", code)

    } catch (error) {
        console.error(`Error in generateCodeController: ${error}`)
    }
}
