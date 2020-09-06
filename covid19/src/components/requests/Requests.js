import React, {useState, useEffect} from 'react'
import styles from './request.module.css';
import {Button, TextareaAutosize} from '@material-ui/core'
import {ShoppingCart, Healing} from '@material-ui/icons';
const Requests = () => {

    const [type, setType] = useState("Grocery");
    const [active, setActive] = useState(false);
    const [textValue, setTextValue] = useState(null);
    const handleChange = e => {
           setTextValue(e.target.value);  
           console.log(textValue);
    }
    const handleGrocery = () => {
        setType("Grocery")
        setActive(false)
    }
    const handleMedicine = () => {
        setType("Healing")
        setActive(true)
    }

    return (
        <div className={styles.requests}>
            <h1>Create a new request</h1>
            <div className={styles.requestBtnContainer}>
                <Button className={`${styles.requestBtn} ${!active && styles.requestActive}`} onClick={handleGrocery}>
                    <ShoppingCart/>
                    <p>GROCERY</p>
                </Button>

                <Button className={`${styles.requestBtn} ${active && styles.requestActive}`} onClick={handleMedicine}>
                    <Healing/>
                    <p>Medicine</p>
                </Button>
            </div>
            <div className={styles.requestDescriptionContainer}>
                <p className="defaultValue"></p>
                <TextareaAutosize
                    className={styles.description}
                    rowsMax={10}
                    aria-label="maximum height"
                    placeholder={`Describe your ${type} in details`}
                    value={textValue}
                    onChange={handleChange}/>

            </div>
        </div>
    )
}

export default Requests
