import { Request, Response } from 'express';
import { User } from '../../models';
import Controller from '../Controller';

class UserController implements Controller {
    index = (request: Request, response: Response) : void => {
        User.find({}, (error: Response, data: Response) => {
            if(error) return response.status(500).json({message: "Internal Server Error", error});

            response.status(200).json({
                message: "Get all user success",
                method: request.method,
                data,
            });
        });
    }
    show = (request: Request, response: Response) : void => {
        const { _id } = request.params;
        User.findOne({_id}, (error: Response, data: Response) => {
            if(error) return response.status(500).json({message: 'Internal Server Error', error})

            response.status(200).json({
                message: "Get a user success",
                method: request.method,
                data,
            })
        })
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
        const {_id} = request.params;
        const { name, email, photo } = request.body;

        User.updateOne({_id}, {name, email, photo}, {}, (error: Response, data: Response) => {
            if(error) return response.status(500).json({message: "Internal server error", error});

            response.status(201).json({
                message: "Success to update user",
                method: request.method,
                data: {name, email, photo},
            })
        });
    }
    delete = (request: Request, response: Response) : void => {
        const { _id } = request.params;
        User.deleteOne({_id}, {}, (error) => {
            if(error) return response.status(500).json({message: "Internal server error", error});

            response.status(201).json({
                message: "Success to delete user",
                method: request.method,
                data: {_id},
            })
        })
    }
}

export default new UserController();
