import React from 'react'
import { TextField, Container, MenuItem, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DateTimePicker
} from '@material-ui/pickers';


const useStyle = makeStyles({
    container: {
        margin: 0,
        padding: 0,
        display: 'flex',
        marginBottom: 10
    }
})

const data = [
    {
        value: 'Published'
    },
    {
        value: 'Non-Published'
    }
]
export default function Publication() {
    const classes = useStyle();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Container className={classes.container}>
            <TextField
                style={{width: "50%", marginRight: 10}}
                id="outlined-basic"
                select
                margin="dense"
                type="text"
                label="Status"
                //value={data}
                //onChange={handleChange}
                helperText="Changing the status value will immediately affect the visibility of this article to the users. 
                A draft article will not be visible by the user. "
                variant="outlined">
                {data.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.value}
                    </MenuItem>
                ))}
            </TextField>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    style={{width: "50%"}}
                    margin="dense"
                    label="DateTimePicker"
                    inputVariant="outlined"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </MuiPickersUtilsProvider>
        </Container>
    )
}
