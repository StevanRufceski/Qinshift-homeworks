import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PostasService } from './postas.service';
import { PostaDto, CreatePostaDto, UpdatePostaDto } from 'src/postas/dto/postas.dto';

@Controller('postas')
export class PostasController {
    constructor(private readonly postasService: PostasService) { }

    @Get('/filter')
    @HttpCode(HttpStatus.FOUND)
    filterPostasByAuthorId(@Query('author') authorId: number): PostaDto[] {
        return this.postasService.filterPostasByAuthorId(Number(authorId));
    }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    findAll(): PostaDto[] {
        return this.postasService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    findOne(@Param('id', ParseIntPipe) id: number): PostaDto | null {
        return this.postasService.findOne(id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreatePostaDto): PostaDto {
        return this.postasService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() body: UpdatePostaDto, @Param('id', ParseIntPipe) id: number): PostaDto | null {
        return this.postasService.update(id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): void {
        return this.postasService.delete(id)
    }

}
