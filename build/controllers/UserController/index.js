"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.index = (request, response) => {
            return response.send("Show all User");
        };
        this.show = (request, response) => {
            return response.send("Show a User");
        };
        this.create = (request, response) => {
            return response.send("Create a User");
        };
        this.update = (request, response) => {
            return response.send("Update a User");
        };
        this.delete = (request, response) => {
            return response.send("Delete a User");
        };
    }
}
exports.default = new UserController();
