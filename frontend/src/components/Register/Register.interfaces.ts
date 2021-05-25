export interface RegisterProps {
    registerWindow: boolean;
    toggleRegisterWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}