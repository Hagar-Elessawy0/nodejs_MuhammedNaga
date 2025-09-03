import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        // if (!req.headers.authorization) {
        //     return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        // }

        const token = req.headers["authorization"]?.split(" ")[1]; //? use ? to avoid error if authorization header is not present
        if (!token) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: "Bad request" });
        }

        // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        // if (!decoded) {
        //     return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Invalid token" });
        // }

        req["user"] = {
            username: "Hagora",
            roles: ["admin", "manager"], //? roles should be array of strings
        };

        next();
    }
}
//! Class middleware for authentication is used in app.module.ts
//? Can make this middleware as function instead of class
/* 
export function authMiddleware(req: any, res: any, next: () => void) {    
    if (!req.headers.authorization) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
    next();
}
*/
//! If you use function, you need to use it in main.ts as below
// app.use(authMiddleware);
