import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { Shift } from './!Shift';
import { addDto } from './add.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/guards/roles.decorator';

@Controller('shifts')
@UseGuards(RolesGuard)
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }

    @Get()
    @Roles('commander', 'soldier')
    getShifts(): Shift[] {
        return this.shiftsService.getAll();
    }

    @Get(':id')
    @Roles('commander', 'soldier')
    findOne(@Param('id') id: string): Shift | Error {
        const shift = this.shiftsService.findOne(Number(id));
        if (!shift) {
            throw new Error("Shift not found");
        }
        return shift;
    }

    @Post()
    @Roles('commander')
    addShift(@Body() shift: addDto): void {
        this.shiftsService.addShift(shift.assignmentId, shift.soldierId)
    }
}
