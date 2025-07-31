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

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306, 
    username: "root", 
    password: "",
    database: "base-guard", 
    models: [Users, Assignments]
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
