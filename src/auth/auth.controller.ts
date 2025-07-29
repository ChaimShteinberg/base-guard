import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignDto } from './sign.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("signin")
    signIn(@Body() user_pass: SignDto) {
        const {username, password} = user_pass;
        return this.authService.signIn(username, password)
    }
}
