import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShiftsModule } from './shifts/shifts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AssignmentsModule } from './assignments/assignments.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.entity';
import { Assignments } from './assignments/assignments.entity';
import { Shifts } from './shifts/entities/shifts.entity';
import { ShiftSoldiers } from './shifts/entities/shift-soldiers.entity';
import { ShiftAssignments } from './shifts/entities/shift-assignments.entity';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306, 
    username: "root", 
    password: "",
    database: "base-guard", 
    models: [Users, Assignments, Shifts, ShiftSoldiers, ShiftAssignments]
  }),
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    UsersModule,
    AuthModule,
    AssignmentsModule,
    ShiftsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
