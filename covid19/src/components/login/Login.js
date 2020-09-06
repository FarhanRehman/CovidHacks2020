import React, { useState } from 'react'
import styles from './login.module.css';
import {FormControl, Input, Button, InputLabel, FormHelperText} from '@material-ui/core';

const Login = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleSubmit =() => {
        console.log(password);
        console.log(email);
    }
   
   
    return (
        <div className={styles.login}>
             <FormControl className={styles.email}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input value={email} id="my-input" onChange={handleEmail} aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl className={styles.email}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input value={password} id="standard-adornment-password" onChange={handlePassword}  type= 'password' aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <Button className={styles.fromBtn} onClick={handleSubmit}>
                Login
            </Button>
        </div>
           

    )
}

export default Login
