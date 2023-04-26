import { Request, Response } from 'express';

interface IUser {
  name: string;
  email: string;
  username: string;
  password: string;
  active: boolean;
}

const users: IUser[] = [];

export class UserController {
  public list(req: Request, res: Response): void {
    res.status(200).json(users);
  }

  public create(req: Request, res: Response): void {
    const { name, email, username, password } = req.body;
    const newUser: IUser = { name, email, username, password, active: true };
    users.push(newUser);
    res.status(201).json(newUser);
  }

  public update(req: Request, res: Response): void {
    res.status(200).send('função update');
  }

  public destroy(req: Request, res: Response): void {
    res.status(200).send('função destroy');
  }
}

