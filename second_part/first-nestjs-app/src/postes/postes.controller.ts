import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PostesService } from "./postes.service";
import { CreatePosteDto } from "./dto/create-poste.dto";
import { UpdatePosteDto } from "./dto/update-poste.dto";

//* -> nest generate resource postes
//* This command will generate a new resource called postes with a controller, service, and module

@Controller("postes")
export class PostesController {
    constructor(private readonly postesService: PostesService) {}

    @Post()
    create(@Body() createPosteDto: CreatePosteDto) {
        return this.postesService.create(createPosteDto);
    }

    @Get()
    findAll() {
        return this.postesService.findAll();
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
    findOne(@Param("id") id: string) {
        return this.postesService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updatePosteDto: UpdatePosteDto) {
        return this.postesService.update(+id, updatePosteDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.postesService.remove(+id);
    }

    @Get("*") //? This route will match any GET request that does not match any of the above routes
    notFound() {
        return "Route not found";
    }
}
