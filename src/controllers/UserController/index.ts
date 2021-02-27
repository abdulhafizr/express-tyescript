import { Request, Response } from 'express';
import Controller from '../Controller';

class UserController implements Controller {
    index = (request: Request, response: Response) : Response => {
        return response.send("Show all User");
    }
    show = (request: Request, response: Response) : Response => {
        return response.send("Show a User");
    }
    create = (request: Request, response: Response) : Response => {
        return response.send("Create a User");
    }
    update = (request: Request, response: Response) : Response => {
        return response.send("Update a User");
    }
    delete = (request: Request, response: Response) : Response => {
        return response.send("Delete a User");
    }
}

export default new UserController();
