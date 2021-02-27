import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

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
    }

    protected routes = () : void => {
        this.app.get("/", (request: Request, response: Response) => {
            response.send("Dashboard");
        })

        this.app.post("/users", (request: Request, response: Response) => {
            response.send(request.body);
        })
    } 
}

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})
