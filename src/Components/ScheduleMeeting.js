import { Box, Button, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import multitasking from "../assests/multitasking.png";

import style from '../Css/ScheduleMeeting.module.css';

const styles = {
    root: {
        backgroundColor: "#5C32FF",
        textAlign: "left",
        borderRadius: "20px",
        color: "white",
        padding: "32px"
    },
    container: {

    },
    letsBeginBtn: {
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "white",
        },
        color: "#5C32FF",
        fontWeight: "bold"
    },
    rightBox: {
        backgroundColor: "#6a43ff",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px"

    },
    container: {
        height: "100vh",
        display: "flex",
        alignItems: "center"
    },
    img: {
        width: "300px",
        display: "block",
        margin: "0 auto"
    },
    content: {
        lineHeight: "24px",
        margin: "0.5rem 0"
    }
}


class ScheduleMeeting extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Container maxWidth="lg">
                    <Box className={`${style.root} ${classes.root}`}>
                        <Grid
                            container
                            justify="flex-start"
                            className={style.mainGrid}
                        >
                            <Grid item md={6}>
                                <Box >
                                    <h2>Instantly Schedule Meeting!</h2>
                                    <p className={classes.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text. Lorem Ipsum has been the standard dummy text.</p>
                                    <Box pt={2}>
                                        <Button className={classes.letsBeginBtn}>Get Started</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} style={{width: "100%"}}>
                                <Box>
                                <img className={`${style.img} ${classes.img}`} src={multitasking}></img>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(ScheduleMeeting);