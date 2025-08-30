import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        if (!req.headers.authorization) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
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
