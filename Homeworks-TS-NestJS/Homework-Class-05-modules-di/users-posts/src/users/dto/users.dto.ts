import { IsString, IsEmail, IsArray, MinLength, IsNumber } from 'class-validator'
export class CreateUserDto {
    @IsString()
    @MinLength(2)
    name: string;
    @IsEmail()
    @MinLength(2)
    email: string;
    @IsString()
    @MinLength(2)
    role: string;
    @IsArray()
    ownpostasids: number[];
}    
export class UpdateUserDto extends CreateUserDto{}
export class UserDto extends CreateUserDto{
    @IsNumber()
    @MinLength(2)
    id: number;
}