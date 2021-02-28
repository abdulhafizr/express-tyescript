"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../../controllers");
const BaseRoute_1 = __importDefault(require("../BaseRoute"));
class UserRoutes extends BaseRoute_1.default {
    constructor() {
        super();
        this.routes = () => {
            this.router.get("/", controllers_1.UserController.index);
            this.router.get("/:_id", controllers_1.UserController.show);
            this.router.post("/", controllers_1.UserController.create);
            this.router.patch("/:_id", controllers_1.UserController.update);
            this.router.delete("/:_id", controllers_1.UserController.delete);
        };
        this.routes();
    }
}
exports.default = new UserRoutes().router;
