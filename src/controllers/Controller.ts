import { Request, Response } from 'express';

interface Controller {
    index(request: Request, response: Response) : Response;
    show(request: Request, response: Response) : Response;
    create(request: Request, response: Response) : Response;
    update(request: Request, response: Response) : Response;
    delete(request: Request, response: Response) : Response;
}

export default Controller;
