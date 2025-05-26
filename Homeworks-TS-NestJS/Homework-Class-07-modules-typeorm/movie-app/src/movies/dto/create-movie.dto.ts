import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator"
import { Genre } from '../../common/types/genre.enum';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Type } from "class-transformer";

export class CreateMovieDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        example: 'Snatch'
    })
    title: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        example: 'Forbidden boxing matches'
    })
    desciption: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        example: '1980'
    })
    release_year: number

    @IsEnum(Genre)
    @IsNotEmpty()
    @ApiProperty({
        enum: Genre,
        example: Genre.Action,
    })
    genre: Genre

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        example: '120'
    })
    duration: number

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(10)
    @ApiProperty({
        type: Number,
        example: '7'
    })
    rating: number

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        type: String,
        example: 'http://route_to_download_poster'
    })
    poster_url: string

    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        type: String,
        example: '2025-01-20T15:00:00Z',
    })
    @CreateDateColumn()
    createdAt: Date;

    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        type: String,
        example: '2025-01-20T15:00:00Z',
    })
    @UpdateDateColumn()
    updatedAt: Date;
}
