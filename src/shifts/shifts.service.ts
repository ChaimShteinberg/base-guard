import { Injectable } from '@nestjs/common';
import { Shifts } from './entities/shifts.entity';
import { InjectModel } from '@nestjs/sequelize';
// import { Shift } from './!Shift';

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

    //     addShift(assignmentId: number, soldierId: number): void {
    //         const newShift: Shift = {
    //             id: this.shifts[this.shifts.length - 1].id + 1,
    //             assignmentId, 
    //             soldierId,
    //         }
    //         this.shifts.push(newShift)
    //     }
}
