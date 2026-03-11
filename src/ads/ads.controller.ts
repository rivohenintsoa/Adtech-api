import { Body, Controller, Post } from '@nestjs/common';
import { AdsService } from './ads.service';

@Controller()
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post('serve-ad')
  serveAd(@Body() body) {
    return this.adsService.serveAd(body.country);
  }
}
