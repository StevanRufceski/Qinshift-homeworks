import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostasModule } from './postas/postas.module';

@Module({
  imports: [UsersModule, PostasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
