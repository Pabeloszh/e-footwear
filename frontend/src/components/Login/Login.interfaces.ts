export interface LoginProps {
    authWindow: boolean;
    toggleAuthWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}