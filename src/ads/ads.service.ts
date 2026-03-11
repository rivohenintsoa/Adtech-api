import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Campaign,
  CampaignDocument,
} from '../campaigns/schemas/campaign.schema';

@Injectable()
export class AdsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
  ) {}

  // Simuler la diffusion d'une publicité
  async serveAd(country: string) {
    const now = new Date();

    const campaign = await this.campaignModel.findOne({
      status: 'active',
      startDate: { $lte: now },
      endDate: { $gte: now },
      targetCountries: { $in: [country] },
    });

    if (!campaign) {
      return { message: 'No campaign available' };
    }

    if (campaign.impressionsServed >= campaign.budget) {
      return { message: 'Budget exhausted' };
    }

    campaign.impressionsServed += 1;
    await campaign.save();

    return campaign;
  }
}
