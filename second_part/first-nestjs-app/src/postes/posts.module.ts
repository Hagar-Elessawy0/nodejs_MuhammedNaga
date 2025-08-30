import { MiddlewareConsumer, NestModule, Module, RequestMethod } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { PostsMiddleware } from "src/middleware/posts/posts.middleware";

@Module({
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule implements NestModule {
    //* Implement the configure method to set up middleware
    configure(consumer: MiddlewareConsumer) {
        //? 1- Apply middleware to all routes in the PostsController
        //consumer.apply(PostsMiddleware).forRoutes(PostsController);

        //? 2- Use RouteInfo object to apply middleware to specific route(s)
        //consumer.apply(PostsMiddleware).forRoutes({ path: "posts", method: RequestMethod.GET });

        //? 3- Exclude specific route(s) from middleware application when using forRoutes with a controller or "*"
        //? 4- Use wildcard in exclude dynamic path
        consumer.apply(PostsMiddleware).exclude({ path: "posts/:id", method: RequestMethod.POST }, "posts/(.*)").forRoutes("*");
    }
}
