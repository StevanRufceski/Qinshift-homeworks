import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { PostasService } from './postas.service';
import { Posta, CreatePosta, UpdatePosta } from 'src/common/types/posta';

@Controller('postas')
export class PostasController {
    constructor(private readonly postasService: PostasService) { }

    @Get('/filter')
    @HttpCode(HttpStatus.FOUND)
    filterPostasByAuthorId(@Query('author') authorId: number): Posta[] {
        return this.postasService.filterPostasByAuthorId(Number(authorId));
    }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    findAll(): Posta[] {
        return this.postasService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    findOne(@Param('id') id: string): Posta | null {
        return this.postasService.findOne(+id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreatePosta): Posta {
        return this.postasService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() body: UpdatePosta, @Param('id') id: string): Posta | null {
        return this.postasService.update(+id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string): void {
        return this.postasService.delete(+id)
    }

}
