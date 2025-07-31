import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userModel: typeof Users){}

    async findOne(username: string): Promise<Users | null> {
        return await this.userModel.findOne({where: {username}});
    }

    async addUser(username: string, hashPassword: string): Promise<User> {
        const user: User = await this.userModel.create({username, hashPassword})
        return user
    }
}
