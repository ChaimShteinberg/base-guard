import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[] = [
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

    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }

    addUser(username: string, password: string): User {
        this.users.push({
            userId: this.users.length,
            username: username,
            password: password,
            role: "soldier",
        })
        return this.users[this.users.length - 1]
    }
}
