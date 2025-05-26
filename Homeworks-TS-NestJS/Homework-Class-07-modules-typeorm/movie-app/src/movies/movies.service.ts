import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private readonly movieRepository: Repository<Movie>,
  ) { }

  async create(body: CreateMovieDto): Promise<Movie> {
    try {
      const movie = this.movieRepository.create(body);
      return await this.movieRepository.save(movie);
    } catch (error: any) {
      throw new BadRequestException(error.detail);
    }
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.preload({
      id,
      ...updateMovieDto,
    });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return this.movieRepository.save(movie);
  }

  async remove(id: string): Promise<void> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    await this.movieRepository.remove(movie);
  }

}
