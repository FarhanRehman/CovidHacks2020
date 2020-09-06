import React from 'react'
import styles from './requestRecord.module.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ReqLog from '../ReqLog/ReqLog';

const RequestRecord = () => {
    return (
        <div className={styles.requestRecord}>
            <div className={styles.requestRecord__header}>
                <h2>Need Help?</h2>
                <Link to="/request">
                    <Button className={styles.recordBtn}>Create New Requests
                    </Button>
                </Link>
            </div>
            <h3>My Requests</h3>
            <div className={styles.requestRecord__header1}>
              
                <div className={styles.request__log}>
                    <ReqLog eventName="Gorcery Shop"/>
                    <ReqLog eventName="Buy medicine"/>
                    <ReqLog eventName="Buy toilet paper"/>
                    <ReqLog eventName="Buy face mask"/>
                   
                </div>

            </div>

        </div>
    )
}

export default RequestRecord
