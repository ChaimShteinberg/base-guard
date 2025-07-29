import { Injectable } from '@nestjs/common';
import { Shift } from './!Shift';

@Injectable()
export class ShiftsService {
    private shifts: Shift[] = [
        {
            id: 1,
            assignmentId: 1,
            soldierId: 2
        }
    ];

    getAll(): Shift[] {
        return this.shifts;
    }

    findOne(id: number): Shift | undefined {
        return this.shifts.find(shift => shift.id === id);
    };

    addShift(assignmentId: number, soldierId: number): void {
        const newShift: Shift = {
            id: this.shifts[this.shifts.length - 1].id + 1,
            assignmentId, 
            soldierId,
        }
        this.shifts.push(newShift)
    }
}
