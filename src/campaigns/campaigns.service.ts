import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';
import { Model } from 'mongoose';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
  ) {}

  async create(data: CreateCampaignDto) {
    const campaign = new this.campaignModel({
      ...data,
      impressionsServed: 0,
      status: 'active',
    });
    return campaign.save();
  }

  async findAll(filters: any) {
    const query: any = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.advertiser) {
      query.advertiser = filters.advertiser;
    }

    if (filters.country) {
      query.targetCountries = filters.country;
    }

    return this.campaignModel.find(query);
  }
}
