"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
class UserRoutes {
    constructor() {
        this.routes = () => {
            this.router.get("/", controllers_1.UserController.index);
            this.router.post("/", controllers_1.UserController.create);
        };
        this.router = express_1.Router();
        this.routes();
    }
}
exports.default = new UserRoutes().router;
