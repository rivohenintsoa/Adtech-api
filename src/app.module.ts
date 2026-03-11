import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.module';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/adtech'),
    CampaignsModule,
    AdsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
