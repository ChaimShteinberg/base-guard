import { Injectable } from '@nestjs/common';
import { Shifts } from './entities/shifts.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ShiftsService {
    constructor(@InjectModel(Shifts)
    private shiftsModel: typeof Shifts
    ) { }

    async findAllShifts(): Promise<Shifts[]> {
        return await this.shiftsModel.findAll();
    }

    //     findOne(id: number): Shift | undefined {
    //         return this.shifts.find(shift => shift.id === id);
    //     };

    async createShift(
        start_time: Date,
        end_time: Date,
        soldiersId: number[],
        assignmentsId: number[]
    ): Promise<void> {
        const shift = await this.shiftsModel.create({
            start_time,
            end_time,
        })

        await shift.$set('soldiers', soldiersId);
        await shift.$set('assignments', assignmentsId)
    }
}