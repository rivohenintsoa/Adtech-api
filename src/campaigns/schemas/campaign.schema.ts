import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CampaignDocument = Campaign & Document

@Schema({ timestamps: true })
export class Campaign {

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  advertiser: string

  @Prop({ required: true })
  startDate: Date

  @Prop({ required: true })
  endDate: Date

  @Prop({ required: true })
  budget: number

  @Prop({ default: 0 })
  impressionsServed: number

  @Prop({ type: [String], required: true })
  targetCountries: string[]

  @Prop({ default: 'active' })
  status: string
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign)