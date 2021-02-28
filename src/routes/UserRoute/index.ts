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
        this.router.get("/:_id", UserController.show);
        this.router.post("/", UserController.create);
        this.router.patch("/:_id", UserController.update);
        this.router.delete("/:_id", UserController.delete);
    }
}

export default new UserRoutes().router;
