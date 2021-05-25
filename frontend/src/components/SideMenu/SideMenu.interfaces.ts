export interface SideMenuProps {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;
    loginWindow: boolean;
    toggleLoginWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    registerWindow: boolean;
    toggleRegisterWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;

}