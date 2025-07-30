import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";

type Token = string

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signUp(username: string, pass: string): Promise<Token> {
        const hashPass = await bcrypt.hash(pass, 12)
        const user: User = this.usersService.addUser(username, hashPass)
        const token: Token = this.jwtService.sign({username: user.username, role: user.role})
        return token
    }

    async signIn(username: string, pass: string): Promise<Token | Error> {
        const user = this.usersService.findOne(username);
        if (!user) {
            throw new Error("user not found")
        }
        const { password, role } = user
        const match = await bcrypt.compare(pass, password)
        if (!match) {
            throw new Error("Invalid password")
        }
        const token: Token = this.jwtService.sign({username, role})
        return token
    }
}
