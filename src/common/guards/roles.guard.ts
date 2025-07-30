import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const token = this.getToken(request)
    if (!token) {
      throw new Error("token not found")
    }
    try {
      const payload = this.jwtService.verify(
        token
      )
      request["user"] = payload
    } catch (error) {
      throw new Error(error)
    }
    const role = request.user.role 
    const hasRole = roles.includes(role)
    if (!hasRole)
      throw new Error("Access denied: insufficient permissions")
    return true;
  }

  private getToken(request: Request): string | undefined {
    return request.headers?.authorization
  }
}
