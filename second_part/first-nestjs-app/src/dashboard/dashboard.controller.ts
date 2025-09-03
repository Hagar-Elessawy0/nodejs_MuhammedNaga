import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { CreateDashboardDto } from "./dto/create-dashboard.dto";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { AuthGuard } from "../guards/auth/auth.guard";
import { RolesGuard } from "src/guards/auth/roles/roles.guard";
import { Roles } from "src/decorators/roles/roles.decorator";
import { SystemRoles } from "src/guards/auth/roles/roles.enum";

@Controller("dashboard")
@UseGuards(RolesGuard, AuthGuard)
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Post()
    create(@Body() createDashboardDto: CreateDashboardDto) {
        return this.dashboardService.create(createDashboardDto);
    }

    @Get()
    @Roles(SystemRoles.ADMIN, SystemRoles.MANAGER) //* Roles that can access this route
    //@UseGuards(AuthGuard)
    findAll() {
        return this.dashboardService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.dashboardService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateDashboardDto: UpdateDashboardDto) {
        return this.dashboardService.update(+id, updateDashboardDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.dashboardService.remove(+id);
    }
}
