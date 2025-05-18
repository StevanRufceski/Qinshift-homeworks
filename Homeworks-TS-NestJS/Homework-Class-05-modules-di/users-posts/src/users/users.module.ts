import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PostasService } from 'src/postas/postas.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PostasService]
})
export class UsersModule {}
