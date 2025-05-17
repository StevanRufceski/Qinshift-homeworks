import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Posta, PostaAuthor, CreatePosta, UpdatePosta } from 'src/common/types/posta';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostasService {
    constructor(private readonly usersService: UsersService) { }
    private postas: Posta[] = [
        {
            id: 1,
            title: 'oneposta',
            content: 'talking about oneposta',
            authorId: { idOfAuthor: 1 },
        },
        {
            id: 2,
            title: 'twoposta',
            content: 'talking about twoposta',
            authorId: { idOfAuthor: 2 },
        }
    ];
    findAll(): Posta[] {
        return this.postas;
    }

    findOne(id: number): Posta | null {
        return this.postas.find((user) => user.id === id) ??
            null;
    }
    create(body: CreatePosta): Posta {
        if ((!body.title) || (!body.content) || (!body.authorId)) {
            throw new BadRequestException(`You must enter all properties for Posta`)
        }
        const theUser = this.usersService.findOne(body.authorId.idOfAuthor);
        if (!theUser) {
            throw new BadRequestException(`You must enter an existing User id`);
        }

        const newUser = {
            ...body,
            id: this.postas.length + 1,
        } satisfies Posta;

        this.postas.push(newUser);

        return newUser;
    }
    update(id: number, body: UpdatePosta): Posta {
        const userIndex = this.postas.findIndex(
            (user) => user.id === id,
        );

        if (userIndex < 0) {
            throw new NotFoundException(`Posta with ID: ${id} is not found`);
        }
        const updatedUser = {
            ...this.postas[userIndex],
            ...body,
            id,
        };
        this.postas[userIndex] = updatedUser;
        return updatedUser;
    }
    delete(id: number): void {
        const index = this.postas.findIndex((user) => user.id === id);

        if (index < 0) {
            return;
        }
        this.postas.splice(index, 1);
    }

}
