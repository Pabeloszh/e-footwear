export interface SettingsProps {
    settings: boolean;
    toggleSettings: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}