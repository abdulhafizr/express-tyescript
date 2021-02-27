import { Request, Response } from 'express';
import { User } from '../../models';
import Controller from '../Controller';

class UserController implements Controller {
    index = (request: Request, response: Response) : void => {
        User.find({}, (error, data) => {
            if(error) return response.status(500).json({message: "Internal server error", error});

            response.status(200).json({
                message: "Get all user success",
                method: request.method,
                data,
            });
        });
    }
    show = (request: Request, response: Response) : void => {
        response.send("Show a User");
    }
    create = (request: Request, response: Response) : void => {
        const {name, email, photo} = request.body;
        User.create({name, email, photo}, (error, data) => {
            if(error) return response.status(500).json({message: "Internal server error", error});

            response.status(201).json({
                message: "Success to create user",
                method: request.method,
                data,
            })
        })
    }
    update = (request: Request, response: Response) : void => {
        response.send("Update a User");
    }
    delete = (request: Request, response: Response) : void => {
        response.send("Delete a User");
    }
}

export default new UserController();
