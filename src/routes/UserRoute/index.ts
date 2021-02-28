import { UserController } from '../../controllers';
import BaseRoute from '../BaseRoute';

class UserRoutes extends BaseRoute {

    constructor() {
        super();
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
