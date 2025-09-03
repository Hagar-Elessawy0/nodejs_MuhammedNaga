import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { SystemRoles } from "./roles.enum";
import { ForbiddenException } from "src/errors/forbidden.exception";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<SystemRoles[]>("roles", context.getHandler());

        if (!roles) {
            console.log("No roles found");
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user) {
            //? way 1
            //throw new UnauthorizedException();
            //? way 2
            throw new ForbiddenException();
        }

        return roles.every((role) => user.roles.includes(role)); //? every : all roles should match, some : any role should match
    }
}
