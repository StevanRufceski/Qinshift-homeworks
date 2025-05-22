import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, CreateUserDto, UpdateUserDto } from 'src/users/dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    findAll(): UserDto[] {
        return this.usersService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    findOne(@Param('id', ParseIntPipe) id: number): UserDto | null {
        return this.usersService.findOne(id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateUserDto): UserDto {
        return this.usersService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() body: UpdateUserDto, @Param('id', ParseIntPipe) id: number): UserDto | null {
        return this.usersService.update(id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): void {
        return this.usersService.delete(+id)
    }
}
