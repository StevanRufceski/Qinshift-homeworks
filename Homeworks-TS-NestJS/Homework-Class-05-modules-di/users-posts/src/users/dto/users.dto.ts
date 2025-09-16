import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, MinLength, IsNumber, IsDefined } from 'class-validator'
import { PostaDto } from 'src/postas/dto/postas.dto';
export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @IsDefined()
    @ApiProperty({
        type: String,
        required: true,
        minLength: 2,
    })
    name: string;

    @IsEmail()
    @MinLength(5)
    @IsDefined()
    @ApiProperty({
        type: String,
        required: true,
        minLength: 5,
    })
    email: string;

    @IsString()
    @MinLength(2)
    @IsDefined()
    @ApiProperty({
        type: String,
        required: true,
        minLength: 2,
    })
    role: string;
}
export class UpdateUserDto extends CreateUserDto { }
export class UserDto extends CreateUserDto {
    @IsNumber()
    @MinLength(1)
    @IsDefined()
    @ApiProperty({
        type: Number,
        required: true,
        minLength: 1,
    })
    id: number;
}

export class UserDetailsDto extends UserDto {
  @IsArray()
  @ApiProperty({
    type: Array,
  })
  postasList: PostaDto[];
}