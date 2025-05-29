// src/movies/movies.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { Movie } from './entities/movie.entity';
import { Genre } from 'src/common/types/genre.enum';
import { Sorting } from 'src/common/types/sorting.enum';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiCreatedResponse({ description: 'Movie has been created', type: Movie })
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies (with filters and sorting)' })
  @ApiOkResponse({
    description: 'Filtered and/or sorted list of movies',
    type: [Movie],
  })
  @ApiQuery({ name: 'genre', required: false, enum: Genre, enumName: 'Genre' })
  @ApiQuery({
    name: 'minRating',
    required: false,
    type: Number,
    example: 5,
  })
  @ApiQuery({
    name: 'maxDuration',
    required: false,
    type: Number,
    example: 120,
  })
  @ApiQuery({
    name: 'title',
    required: false,
    type: String,
    example: 'Snatch',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    enum: Sorting,
    enumName: 'Sorting',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    enum: ['ASC', 'DESC'],
    example: 'DESC',
  })
  findAll(@Query() query: FilterMoviesDto): Promise<Movie[]> {
    return this.moviesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find movie by ID' })
  @ApiOkResponse({
    description: `Movie with specified ID is returned`,
    type: Movie,
  })
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit movie by ID' })
  @ApiOkResponse({
    description: `Movie with specified ID is updated`,
    type: Movie,
  })
  update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete movie by ID' })
  @ApiOkResponse({
    description: `Movie with specified ID is deleted`,
    type: Movie,
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.moviesService.remove(id);
  }
}
