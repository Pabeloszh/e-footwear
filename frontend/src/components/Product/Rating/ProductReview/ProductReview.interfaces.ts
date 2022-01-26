export interface ProductReviewProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setRates: React.Dispatch<React.SetStateAction<any>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}