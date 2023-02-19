import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { PremierModule } from './premier/premier.module';

@Module({
  imports: [CommonModule, PremierModule, ],
  controllers: [
     AppController],
  providers: [AppService],
})
export class AppModule { }
