import React from 'react'
import styles from './minipProfile.module.css';
const ProfileItem = ({firstName, lastName, address, city, country, postCode, phoneNumber}) => {
    return (

        <div className={styles.profileItem}>
            <div className={styles.name}>
                <p>First Name: <span>{firstName}</span></p>
                <p className={styles.lastChild}>Last Name: <span>{lastName}</span></p>
            </div>

            <div className={styles.name}>
                <p>Address: <span> {address}</span></p>
            </div>

            <div className={styles.name}>
                <p>City:<span> {city}</span></p>
            </div>

            <div className={styles.name}>
                <p>Country: <span> {country}</span></p>
            </div>

            <div className={styles.name}>
                <p>PostCode: <span> {postCode}</span></p>
            </div>
            <div className={styles.name}>
                <p>PhoneNumber: <span> {phoneNumber}</span></p>
            </div>

        </div>

    )
}

export default ProfileItem
