import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.module';
import { AdsModule } from './ads/ads.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/adtech'),
    CampaignsModule,
    AdsModule,
    StatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
