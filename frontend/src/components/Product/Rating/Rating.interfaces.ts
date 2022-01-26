export interface RatingInterfaces {
    avgRate: number
    isReviewed: boolean
}

export interface RatesProps{
    count: number
    results: RateProps[]
}

export interface RateProps{
    date_added: string
    message: string
    model: number
    rate: number
}