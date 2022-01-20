export interface ProductReviewStarsProps {
    rate: number,
    setRate: (value: number | ((prevVar: number) => number)) => void,
}