import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRoutes {
  private router: Router = Router();
  private readonly controller: UserController;

  constructor() {
    this.controller = new UserController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    this.router.put('/:id', this.controller.update);
    this.router.delete('/:id', this.controller.destroy);
  }

  public routes(): Router {
    return this.router;
  }
}

