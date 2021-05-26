import React from 'react';
import { StyledProfile } from "./Profile.style"
import { ProfileData } from './ProfileData';
import { ProfileLiked } from './ProfileLiked';
import { ProfileHistory } from './ProfileHistory';

export const Profile:React.FC = () => {
    return (
        <StyledProfile>
            <ProfileData/>
            <ProfileLiked/>
            <ProfileHistory/>
        </StyledProfile>
    )
}