import express, { Application, Request, Response } from 'express';

const PORT = 4000;

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    protected routes = () : void => {
        this.app.get("/", (request: Request, response: Response) => {
            response.send("Dashboard");
        })
    } 
}

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})
