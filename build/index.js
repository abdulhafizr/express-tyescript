"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// All Routes
const routes_1 = require("./routes");
// Utilities
const DATABASEURL = 'mongodb://ahr-admin:221122@cluster0-shard-00-00.k9mrv.mongodb.net:27017,cluster0-shard-00-01.k9mrv.mongodb.net:27017,cluster0-shard-00-02.k9mrv.mongodb.net:27017/ahr?ssl=true&replicaSet=atlas-11vykd-shard-0&authSource=admin&retryWrites=true&w=majority';
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
        this.databaseConnection = () => {
            mongoose_1.default.connect(DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true });
            const database = mongoose_1.default.connection;
            database.on('error', () => {
                console.log("Connection to database error");
            });
            database.once('open', () => {
                console.log("Connection to database success");
            });
        };
        this.routes = () => {
            this.app.get("/", (request, response) => {
                response.send("Dashboard");
            });
            this.app.use("/users", routes_1.UserRoutes);
        };
        this.app = express_1.default();
        this.middleware();
        this.databaseConnection();
        this.routes();
    }
}
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
