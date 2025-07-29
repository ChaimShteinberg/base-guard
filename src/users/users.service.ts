import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            userId: 1,
            username: "chaim",
            password: "123456",
            role: "commander",
        },
        {
            userId: 2,
            username: "mendy",
            password: "123456",
            role: "soldier",
        },
    ]

    findOne(username: string): object | undefined {
        return this.users.find(user => user.username === username);
    }
}
