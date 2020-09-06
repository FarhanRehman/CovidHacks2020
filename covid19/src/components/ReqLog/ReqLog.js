import React from 'react'
import styles from './Req.module.css';
const ReqLog = ({eventName}) => {
    return (
        <div className={styles.reqLog}>
            <div className={styles.reqLogDate}>
                <h5>11 Sept</h5>
                <h6>Monday</h6>
            </div>

            <div className={styles.reqLogEventName}>
                <h2>{eventName}</h2>
            </div>
        </div>
    )
}

export default ReqLog
