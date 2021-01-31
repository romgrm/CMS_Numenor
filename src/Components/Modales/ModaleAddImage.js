import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
  }));
export default function ModaleAddImage() {
    const classes = useStyles();
    return (
        <>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" endIcon={<AddIcon/>}>
                    Add
                </Button>
            </label>
        </>
    )
}
