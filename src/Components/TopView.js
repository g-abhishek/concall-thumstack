import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import NavBar from '../Layouts/NavBar';
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import right from "../assests/right.png";
import style from '../Css/TopView.module.css';


const styles = theme => ({
    root: {
        backgroundColor: "#EBF5FE",
        height: "80vh", marginBottom:"25rem"
    },
    card: {
        boxShadow: "0px 4px 84px 20px rgba(0, 0, 0, 0.05)",
    },
    featuresItem:{
        fontSize: "20px",
        paddingBottom: "3px",
        color: "#343a40",
        fontWeight: "500",
    },
    featuresIcon: {
        width: "32px",
        height: "37px"
    },
    featuresGrid: {
        position: "absolute", 
        top:"70%", 
        left: "0"
    },
    subHeading: {
        fontSize: "18px",
        color: "#656BDF"
    }
})

class TopView extends Component {
    render() {
        const { classes } = this.props;
        const featuresLeft = ["Secure and Encrypted", "Youtube Streaming", "Breakout Rooms", "1-on-1 Chats", "Private Chats", "Screen Sharing"]
        return (
            <div className={`${style.topView} ${classes.root}`}>
                <div>
                    <Container maxWidth={"lg"}>
                        <Box py={10}>
                            <h1 className={style.fontWeightBold}>
                                Video Conferencing for the Digital Workplace
                            </h1>
                            <h3 className={classes.subHeading}>
                                Pingandtalk is all new way of video conferencing.
                            </h3>
                        </Box>
                        <Grid 
                            container
                            justify="center"
                            className={classes.featuresGrid}
                    >
                        <Grid item xs={10} md={10} lg={7}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Box className={style.featureDiv} px={3} py={4}>
                                        <h2 className="text-left mb-3">Features</h2>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="space-between"
                                        >
                                            <Grid>
                                                {featuresLeft.map((item, idx) => {
                                                    return (
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            spacing={2}
                                                        >

                                                            <Grid item><img src={right} className={`${style.featureIcon} ${classes.featuresIcon}`}></img></Grid>
                                                            <Grid item><p className={`${style.featureItem} ${classes.featuresItem}`}>{item}</p></Grid>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                            <Grid>
                                                {featuresLeft.map((item, idx) => {
                                                    return (
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            spacing={2}
                                                        >

                                                            <Grid item><img src={right} className={`${style.featureIcon} ${classes.featuresIcon}`}></img></Grid>
                                                            <Grid item><p className={`${style.featureItem} ${classes.featuresItem}`}>{item}</p></Grid>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                        </Grid>
                                        
                                    </Box>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(TopView);