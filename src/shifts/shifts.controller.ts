// import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { RolesGuard } from 'src/common/guards/roles.guard';
// import { Roles } from 'src/common/guards/roles.decorator';

import { Body, Controller, Get, Post } from "@nestjs/common";
import { ShiftsService } from "./shifts.service";
import { Shifts } from "./entities/shifts.entity";
import { createShiftDto } from "./createShift.dto";

@Controller('shifts')
// @UseGuards(RolesGuard)
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }

    @Get()
    //     @Roles('commander', 'soldier')
    async getAllShifts(): Promise<Shifts[]> {
        return await this.shiftsService.findAllShifts();
    }

    //     @Get(':id')
    //     @Roles('commander', 'soldier')
    //     findOne(@Param('id') id: string): Shift | Error {
    //         const shift = this.shiftsService.findOne(Number(id));
    //         if (!shift) {
    //             throw new Error("Shift not found");
    //         }
    //         return shift;
    //     }

    @Post()
    //     @Roles('commander')
    async addShift(@Body() shift: createShiftDto): Promise<void> {
        await this.shiftsService.createShift(
            shift.start_time,
            shift.end_time,
            shift.soldiersId,
            shift.assignmentsId
        )
    }
}
