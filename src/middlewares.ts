import express from "express";

export function setLoggerMiddleware(app: express.Application) {
    const logRequests: express.RequestHandler = (req, res, next) => {
        console.log(req.method, req.url, req.body);
        next();
    };
    app.use(logRequests);

}

export function setErrorHandlerMiddleware(app: express.Application) {
    const errorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
        if (res.headersSent) {
            next(err);
        }

        console.error(err);
        res.status(500);
        res.send("Something went wrong");
    };
    app.use(errorHandler);
}