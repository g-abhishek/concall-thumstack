import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import NavBar from '../Layouts/NavBar';
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const styles = {
    root: {
        backgroundColor: "#EBF5FE"
    },
    card: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }
}

class TopView extends Component {
    render() {
        const { classes } = this.props;
        const featuresLeft = ["Secure and Encrypted", "Youtube Streaming", "Breakout Rooms", "1-on-1 Chats", "Private Chats", "Screen Sharing"]
        return (
            <div className={classes.root}>
                <div style={{ height: "80vh", marginBottom:"25rem" }}>
                    <Container maxWidth={"lg"}>
                        <Box py={10}>
                            <h1 className="font-weight-bold">
                                Video Conferencing for the Digital Workplace
                            </h1>
                            <h3 style={{ color: "#656BDF" }}>
                                Pingandtalk is all new way of video conferencing.
                            </h3>
                        </Box>
                        <Grid 
                        container
                        justify="center"
                        style={{position: "absolute", top:"70%"}}
                    >
                        <Grid item xs={10} md={10} lg={7}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Box px={3} py={4}>
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

                                                            <Grid item><CheckCircleOutlineIcon /></Grid>
                                                            <Grid item><h3 className="features-item">{item}</h3></Grid>
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

                                                            <Grid item><CheckCircleOutlineIcon /></Grid>
                                                            <Grid item><h3 className="features-item">{item}</h3></Grid>
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