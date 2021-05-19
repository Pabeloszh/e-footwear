export interface NavbarProps {
    authWindow: boolean;
    toggleAuthWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void,
}