import React, {useState} from 'react'
import styles from './request.module.css';
import {
    TextareaAutosize,
    Input,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    TextField,
    Button
} from
'@material-ui/core';

const Requests = () => {
    const [categories, setCategories] = useState("Grocery");
    const [listCategory, setListCategory] = useState(
        ["Grocery", "Medicine", "Home Supplies", "Volunteering work", "First Aid"]
    );
    const [textValue, setTextValue] = useState("Grocery");
    const [event, setEvent] = useState("")
    const [host, setHost] = useState("")
    const [desc, setDesc] = useState("")
    const [max, setMax] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    

    const changeEvent = e => {
        setEvent(e.target.value);
        
    }

    const handleHost = e => {
        setHost(e.target.value);
       

    }
    const handleDesc = e => {
        setDesc(e.target.value);
        
    }

    const handleMax = e => {
        setMax(e.target.value);
       
    }

    const handleDate = e => {
        setDate(e.target.value);
       
    }

    const handleLocation = e => {
        setLocation(e.target.value);
        
    }

    const changeHandler = (e) => {
        const category = e.target.value;
        setCategories(category);
        setTextValue(category)
        
    }
   

    return (
        <div className={styles.requests}>
            <h1>Create a new request</h1>
            <div className={styles.requestDescriptionContainer}>
                <FormControl className={styles.form1}>
                    <InputLabel htmlFor="my-input">Event Name</InputLabel>
                    <Input
                        onChange={changeEvent}
                        value={event}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>

                </FormControl>

                <FormControl className={styles.form1}>
                    <InputLabel htmlFor="my-input">Host User Name</InputLabel>
                    <Input
                        onChange={handleHost}
                        value={host}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>

                </FormControl>
                <FormControl className={styles.form1}>
                    <Select variant="outlined" value={categories} onChange={changeHandler}>
                        {
                            listCategory.map(
                                category => (<MenuItem value={category}>{category}</MenuItem>)
                            )
                        }
                    </Select>
                </FormControl>
                <TextareaAutosize
                    className={styles.description}
                    rowsMax={5}
                    onChange={handleDesc}
                    aria-label="maximum height"
                    placeholder={`Describe your ${textValue} in details`}
                    value={desc}
                    />

                <FormControl className={styles.form1}>
                    <InputLabel htmlFor="my-input">Max Number of volunteer</InputLabel>
                    <Input
                        onChange={handleMax}
                        value={max}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                </FormControl>

                <form noValidate="noValidate">
                    <TextField
                        id="date"
                        value={date}
                        label="Deadline"
                        type="date"
                        onChange={handleDate}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                </form>

                <FormControl className={styles.form1}>
                    <InputLabel htmlFor="my-input">Location</InputLabel>
                    <Input
                        onChange={handleLocation}
                        value={location}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                </FormControl>

                <Button className={styles.ReqBtn} onSubmit={handleSubmit}>
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default Requests
