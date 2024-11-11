// src/components/ProfilePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard1 from './ProfileCard1';
import ProfileCard2 from './ProfileCard2';
import ProfileCard3 from './ProfileCard3';
import ProfileCard4 from './ProfileCard4';

const ProfilePage = () => {
    const { id } = useParams(); // Get the person ID from the URL

    const renderProfile = () => {
        switch (id) {
            case '1':
                return <ProfileCard1 />;
            case '2':
                return <ProfileCard2 />;
            case '3':
                return <ProfileCard3 />;
            case '4':
                return <ProfileCard4 />;
            default:
                return <div>Person not found</div>;
        }
    };

    return (
        <div className="profile-page">
            {renderProfile()}
        </div>
    );
};

export default ProfilePage;
