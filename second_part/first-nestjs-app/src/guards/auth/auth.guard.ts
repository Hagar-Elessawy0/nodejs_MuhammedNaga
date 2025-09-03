import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // const request = context.switchToHttp().getRequest();
        // const customHeader = request.headers["x-custom-header"];
        // return customHeader === "allowed";

        const request = context.switchToHttp().getRequest();

        return !!request.user; //? If user is present in request, return true, else false
    }
}
