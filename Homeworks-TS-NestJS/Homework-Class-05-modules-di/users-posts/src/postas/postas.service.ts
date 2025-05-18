import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Posta, CreatePosta, UpdatePosta } from 'src/common/types/posta';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostasService {
    constructor(private readonly usersService: UsersService) { }
    private postas: Posta[] = [
        {
            id: 1,
            title: 'oneposta',
            content: 'talking about oneposta',
            authorId: 1,

        },
        {
            id: 2,
            title: 'twoposta',
            content: 'talking about twoposta',
            authorId: 2,

        }
    ];

    filterPostasByAuthorId(authorId: number): Posta[] {
        if (!authorId) {
            return this.postas;
        }
        const thePostas = this.postas.filter(p => p.authorId === authorId);

        if (thePostas.length === 0) {
            throw new BadRequestException(`You must enter an existing User id`);
        }
        return this.postas.filter(p => p.authorId === authorId);

    }


    findAll(): Posta[] {
        return this.postas;
    }

    findOne(id: number): Posta | null {
        return this.postas.find((posta) => posta.id === id) ??
            null;
    }

    create(body: CreatePosta): Posta {
    if (!body.title || !body.content || !body.authorId) {
        throw new BadRequestException(`You must enter all properties for Posta`);
    }

    const theUser = this.usersService.findOne(body.authorId);
    if (!theUser) {
        throw new BadRequestException(`You must enter an existing User id`);
    }

    const newPosta: Posta = {
        ...body,
        id: this.postas.length + 1,
    };

    this.usersService.update(body.authorId, {
        name: theUser.name,
        email: theUser.email,
        role: theUser.role,
        ownpostasids: [...theUser.ownpostasids, newPosta.id],
    });

    this.postas.push(newPosta);

    return newPosta;
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
