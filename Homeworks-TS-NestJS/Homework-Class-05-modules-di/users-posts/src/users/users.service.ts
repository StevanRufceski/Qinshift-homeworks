import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDto, CreateUserDto, UpdateUserDto } from 'src/users/dto/users.dto';


@Injectable()
export class UsersService {
    private users: UserDto[] = [
        {
            id: 1,
            name: 'oneuser',
            email: 'oneuser@getMaxListeners.com',
            role: 'supervisor',
            ownpostasids: [1],
        },
        {
            id: 2,
            name: 'twouser',
            email: 'twouser@getMaxListeners.com',
            role: 'operator',
            ownpostasids: [2]
        },
        {
            id: 3,
            name: 'threeuser',
            email: 'threeser@getMaxListeners.com',
            role: 'buyer',
            ownpostasids: []
        }
    ];
    findAll(): UserDto[] {
        return this.users;
    }

    findOne(id: number): UserDto {
        const user: UserDto | undefined = this.users.find(
            (user) => user.id === id);
        if (!user) {
            throw new NotFoundException (`User with id ${id} is not found.`);
        }
        return user;
    }
    create(body: CreateUserDto): UserDto {
        if ((!body.name) || (!body.email) || (!body.role)) {
            throw new BadRequestException(`You must enter all properties for User`)
        }
        const theUsers = this.users.filter(u => u.email === body.email);
        if (theUsers.length > 0) {
            throw new BadRequestException(`User with email ${body.email} already exists`);
        }
        const newUser = {
            ...body,
            id: this.users.length + 1,
        } satisfies UserDto;
        this.users.push(newUser);
        return newUser;
    }
    update(id: number, body: UpdateUserDto | UserDto): UserDto {
        const userIndex = this.users.findIndex(
            (user) => user.id === id,
        );

        if (userIndex < 0) {
            throw new NotFoundException(`User with ID: ${id} is not found`);
        }
        const updatedUser: UserDto =  {
            ...this.users[userIndex],
            ...body,
            id,
        };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }
    delete(id: number): void {
        const index = this.users.findIndex((user) => user.id === id);

        if (index < 0) {
            throw new NotFoundException(`User with ID: ${id} is not found`);
        }
        this.users.splice(index, 1);
    }

}