"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __importDefault(require("../BaseRoute"));
const controllers_1 = require("../../controllers");
class AuthRoute extends BaseRoute_1.default {
    constructor() {
        super();
        this.routes = () => {
            this.router.post("/signup", controllers_1.AuthController.signup);
            this.router.post("/signin", controllers_1.AuthController.signin);
        };
        this.routes();
    }
}
exports.default = new AuthRoute().router;
