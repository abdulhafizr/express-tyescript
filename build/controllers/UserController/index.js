"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
class UserController {
    constructor() {
        this.index = (request, response) => {
            models_1.User.find({}, (error, data) => {
                if (error)
                    return response.status(500).json({ message: "Internal Server Error", error });
                response.status(200).json({
                    message: "Get all user success",
                    method: request.method,
                    data,
                });
            });
        };
        this.show = (request, response) => {
            const { _id } = request.params;
            models_1.User.findOne({ _id }, (error, data) => {
                if (error)
                    return response.status(500).json({ message: 'Internal Server Error', error });
                response.status(200).json({
                    message: "Get a user success",
                    method: request.method,
                    data,
                });
            });
        };
        this.create = (request, response) => {
            const { name, email, photo } = request.body;
            models_1.User.create({ name, email, photo }, (error, data) => {
                if (error)
                    return response.status(500).json({ message: "Internal server error", error });
                response.status(201).json({
                    message: "Success to create user",
                    method: request.method,
                    data,
                });
            });
        };
        this.update = (request, response) => {
            const { _id } = request.params;
            const { name, email, photo } = request.body;
            models_1.User.updateOne({ _id }, { name, email, photo }, {}, (error, data) => {
                if (error)
                    return response.status(500).json({ message: "Internal server error", error });
                response.status(201).json({
                    message: "Success to update user",
                    method: request.method,
                    data: { name, email, photo },
                });
            });
        };
        this.delete = (request, response) => {
            const { _id } = request.params;
            models_1.User.deleteOne({ _id }, {}, (error) => {
                if (error)
                    return response.status(500).json({ message: "Internal server error", error });
                response.status(201).json({
                    message: "Success to delete user",
                    method: request.method,
                    data: { _id },
                });
            });
        };
    }
}
exports.default = new UserController();
