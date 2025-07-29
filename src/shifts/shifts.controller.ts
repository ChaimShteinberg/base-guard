import { Controller, Get } from '@nestjs/common';

@Controller('shifts')
export class ShiftsController {
    @Get()
    getShifts():string{
        return "shifts";
    }
}
