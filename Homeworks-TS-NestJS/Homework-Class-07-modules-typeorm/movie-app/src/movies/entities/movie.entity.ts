import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Genre } from "src/common/types/genre.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        type: String,
        example: 'Snatch'
    })
    @Column()
    title: string;

    @ApiProperty({
        type: String,
        example: 'Forbidden boxing matches',
    })
    @Column({
        type: 'text',
    })
    desciption: string;

    @ApiProperty({
        type: Number,
        example: '1980'
    })
    @Column()
    release_year: number;

    @ApiProperty({
        enum: Genre,
        example: Genre.Action,
    })
    @Column({
        enum: Genre
    })
    genre: Genre;

    @ApiProperty({
        type: Number,
        example: '120'
    })
    @Column()
    duration: number;

    @ApiProperty({
        type: Number,
        example: '7'
    })
    @Column()
    rating: number;

    @ApiPropertyOptional({
        type: String,
        example: 'http://route_to_download_poster'
    })
    @Column()
    poster_url: string;

    @ApiProperty({
        type: String,
        example: '2025-01-20T15:00:00Z',
    })
    @CreateDateColumn()
    created_at: Date;

    @ApiProperty({
        type: String,
        example: '2025-01-20T15:00:00Z',
    })
    @UpdateDateColumn()
    updated_at: Date;

}
