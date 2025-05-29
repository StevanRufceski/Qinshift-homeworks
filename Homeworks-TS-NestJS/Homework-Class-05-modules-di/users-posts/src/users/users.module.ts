import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PostasService } from 'src/postas/postas.service';
// import { PostasModule } from 'src/postas/postas.module';

@Module({
  // imports: [forwardRef(() => PostasModule)],
  controllers: [UsersController],
  providers: [UsersService, PostasService],
  exports: [UsersService]
})
export class UsersModule {}
