"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.routes = () => {
            this.router.get("/", (request, response) => {
                response.send("User Page");
            });
            this.router.post("/", (request, response) => {
                response.send(request.body);
            });
        };
        this.router = express_1.Router();
        this.routes();
    }
}
exports.default = new UserRoutes().router;
