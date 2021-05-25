export interface NavbarProps {
    loginWindow: boolean;
    toggleLoginWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void,
    registerWindow: boolean;
    toggleRegisterWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void,
}