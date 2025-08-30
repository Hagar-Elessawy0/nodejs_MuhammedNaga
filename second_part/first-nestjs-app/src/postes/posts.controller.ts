import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

//* -> nest generate resource posts
//* This command will generate a new resource called posts with a controller, service, and module

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    //* Wildcard Routes
    //? The asterisk (*) acts as a wildcard that can match any sequence of characters
    //? This route will match any GET request that starts with "ab" and ends with "cd", with any characters in between
    //! Should be defined after all other specific routes to avoid route conflicts
    @Get("ab*cd")
    getWildcard() {
        return "This route uses a wildcard";
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.postsService.findOne(id);
    }

    @Patch(":id")
    update(@Param("id", ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete(":id")
    remove(@Param("id", ParseIntPipe) id: number) {
        return this.postsService.remove(id);
    }

    @Get("*") //? This route will match any GET request that does not match any of the above routes
    notFound() {
        return "Route not found";
    }
}
