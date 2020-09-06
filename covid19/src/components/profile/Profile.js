import React from 'react'
import styles from './profile.module.css';
import ProfileItem from '../profileItem/ProfileItem';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileTitle}>
                <h1>My Profile</h1>
            </div>

            <div className={styles.profileInfo}>
                <ProfileItem firstName="Jigme" lastName="Namgyal" address="lorem" city="ipsum" country="Germany" postCode="1008" phoneNumber="1213131" />
            </div>
        </div>
    )
}

export default Profile
