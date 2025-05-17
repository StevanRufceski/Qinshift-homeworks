import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { User, CreateUser, UpdateUser } from 'src/common/types/user';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            name: 'oneuser',
            email: 'oneuser@getMaxListeners.com',
            role: 'supervisor',
        },
        {
            id: 2,
            name: 'twouser',
            email: 'twouser@getMaxListeners.com',
            role: 'operator',
        }
    ];
    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | null {
        return this.users.find((user) => user.id === id) ??
            null;
    }
    create(body: CreateUser): User {
        if ((!body.name) || (!body.email) || (!body.role)) {
            throw new BadRequestException(`You must enter all properties for User`)
        }
        const newUser = {
            ...body,
            id: this.users.length + 1,
        } satisfies User;
        this.users.push(newUser);
        return newUser;
    }
    update(id: number, body: UpdateUser): User {
        const userIndex = this.users.findIndex(
            (user) => user.id === id,
        );

        if (userIndex < 0) {
            throw new NotFoundException(`User with ID: ${id} is not found`);
        }
        const updatedUser = {
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
            return;
        }
        this.users.splice(index, 1);
    }

}