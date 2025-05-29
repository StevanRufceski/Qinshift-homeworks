import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { Genre } from '../../common/types/genre.enum';
import { Sorting } from '../../common/types/sorting.enum';

export class FilterMoviesDto {
  @IsOptional()
  @IsEnum(Genre)
  genre?: Genre;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(10)
  minRating?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxDuration?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(Sorting)
  sortBy?: Sorting;

  @IsOptional()
  @IsString()
  order?: 'ASC' | 'DESC';
}
