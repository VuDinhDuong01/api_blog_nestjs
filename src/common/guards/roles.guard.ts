/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ForbiddenException } from 'src/utils/base-exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true; // Nếu không có metadata roles, không cần kiểm tra vai trò
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user
    if(user && user.role && !this.matchRoles(user.role, roles)) throw new ForbiddenException('you have not permission')
    return  user && user.role && this.matchRoles(user.role, roles)
  }

  matchRoles(listRole: string[], userRole: string[]) {
    return listRole.some(item => userRole.includes(item))
  }


}
