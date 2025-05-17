import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, CreateUser, UpdateUser } from 'src/common/types/user';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    findOne(@Param('id') id: string): User | null {
        return this.usersService.findOne(+id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateUser): User {
        return this.usersService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() body: UpdateUser, @Param('id') id: string): User | null {
        return this.usersService.update(+id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string): void {
        return this.usersService.delete(+id)
    }
}
