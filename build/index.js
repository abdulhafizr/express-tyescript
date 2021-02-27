"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const PORT = 4000;
class App {
    constructor() {
        this.middleware = () => {
            this.app.use(morgan_1.default("dev"));
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
            this.app.use(compression_1.default());
            this.app.use(helmet_1.default());
            this.app.use(cors_1.default());
        };
        this.routes = () => {
            this.app.get("/", (request, response) => {
                response.send("Dashboard");
            });
            this.app.post("/users", (request, response) => {
                response.send(request.body);
            });
        };
        this.app = express_1.default();
        this.middleware();
        this.routes();
    }
}
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
