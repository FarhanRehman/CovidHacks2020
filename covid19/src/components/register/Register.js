import React, {useState} from 'react';
import styles from './register.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Button, FormControl, Input, InputLabel, FormHelperText} from '@material-ui/core';
import {Link} from 'react-router-dom'

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shown, setShown] = useState(false);
    //error
    const [emailError, setEmailError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [secondNameError, setSecondNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleShow = () => {
        if (!shown) {
            setShown(true);
        } else {
            setShown(false);
        }

    }
    const changeHandleEmail = e => {
        setEmail(e.target.value);
    }
    const changeHandleConfirm = e => {
        setConfirm(e.target.value);
    }
    const changeHandlePassword = e => {
        setPassword(e.target.value);
    }
    const changeHandleFirstName = e => {
        setFirstName(e.target.value);
    }
    const changeHandleSecondName = e => {
        setSecondName(e.target.value);
    }

    const validate = () => {
        let emailError = "";
        let passwordError = "";
        let firstNameError = "";
        let secondNameError = "";
        let confirmError = "";

        if (!(email.includes('@'))) {
            emailError = "invalid email";
        }

        if (!firstName || !secondName) {
            firstNameError = secondNameError = "Name cannot be blank";
        }
        const condition = /^(?=.*\d)(?=.*([a-z]|[A-Z]))([\x20-\x7E]){8,}$/;
        if (!(condition.test(password))) {
            passwordError = "Make your password strong";
        }
        if (password !== confirm) {
            confirmError = "The password doesn't match";
        }

        if (emailError || firstNameError || secondNameError || passwordError || confirmError) {
            setEmailError(emailError);
            setFirstNameError(firstNameError);
            setSecondNameError(secondNameError);
            setPasswordError(passwordError);
            setConfirmError(confirmError);
            return false
        }

        return true;

    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setFirstName("");
            setSecondName("");
            setEmail("");
            setConfirm("");
            setPassword("");
            setFirstNameError("");
            setSecondNameError("");
            setEmailError("");
            setPasswordError("");
            setConfirmError("");
        }
    }
    return (
        <div className={styles.registerContent1}>
            <div className={styles.header}>
                <h3>Create Your Lorem ipsum account</h3>
                <p>to continue to lorem ipsum</p>
            </div>
            <div className={styles.registerform}>

                <form action="" className={styles.signInForm}>

                    <div className={styles.topInput}>
                        <FormControl className={styles.firstName}>
                            <InputLabel htmlFor="my-input">First Name</InputLabel>
                            <Input
                                value={secondName}
                                onChange={changeHandleFirstName}
                                className={styles.child2}
                                type="text"
                                id="my-input"
                                aria-describedby="my-helper-text"/>
            
                        </FormControl>

                        <FormControl className={styles.lastName}>
                            <InputLabel htmlFor="my-input">Last Name</InputLabel>
                            <Input
                                onChange={changeHandleSecondName}
                                value={secondName}
                                type="text"
                                id="my-input"
                                aria-describedby="my-helper-text"/>
                           
                        </FormControl>

                    </div>
                    {
                        firstNameError && secondNameError
                            ? <p className={styles.error}>{firstNameError}</p>
                            : null
                    }
                    <div className={styles.midInput}>
                        <FormControl className={styles.emailAddress}>
                            <InputLabel htmlFor="my-input">Email Address</InputLabel>
                            <Input
                                value={email}
                                onChange={changeHandleEmail}
                                className={styles.child2}
                                type="email"
                                id="my-input"
                                aria-describedby="my-helper-text"/>
                            <FormHelperText id="my-helper-text">Enter a Valid Email</FormHelperText>
                        </FormControl>
                        {
                            emailError
                                ? <p className={styles.error}>{emailError}</p>
                                : null
                        }
                    </div>
                    <div className={styles.bottomInput}>
                        {
                            shown
                                ? <FormControl className={styles.password}>
                                        <InputLabel htmlFor="my-input">Password</InputLabel>
                                        <Input
                                            value={password}
                                            onChange={changeHandlePassword}
                                            className={styles.child2}
                                            type="text"
                                            id="my-input"
                                            aria-describedby="my-helper-text"/>
                                        <FormHelperText id="my-helper-text">Use 8 or more characters with a mix </FormHelperText>
                                    </FormControl>
                                : <FormControl className={styles.password}>
                                        <InputLabel htmlFor="my-input">Password</InputLabel>
                                        <Input
                                            value={password}
                                            onChange={changeHandlePassword}
                                            className={styles.child2}
                                            type="password"
                                            id="my-input"
                                            aria-describedby="my-helper-text"/>
                                        <FormHelperText id="my-helper-text">Use 8 or more characters with a mix </FormHelperText>
                                    </FormControl>
                        }

                        {
                            shown
                                ? <FormControl className={styles.confirm}>
                                        <InputLabel htmlFor="my-input">Confirm</InputLabel>
                                        <Input
                                            value={confirm}
                                            onChange={changeHandleConfirm}
                                            className={styles.child2}
                                            type="text"
                                            id="my-input"
                                            aria-describedby="my-helper-text"/>
                                        <FormHelperText id="my-helper-text">of letters, numbers & symbols</FormHelperText>
                                    </FormControl>
                                : <FormControl className={styles.confirm}>
                                        <InputLabel htmlFor="my-input">Confirm</InputLabel>
                                        <Input
                                            value={confirm}
                                            onChange={changeHandleConfirm}
                                            className={styles.child2}
                                            type="password"
                                            id="my-input"
                                            aria-describedby="my-helper-text"/>
                                        <FormHelperText id="my-helper-text">of letters, numbers & symbols</FormHelperText>
                                    </FormControl>
                        }
                        <Button className={styles.hideShowBtn} onClick={handleShow}>
                            {
                                shown
                                    ? <VisibilityOffIcon className={styles.hideShow}/>
                                    : <VisibilityIcon className={styles.hideShow}/>
                            }
                        </Button>

                    </div>
                    {
                        passwordError
                            ? <p className={styles.error}>{passwordError}</p>
                            : null
                    }
                    {
                        confirmError
                            ? <p className={styles.error}>{confirmError}</p>
                            : null
                    }
                    <div className={styles.buttonDiv}>
                        <Link to="/login">Log In Instead</Link>
                        <Button className={styles.formBtn} onClick={handleSubmit}>
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register