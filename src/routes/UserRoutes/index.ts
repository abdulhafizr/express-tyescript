import {Router, Request, Response} from 'express';
import Routes from '../Routes';

class UserRoutes implements Routes {
    public router: Router;
    
    constructor() {
        this.router = Router();
        
        this.routes();
    }

    public routes = () : void => {
        this.router.get("/", (request: Request, response: Response) => {
            response.send("User Page");
        })
        this.router.post("/", (request: Request, response: Response) => {
            response.send(request.body);
        })
    }
}

export default new UserRoutes().router;
