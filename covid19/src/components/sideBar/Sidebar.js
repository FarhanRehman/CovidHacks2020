import React from 'react'
import styles from './sidebar.module.css';
import {Healing, Home, Search, AddCircleOutline, SportsSoccerOutlined, AccountCircle, ExitToApp} from '@material-ui/icons'
import Item from '../../components/item/Items';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sidebar__logo}>
                <Healing className={styles.logoPic}/>
                <h1>Covid <br />Hacks2020</h1>
            </div>
            <div className={styles.sidebar__items}>
                <Link to="/"><Item Icon={Home} title="Home"/></Link>
                <Item Icon={Search} title="Search"/>
                <Item Icon={SportsSoccerOutlined} title="My Requests"/>
                <Item Icon={AddCircleOutline} title="Create Requests"/>
                <Item Icon={AccountCircle} title="My Profile"/>
                <Link to='/login'><Item Icon={ExitToApp} title="Log In"/></Link>
            </div>
        </div>
    )
}

export default Sidebar
