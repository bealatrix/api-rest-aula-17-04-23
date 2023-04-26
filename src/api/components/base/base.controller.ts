// Arquivo: base.controller.ts

import { Request, Response } from 'express';

export class BaseController {
    public index(req: Request, res: Response) {
        res.status(200).json({ message: 'Api running....' });
    }

    public info(req: Request, res: Response) {
        res.status(200).json({
            name: 'API REST - Finan360',
            mode: 'development',
            version: '1.0.0',
        });
    }

    public developer(req: Request, res: Response) {
        res.status(200).json({
            name: 'Beatriz Vitória',
            email: 'beatrizvitoria519@gmail.com',
            github: 'https://github.com/bealatrix',
        });
    }
}
