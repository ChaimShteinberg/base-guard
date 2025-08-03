import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shifts } from './entities/shifts.entity';
import { ShiftSoldiers } from './entities/shift-soldiers.entity';
import { ShiftAssignments } from './entities/shift-assignments.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Shifts, ShiftSoldiers, ShiftAssignments]),
        JwtModule.registerAsync({
          imports: [ConfigModule], 
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
          }),
          inject: [ConfigService],
    
  })],
  controllers: [ShiftsController],
  providers: [ShiftsService, RolesGuard]
})
export class ShiftsModule {}
