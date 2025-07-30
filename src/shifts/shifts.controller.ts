import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { Shift } from './!Shift';
import { addDto } from './add.dto';

@Controller('shifts')
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }
    @Get()
    getShifts(): Shift[] {
        return this.shiftsService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Shift | Error {
        const shift = this.shiftsService.findOne(Number(id));
        if (!shift) {
            throw new Error("Shift not found");
        }
        return shift;
    }

    @Post()
    addShift(@Body() shift: addDto): void {
        this.shiftsService.addShift(shift.assignmentId, shift.soldierId)
    }
}
