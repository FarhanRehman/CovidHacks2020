import React from 'react'
import styles from './home.module.css';
import Help from '../../asset/help.svg';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className={styles.home}>
            <img src={Help} className={styles.homeImg} alt="Logo"/>
            <div className={styles.homeContent}>
                <h2>Quarantine Help</h2>
                <p>Connect to a group of volunteer who are ready to help you</p>
                <h2>Start Home</h2>
                <p>Raise your request, get the help you need. You are not alone</p>

                <h2>Help each other</h2>
                <p>A small step could make the difference. Let us be united</p>

                <Link to="/search">
                    <Button className={styles.homeBtn}>
                        continue
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default Home
