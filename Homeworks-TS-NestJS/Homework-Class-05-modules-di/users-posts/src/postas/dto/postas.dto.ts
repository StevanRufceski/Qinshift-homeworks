import { IsString, MinLength, IsNumber, IsDefined } from 'class-validator'
export class CreatePostaDto {
    @IsString()
    @MinLength(2)
    title: string;
    @IsString()
    @MinLength(2)
    content: string;
    @IsNumber()
    @IsDefined()
    authorId: number;
}    
export class UpdatePostaDto extends CreatePostaDto{}
export class PostaDto extends CreatePostaDto{
    @IsNumber()
    @MinLength(2)
    id: number;
}