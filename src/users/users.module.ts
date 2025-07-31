import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.entity';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
