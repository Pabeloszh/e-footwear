export interface SizeInterfaces {
    sizes: [number];
    size: number | null
    setSize: (value: number | null | ((prevVar: number | null) => number | null)) => void,
}