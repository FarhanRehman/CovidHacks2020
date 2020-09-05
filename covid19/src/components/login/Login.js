import React from 'react'
import styles from './login.module.css';
import {FormControl, Input, Button, InputLabel, FormHelperText} from '@material-ui/core';

const Login = () => {
    return (
        <div className={styles.login}>
             <FormControl className={styles.email}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl className={styles.email}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input id="standard-adornment-password"  type= 'password' aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <Button className={styles.fromBtn}>
                Login
            </Button>
        </div>
           

    )
}

export default Login
