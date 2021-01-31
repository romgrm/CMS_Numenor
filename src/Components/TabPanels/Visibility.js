import React from 'react';
import { Container, Typography,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Publication from './VisibilityContent/Publication'
import Category from './VisibilityContent/Categories'
import ModaleTags from '../Modales/ModaleCreateTags'

const useStyle = makeStyles({
    containerOne: {
        margin: 0,
        padding: 0, 
        marginBottom: 20
    },
    containerTwo: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
        padding: 0,
        marginTop: 60, 
        marginBottom: 30
    },
    typo: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    button:{
        display:'flex',
        float: 'right', 
        marginBottom: 50
        
    }
})

export default function Visibility() {
    const classes = useStyle();

    return (
        <Container>
            <Container className={classes.containerOne}>
                <Typography variant="h6" color="primary" className={classes.typo}>Publication</Typography>
                <Typography variant="body2" >This section allow you to control if and when the article is visible.</Typography>
            </Container>
            <Publication/>
            <Button variant="contained" className={classes.button} disabled>Save</Button>
            <Container className={classes.containerTwo}>
                <Typography variant="h6" color="primary" className={classes.typo}>Categories</Typography>
                <ModaleTags/>
            </Container>
                <Typography variant="body2">This settings allow you to display the article only for certains categories. The user will then be able to filter his article feed base on this categories.
                    If no categories is selected, the article will be only visible under the "All" filter of the website.
                </Typography>
            <Category/>
            <Button variant="contained" className={classes.button} disabled>Save</Button>
        </Container>
    )
}
