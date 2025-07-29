import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type Token = string

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    signIn(username: string, pass: string): Token | Error {
        const user = this.usersService.findOne(username);
        if (!user) {
            throw new Error("user not found")
        }
        const { password, role } = user
        if (password !== pass) {
            throw new Error("Invalid password")
        }
        const token: Token = this.jwtService.sign({username, role})
        return token
    }
}
