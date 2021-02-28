"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
class UserRoutes {
    constructor() {
        this.routes = () => {
            this.router.get("/", controllers_1.UserController.index);
            this.router.get("/:_id", controllers_1.UserController.show);
            this.router.post("/", controllers_1.UserController.create);
            this.router.patch("/:_id", controllers_1.UserController.update);
            this.router.delete("/:_id", controllers_1.UserController.delete);
        };
        this.router = express_1.Router();
        this.routes();
    }
}
exports.default = new UserRoutes().router;
