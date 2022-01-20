import React from 'react';
import { StyledProfile } from "./Profile.style"
import { ProfileData } from '../../components/Profile/ProfileData';
import { ProfileLiked } from '../../components/Profile/ProfileLiked';
import { ProfileHistory } from '../../components/Profile/ProfileHistory';

export const Profile:React.FC = () => {
    return (
        <StyledProfile>
            <ProfileData/>
            <ProfileLiked/>
            <ProfileHistory/>
        </StyledProfile>
    )
}