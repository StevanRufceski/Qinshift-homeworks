import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Post()
  @ApiOperation({
    summary: 'Create a new movie',
  })
  @ApiCreatedResponse({
    description: 'Movie has been created',
    type: Movie,
  })
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all movies',
  })
  @ApiOkResponse({
    description: 'All movies are shown',
    type: [Movie],
  })
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find movie by id',
  })
  @ApiOkResponse({
    description: `Movie with specified id is shown`,
    type: [Movie],
  })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit movie by id',
  })
  @ApiOkResponse({
    description: `Movie with specified id is edited.`,
    type: [Movie],
  })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete movie by id',
  })
  @ApiOkResponse({
    description: `Movie with specified id is deleted.`,
    type: [Movie],
  })
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
