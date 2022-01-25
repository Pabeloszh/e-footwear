export interface SizeInterfaces {
    aviableSizes: [number]
    forKids?: boolean | null
    size?: number | null
    setSize?: (value: number | null | ((prevVar: number | null) => number | null)) => void,
}