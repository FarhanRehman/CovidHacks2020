import React from 'react'
import styles from './items.module.css';

const Items = ({Icon, title}) => {
    return (
        <div className={styles.items}>
            <Icon/>
            <h3>{title}</h3>
        </div>
    )
}

export default Items
