import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignsService } from './campaigns.service';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  create(@Body() dto: CreateCampaignDto) {
    return this.campaignsService.create(dto);
  }

  @Get()
  findAll(@Query() query) {
    return this.campaignsService.findAll(query);
  }
}
