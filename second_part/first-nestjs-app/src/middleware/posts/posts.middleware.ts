import { Injectable, NestMiddleware } from "@nestjs/common";

//* -> nest generate middleware
//* Middleware is a function that is called before the route handler
//* Middleware can be used for logging, authentication, validation, etc
//* Middleware has access to the request and response objects
//* Middleware can either terminate the request-response cycle or call the next middleware in the stack
//* To apply middleware to specific routes, we need to use the configure method in the module file
//* To apply middleware globally, we need to use the app.use() method in main.ts
//* sequence of middleware execution is based on the order they are applied

@Injectable()
export class PostsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log("From PostsMeddleware...");

        next(); //? Call the next middleware or route handler in the chain
    }
}
