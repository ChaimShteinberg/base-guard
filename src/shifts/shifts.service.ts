import { Injectable } from '@nestjs/common';
import { Shifts } from './entities/shifts.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/users.entity';
import { Assignments } from 'src/assignments/assignments.entity';

@Injectable()
export class ShiftsService {
    constructor(
        @InjectModel(Shifts)
        private shiftsModel: typeof Shifts,
    ) { }

    async findAllShifts(): Promise<Shifts[]> {
        return await this.shiftsModel.findAll();
    }

    async getMyShifts(userId: number): Promise<Shifts[] | Error> {
        const shifts = await this.shiftsModel.findAll({
            include: [
                {
                    model: Users,
                    where: { userId },
                    through: { attributes: [] },
                    attributes: [],
                },
                {
                    model: Assignments,
                    through: { attributes: [] },
                },
            ],
        });
        if (!shifts) {
            throw new Error("shifts not found")
        }
        return shifts
    };

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