import { Controller, HttpCode, HttpStatus, Get, Param, Body, Post, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PostasService } from './postas.service';
import { PostaDto, CreatePostaDto, UpdatePostaDto } from 'src/postas/dto/postas.dto';
import { ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('postas')
export class PostasController {
    constructor(private readonly postasService: PostasService) { }

    @Get('/filter')
    @HttpCode(HttpStatus.FOUND)
        @ApiOperation({
        summary: "Filter postas per author's identity.",
    })
    @ApiOkResponse({
        description: 'All postas filtered successfully',
        type: [PostaDto],
    })
    filterPostasByAuthorId(@Query('author') authorId: number): PostaDto[] {
        return this.postasService.filterPostasByAuthorId(Number(authorId));
    }

    @Get()
    @HttpCode(HttpStatus.FOUND)
    @ApiOperation({
        summary: 'Get all postas',
    })
    @ApiOkResponse({
        description: 'All postas fetched successfully',
        type: [PostaDto],
    })
    findAll(): PostaDto[] {
        return this.postasService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    @ApiOperation({
        summary: 'Get posta by ID',
    })
    @ApiNotFoundResponse({
        description: 'Posta with ID not found',
    })
    @ApiOkResponse({
        description: 'Posta found by ID',
        type: PostaDto,
    })
    findOne(@Param('id', ParseIntPipe) id: number): PostaDto {
        return this.postasService.findOne(id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Create a new posta',
    })
    @ApiNotFoundResponse({
        description: 'Posta with ID not found',
    })
    @ApiCreatedResponse({
        description: 'A new posta has been created successfully',
        type: PostaDto,
    })
    create(@Body() body: CreatePostaDto): PostaDto {
        return this.postasService.create(body)
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiOperation({
        summary: 'Get order by ID',
    })
    @ApiNotFoundResponse({
        description: 'Order with ID not found',
    })
    @ApiOkResponse({
        description: 'A new order has been created successfully',
        type: PostaDto,
    })
    update(@Body() body: UpdatePostaDto, @Param('id', ParseIntPipe) id: number): PostaDto {
        return this.postasService.update(id, body)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({
        summary: 'Delete an order',
    })
    @ApiNoContentResponse({
        description: 'Posta has been deleted successfully',
    })
    delete(@Param('id', ParseIntPipe) id: number): void {
        return this.postasService.delete(id)
    }

}
