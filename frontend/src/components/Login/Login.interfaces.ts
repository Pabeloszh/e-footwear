export interface LoginProps {
    loginWindow: boolean;
    toggleLoginWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}