export interface ShippingInterfaces {
    shippingWindow: boolean,
    setShippingWindow:(value: boolean | ((prevVar: boolean) => boolean)) => void,
    orderId: number | null
}