import React from 'react'
import styles from './items.module.css';

const Items = ({Icon, title}) => {
    return (
        <div className={styles.items}>
            <Icon/>
            <h4>{title}</h4>
        </div>
    )
}

export default Items
