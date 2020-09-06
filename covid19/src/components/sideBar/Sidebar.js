import React from 'react'
import styles from './sidebar.module.css';
import {
    Healing,
    Home,
    Search,
    AddCircleOutline,
    SportsSoccerOutlined,
    AccountCircle,
    ExitToApp,
    VpnKey
} from '@material-ui/icons'
import Item from '../../components/item/Items';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sidebar__logo}>
                <Healing className={styles.logoPic}/>
                <h3>Covid
                    <br/>Hacks2020</h3>
            </div>
            <div className={styles.sidebar__items}>
                <Link to="/"><Item Icon={Home} title="Home"/></Link>
                <Item Icon={Search} title="Search"/>
                <Link to="/my-request"><Item Icon={SportsSoccerOutlined} title="My Requests"/></Link>
                <Link to="/request"><Item Icon={AddCircleOutline} title="Create Requests"/></Link>
                <Link to="/profile"><Item Icon={AccountCircle} title="My Profile"/></Link>
                <Link to="/register"><Item Icon={VpnKey} title="Register"/></Link>
                <Link to='/login'><Item Icon={ExitToApp} title="Log In"/></Link>
            </div>
        </div>
    )
}

export default Sidebar
