import { Module, forwardRef } from '@nestjs/common';
import { PostasController } from './postas.controller';
import { PostasService } from './postas.service';
import { UsersService } from 'src/users/users.service';
// import { UsersModule } from 'src/users/users.module';

@Module({
  // imports: [forwardRef(() => UsersModule)],
  controllers: [PostasController],
  providers: [PostasService, UsersService],
  exports: [PostasService]
})
export class PostasModule {}
