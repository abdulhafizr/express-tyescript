import BaseRoute from '../BaseRoute';
import { AuthController } from '../../controllers';

class AuthRoute extends BaseRoute {

    constructor() {
        super();
        this.routes();
    }

    public routes = (): void => {
        this.router.post("/signup", AuthController.signup);
        this.router.post("/signin", AuthController.signin);
    }
}

export default new AuthRoute().router;
