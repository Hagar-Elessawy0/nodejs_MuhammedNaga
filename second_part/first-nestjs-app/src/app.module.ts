import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { ChatModule } from "./chat/chat.module";
import { PostsModule } from "./postes/posts.module";
import { AuthMiddleware } from "./middleware/auth/auth.middleware";
import { DashboardModule } from "./dashboard/dashboard.module";
import { RequestMethod } from "@nestjs/common/enums/request-method.enum";

//* This file is the root module of your NestJS application
//* You can import other modules, controllers, and providers here
//* Controllers are responsible for handling incoming requests and returning responses
//* Providers are used to encapsulate business logic and can be injected into controllers or other providers
//* Modules are used to organize your application into cohesive blocks of functionality, It"s containers for other modules, controllers, and providers
//* Decorators are TypeScript features that allow you to add metadata (interface) to classes, methods, or properties in NestJS, allowing you to customize their behavior, Always use them before the class, method, or property definition

//? Decorator that marks this class as a NestJS module
@Module({
    controllers: [], //? Add your controllers here - allways an array
    imports: [UsersModule, ProductsModule, ChatModule, PostsModule, DashboardModule], //? Import other modules (Non-branching models) here - allways an array
})

//? A normal class that is decorated with @Module to define the module"s metadata
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).exclude({ path: "dashboard", method: RequestMethod.GET }).forRoutes("*"); //? Apply AuthMiddleware to all routes in the application
    }
}
