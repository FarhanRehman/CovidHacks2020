import React from 'react';
import Login from './components/login/Login';
import styles from './app.module.css';
import Sidebar from './components/sideBar/Sidebar';
import Home from './components/Home/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Sidebar/>
                <Switch>
                    <div className={styles.app__body}>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login}/>
                    </div>
                </Switch>
            </div>

        </Router>

    );
}

export default App;
