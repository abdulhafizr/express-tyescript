import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// All Routes
import { UserRoutes } from './routes';

const PORT = 4000;

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middleware();
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

    protected routes = () : void => {
        this.app.get("/", (request: Request, response: Response) => {
            response.send("Dashboard");
        })

        this.app.use("/users", UserRoutes);
    } 
}

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})
