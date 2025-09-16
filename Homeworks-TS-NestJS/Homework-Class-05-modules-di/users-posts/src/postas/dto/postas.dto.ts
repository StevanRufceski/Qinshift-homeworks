import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsNumber, IsDefined } from 'class-validator'
export class CreatePostaDto {
    @IsString()
    @MinLength(2)
    @IsDefined()
    @ApiProperty({
        type: String,
        required: true,
        minLength: 2,
        example: 'Greetings from Macedonia',
    })
    title: string;

    @IsString()
    @MinLength(2)
    @IsDefined()
    @ApiProperty({
        type: String,
        required: true,
        minLength: 2,
        example: 'Macedonia is great country. You shoul come here.',
    })
    content: string;

    @IsNumber()
    @IsDefined()
    @ApiProperty({
        type: Number,
        required: true,
        example: 1,
    })
    authorId: number;
}
export class UpdatePostaDto extends CreatePostaDto { }
export class PostaDto extends CreatePostaDto {
    @IsNumber()
    @ApiProperty({
        type: Number,
        example: 1,
    })
    id: number;
}