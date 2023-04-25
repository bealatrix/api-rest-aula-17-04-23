// Arquivo: base.controller.ts

import { Request, Response } from 'express';

export class BaseController {

  // retorna somente status 200 e a mensagem de Api running (api rodando)
  public index(req: Request, res: Response) {
    res.status(200).json({ message: 'Api running....' });
  }

  // retorna informações sobre a api
  public info(req: Request, res: Response) {
    res.status(200).json({
      name: 'API REST - Finan360',
      mode: 'development',
      version: '1.0.0',
    });
  }
  // retorna informações sobre o desenvolvedor da api
  public developerInfo(req: Request, res: Response) {
    res.status(200).json({
      name: 'Beatriz Vitória',
      email: 'beatrizvitoria519@gamil.com',
      github: 'https://github.com/bealatrix',
    });
  }
}