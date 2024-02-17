import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from 'src/apis/api.module';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [ApiModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
