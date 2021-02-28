import { Router } from 'express';

abstract class BaseRoute {
    public router: Router;
    
    constructor() {
        this.router = Router();
    }
}

export default BaseRoute;
