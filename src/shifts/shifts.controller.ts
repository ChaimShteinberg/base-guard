// import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { RolesGuard } from 'src/common/guards/roles.guard';
// import { Roles } from 'src/common/guards/roles.decorator';

import { Body, Controller, Get, Headers, Post, Request, UseGuards } from "@nestjs/common";
import { ShiftsService } from "./shifts.service";
import { Shifts } from "./entities/shifts.entity";
import { createShiftDto } from "./createShift.dto";
import { RolesGuard } from "src/common/guards/roles.guard";
import { Roles } from "src/common/guards/roles.decorator";

@Controller('shifts')
@UseGuards(RolesGuard)
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }

    @Get()
    @Roles('commander')
    async getAllShifts(): Promise<Shifts[]> {
        return await this.shiftsService.findAllShifts();
    }

    @Get('myShifts')
    @Roles('commander', 'soldier')
    async getMyShifts(@Request() req): Promise<Shifts[] | Error> {
        console.log(req)
        const userId = req.user.userId;
        console.log(userId)
        const shifts = await this.shiftsService.getMyShifts(userId)
        if (!shifts) {
            throw new Error("Shift not found");
        }
        return shifts;
    }

    @Post()
    @Roles('commander')
    async addShift(@Body() shift: createShiftDto): Promise<void> {
        await this.shiftsService.createShift(
            shift.start_time,
            shift.end_time,
            shift.soldiersId,
            shift.assignmentsId
        )
    }
}
