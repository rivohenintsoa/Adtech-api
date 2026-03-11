export class CreateCampaignDto {
  name: string
  advertiser: string
  startDate: Date
  endDate: Date
  budget: number
  targetCountries: string[]
}