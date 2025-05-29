// src/movies/movies.service.ts
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    try {
      const movie = this.movieRepository.create(createMovieDto);
      return await this.movieRepository.save(movie);
    } catch (error: any) {
      throw new BadRequestException(error.detail || 'Error creating movie');
    }
  }

  async findAll(query: FilterMoviesDto): Promise<Movie[]> {
    const {
      genre,
      minRating,
      maxDuration,
      title,
      sortBy = 'release_date',
      order = 'DESC',
    } = query;

    const qb = this.movieRepository.createQueryBuilder('movie');

    if (genre) {
      qb.andWhere('movie.genre = :genre', { genre });
    }

    if (minRating) {
      qb.andWhere('movie.rating >= :minRating', { minRating });
    }

    if (maxDuration) {
      qb.andWhere('movie.duration <= :maxDuration', { maxDuration });
    }

    if (title) {
      qb.andWhere('LOWER(movie.title) LIKE LOWER(:title)', {
        title: `%${title}%`,
      });
    }

    // Map sorting enum to actual column names
    const sortMapping = {
      release_date: 'release_year',
      rating: 'rating',
      duration: 'duration',
    };

    const sortColumn = sortMapping[sortBy] || 'release_year';
    qb.orderBy(`movie.${sortColumn}`, order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC');

    return qb.getMany();
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
