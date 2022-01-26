import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { DataSettings } from './DataSettings';
import { StyledData } from "./ProfileData.style"

export const ProfileData:React.FC = () => {
    const [settings, toggleSettings] = useState<boolean>(false)
    const user = useSelector((state : RootState | null) => state?.user);

    return (
        <>
            <StyledData>
                <h2>{user?.email}</h2>
                <IconButton onClick={() => toggleSettings(true)}>
                    <SettingsIcon/>
                </IconButton>
            </StyledData>
            {settings && <DataSettings settings={settings} toggleSettings={toggleSettings}/>}
        </>
    )
}