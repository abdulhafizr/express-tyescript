import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// All Routes
import { UserRoutes } from './routes';

// Utilities
const DATABASEURL: string = 'mongodb://ahr-admin:221122@cluster0-shard-00-00.k9mrv.mongodb.net:27017,cluster0-shard-00-01.k9mrv.mongodb.net:27017,cluster0-shard-00-02.k9mrv.mongodb.net:27017/ahr?ssl=true&replicaSet=atlas-11vykd-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT: number = 4000;


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.databaseConnection();
        this.routes();
    }

    protected middleware = () : void => {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected databaseConnection = () : void => {
        mongoose.connect(DATABASEURL, {useNewUrlParser: true, useUnifiedTopology: true});

        const database = mongoose.connection;
        database.on('error', () => {
            console.log("Connection to database error");
        })
        database.once('open', () => {
            console.log("Connection to database success");
        })
    }

    protected routes = () : void => {
        this.app.get("/", (request: Request, response: Response) => {
            response.send("Dashboard");
        })

        this.app.use("/api/v1/user", UserRoutes);
    } 
}

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})
