"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 4000;
class App {
    constructor() {
        this.routes = () => {
            this.app.get("/", (request, response) => {
                response.send("Dashboard");
            });
        };
        this.app = express_1.default();
        this.routes();
    }
}
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
