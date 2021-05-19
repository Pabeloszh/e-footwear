export interface SideMenuProps {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;
    authWindow: boolean;
    toggleAuthWindow: (value: boolean | ((prevVar: boolean) => boolean)) => void;

}