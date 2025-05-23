import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PostaDto, CreatePostaDto, UpdatePostaDto } from 'src/postas/dto/postas.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostasService {
    constructor(private readonly usersService: UsersService) { }
    private postas: PostaDto[] = [
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

    filterPostasByAuthorId(authorId: number): PostaDto[] {
        if (!authorId) {
            return this.postas;
        }

        const theUser = this.usersService.findOne(authorId);
        if (!theUser) {
            throw new BadRequestException(`You must enter an existing User id`);
        }

        const thePostas = this.postas.filter(p => p.authorId === authorId);
        if (thePostas.length === 0) {
            throw new BadRequestException(`User with ID ${authorId} doesn't have any postas.`);
        }
        return this.postas.filter(p => p.authorId === authorId);
    }


    findAll(): PostaDto[] {
        return this.postas;
    }

    findOne(id: number): PostaDto {
        const posta: PostaDto | undefined = this.postas.find(
            (posta) => posta.id === id);
        if (!posta) {
            throw new NotFoundException(`Posta with id ${id} is not found.`);
        }
        return posta;
    }

    create(body: CreatePostaDto): PostaDto {
        if (!body.title || !body.content || !body.authorId) {
            throw new BadRequestException(`You must enter all properties for Posta`);
        }

        const theUser = this.usersService.findOne(body.authorId);
        if (!theUser) {
            throw new BadRequestException(`You must enter an existing User id`);
        }

        const newPosta: PostaDto = {
            ...body,
            id: this.postas.length + 1,
        };
        this.postas.push(newPosta);
        // add newPosta to user
        theUser.ownpostasids.push(newPosta.id)
        console.log(theUser);
        this.usersService.update(body.authorId, {
            name: theUser.name,
            email: theUser.email,
            role: theUser.role,
            ownpostasids: theUser.ownpostasids,
        });
        // 
        return newPosta;
    }

    update(id: number, body: UpdatePostaDto): PostaDto {
        const postaIndex = this.postas.findIndex(
            (user) => user.id === id,
        );

        if (postaIndex < 0) {
            throw new NotFoundException(`Posta with ID: ${id} is not found`);
        }
        const updatedPosta = {
            ...this.postas[postaIndex],
            ...body,
            id,
        };
        this.postas[postaIndex] = updatedPosta;
        return updatedPosta;
    }
    delete(id: number): void {
        const postaIndex = this.postas.findIndex(
            (posta) => posta.id === id,
        );

        if (postaIndex < 0) {
            throw new NotFoundException(`Posta with ID: ${id} is not found`);
        }

        // remove newPosta from user
        const theUser = this.usersService.findOne(this.postas[postaIndex].authorId);
        if (!theUser) {
            throw new BadRequestException(`You must enter an existing User id`);
        }
        theUser.ownpostasids = theUser.ownpostasids.filter(id => id !== this.postas[postaIndex].id);
        this.usersService.update(this.postas[postaIndex].authorId, {
            name: theUser.name,
            email: theUser.email,
            role: theUser.role,
            ownpostasids: theUser.ownpostasids,
        });
        // 
        this.postas.splice(postaIndex, 1);

    }

}
