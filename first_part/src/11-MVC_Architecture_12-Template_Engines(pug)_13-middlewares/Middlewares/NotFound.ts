import { NextFunction, Request, Response } from "express";
export default class NotFoundMiddleware {

    static handle(req: Request, res: Response, next: NextFunction) {
        if(req.originalUrl.startsWith('/api')) {
            res.status(404).json({
                error: `API ${req.originalUrl} endpoint not found`,
            });

            return;
        }

        res.status(404).render('error', { 
            pageTitle: "Page Not Found",
            message: `The Page ${req.originalUrl} you are looking for does not exist`,
        });

        next();
    }

}