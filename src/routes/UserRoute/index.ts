import { Router } from 'express';
import { UserController } from '../../controllers';
import Routes from '../Routes';

class UserRoutes implements Routes {
    public router: Router;
    
    constructor() {
        this.router = Router();
        
        this.routes();
    }

    public routes = () : void => {
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
    }
}

export default new UserRoutes().router;
