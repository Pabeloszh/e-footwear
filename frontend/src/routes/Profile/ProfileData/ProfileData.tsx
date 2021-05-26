import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { StyledData } from "./ProfileData.style"
import { DataSettings } from './DataSettings';

export const ProfileData:React.FC = () => {
    const [settings, toggleSettings] = useState<boolean>(false)
    return (
        <>
            <StyledData>
                <h2>Mateo Fique</h2>
                <IconButton onClick={() => toggleSettings(true)}>
                    <SettingsIcon/>
                </IconButton>
                
            </StyledData>
            {settings && <DataSettings settings={settings} toggleSettings={toggleSettings}/>}
        </>
    )
}