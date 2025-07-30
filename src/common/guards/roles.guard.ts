import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles){
      return true
    }
    const role = "commander"
    const hasRole = roles.includes(role)
    if (!hasRole)
      throw new Error("Access denied: insufficient permissions")
    return true;
  }
}
