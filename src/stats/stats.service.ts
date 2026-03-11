import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Campaign,
  CampaignDocument,
} from 'src/campaigns/schemas/campaign.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
  ) {}
  async getStats() {
    const totalCampaigns = await this.campaignModel.countDocuments();

    const activeCampaigns = await this.campaignModel.countDocuments({
      status: 'active',
    });

    const impressions = await this.campaignModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$impressionsServed' },
        },
      },
    ]);

    const topAdvertiser = await this.campaignModel.aggregate([
      {
        $group: {
          _id: '$advertiser',
          impressions: { $sum: '$impressionsServed' },
        },
      },
      { $sort: { impressions: -1 } },
      { $limit: 1 },
    ]);

    return {
      totalCampaigns,
      activeCampaigns,
      totalImpressions: impressions[0]?.total || 0,
      topAdvertiser: topAdvertiser[0]?._id || null,
    };
  }
}
