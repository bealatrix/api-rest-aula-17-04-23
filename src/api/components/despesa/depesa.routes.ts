// Arquivo: base.routes.ts

import { Router } from 'express';
import { DespesaController } from './despesa.controller';

export class DespesaRoutes {
    private router: Router = Router();
    private readonly controller: DespesaController;

    constructor() {
        this.controller = new DespesaController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        //this.router.get('/info', this.controller.info);
    }

    public routes(): Router {
        return this.router;
    }
}