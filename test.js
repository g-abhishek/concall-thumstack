import { Box, Button, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import meetings from "../assests/meetings.png";

const styles = {
    root: {
        backgroundColor: "#5C32FF",
        textAlign: "left",
        borderRadius: "20px",
        color: "white",
        padding: "3rem 0 0 3rem",
    },
    container: {

    },
    letsBeginBtn: {
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "white",
        },
        color: "#5C32FF"
    },
    leftHeader: {
        fontWeight: "400"
    },
    rightBox: {
        backgroundColor: "#6a43ff",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: "20px"

    }
}


class ScheduleMeeting extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container maxWidth="lg">
                    <Box my={5} className={classes.root}>
                        <Grid
                            container
                            justify="flex-start"
                        >
                            <Grid item md={6}>
                                <h2 className={classes.leftHeader}>Instantly Schedule Meeting!</h2>
                                <p className="my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <Box pt={2} pb={6}>
                                    <Button className={classes.letsBeginBtn}>Get Started</Button>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box>
                                    <img src={meetings} style={{width:"100%", height: "100%"}}></img>
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


background: url(http://localhost:3000/static/media/meetings.0dab4a10.png);
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    background-repeat: no-repeat;