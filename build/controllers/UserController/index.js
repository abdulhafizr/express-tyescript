"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
class UserController {
    constructor() {
        this.index = (request, response) => {
            models_1.User.find({}, (error, data) => {
                if (error)
                    return response.status(500).json({ message: "Internal server error", error });
                response.status(200).json({
                    message: "Get all user success",
                    method: request.method,
                    data,
                });
            });
        };
        this.show = (request, response) => {
            response.send("Show a User");
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
            response.send("Update a User");
        };
        this.delete = (request, response) => {
            response.send("Delete a User");
        };
    }
}
exports.default = new UserController();
