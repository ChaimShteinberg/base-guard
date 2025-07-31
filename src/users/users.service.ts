import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userModel: typeof Users){}
    private users: User[] = [
        {
            userId: 1,
            username: "chaim",
            hashPassword: "123456",
            role: "commander",
        },
        {
            userId: 2,
            username: "mendy",
            hashPassword: "123456",
            role: "soldier",
        },
    ]

    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }

    async addUser(username: string, hashPass: string): Promise<User> {
        this.users.push({
            userId: this.users.length,
            username: username,
            hashPassword: hashPass,
            role: "soldier",
        })
        const user: User = await this.userModel.create({username, hashPass})
        return user
        return this.users[this.users.length - 1]
    }
}
