import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, CreateUserDto, UpdateUserDto, UserDetailsDto } from 'src/users/dto/users.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    @ApiOperation({
        summary: 'Get all users',
        description: 'Here we return all users from the database',
    })
    findAll(): UserDto[] {
        return this.usersService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    @ApiOperation({
        summary: 'Get a single user by ID',
    })
    @ApiOkResponse({
        description: 'User is found by ID',
    })
    @ApiNotFoundResponse({
        description: 'User cannot be found by ID',
    })
    findOne(@Param('id', ParseIntPipe) id: number): UserDto | null {
        return this.usersService.findOne(id)
    }

    @Get('/:id/details')
    @ApiOperation({
        summary: "Get user with list of postas' ids",
    })
    @ApiOkResponse({
        description: 'User with the postas details is presented',
        type: UserDetailsDto,
    })
    @ApiNotFoundResponse({
        description: 'User cannot be found by ID',
    })
    userDetails(@Param('id', ParseIntPipe) id: number): UserDetailsDto {
        return this.usersService.userDetails(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Create a new user',
    })
    @ApiCreatedResponse({
        description: 'A new user has been successfully created',
        type: UserDto,
    })
    @ApiBadRequestResponse({
        description: 'Invalid data for user',
    })
    create(@Body() body: CreateUserDto): UserDto {
        return this.usersService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiOperation({
        summary: 'Update a user',
    })
    @ApiCreatedResponse({
        description: 'A user has been successfully updated.',
        type: UserDto,
    })
    @ApiBadRequestResponse({
        description: 'Invalid data for user',
    })
    update(@Body() body: UpdateUserDto, @Param('id', ParseIntPipe) id: number): UserDto | null {
        return this.usersService.update(id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({
        summary: 'Delete a user',
    })
    @ApiNoContentResponse({
        description: 'User has been deleted successfully',
    })
    delete(@Param('id', ParseIntPipe) id: number): void {
        return this.usersService.delete(+id)
    }
}
