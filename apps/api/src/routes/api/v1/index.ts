import express, { Request, Response } from 'express';
import { generateCodeController } from '../../../controllers/generate.controller';

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
})

router.post("/generate", generateCodeController);

export default router;
