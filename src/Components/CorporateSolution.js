import { Box, Button, Card, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "#F3F3F4",
        textAlign: "left"
    },
    box:{
        backgroundColor: "#D6E1FF",
        borderRadius: "10px",
        width: "3rem",
        height: "3rem",
        position: "relative"
    },
    boxInnerCircle: {
        backgroundColor: "#5338FF",
        borderRadius: "50%",
        width: "1rem",
        height: "1rem",
        position: "absolute",
        top: "1rem",
        left: "1rem",
        
    },
    learnMoreBtn: {
        color: "#5338FF",
        fontWeight: "bold",
        border: "2px solid #5338FF",
        borderRadius: "20px",
        padding: "5px 15px"
    },    
    content: {
        fontWeight: "500",
        margin: "0.5rem 0",
        color: "#343a40"
    },
}



class CorporateSolution extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Box py={6} >
                    <h2>We provide best corporate</h2>
                    <h2>solutions than any other company</h2>
                    <Box py={5}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >

                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box className="text-left" my={4} mx={4}>
                                    <Box className={classes.box}>
                                        <Box className={classes.boxInnerCircle}>                                    
                                        </Box>                                
                                    </Box>
                                    <h3 className="my-2">Highly Secure</h3>
                                    <p className={classes.content}>Easy to integrate and deliver a high-quality video platform which offers full support across a wide variety of platforms.</p>   
                                </Box>
                            </Grid>
                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box className="text-left" my={4} mx={4}>
                                    <Box className={classes.box}>
                                        <Box className={classes.boxInnerCircle}>                                    
                                        </Box>                                
                                    </Box>
                                    <h3 className="my-2">End-to-end Encryption</h3>
                                    <p className={classes.content}>Easy to integrate and deliver a high-quality video platform which offers full support across a wide variety of platforms.</p>   
                                </Box>
                            </Grid>
                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box className="text-left" my={4} mx={4}>
                                    <Box className={classes.box}>
                                        <Box className={classes.boxInnerCircle}>                                    
                                        </Box>                                
                                    </Box>
                                    <h3 className="my-2">Multi-Platform</h3>
                                    <p className={classes.content}>Easy to integrate and deliver a high-quality video platform which offers full support across a wide variety of platforms.</p>   
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >

                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box className="text-left" my={4} mx={4}>
                                    <Box className={classes.box}>
                                        <Box className={classes.boxInnerCircle}>                                    
                                        </Box>                                
                                    </Box>
                                    <h3 className="my-2">End-to-end Encryption</h3>
                                    <p className={classes.content}>Easy to integrate and deliver a high-quality video platform which offers full support across a wide variety of platforms.</p>   
                                </Box>
                            </Grid>
                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box className="text-left" my={4} mx={4}>
                                    <Box className={classes.box}>
                                        <Box className={classes.boxInnerCircle}>                                    
                                        </Box>                                
                                    </Box>
                                    <h3 className="my-2">Multi-Platform</h3>
                                    <p className={classes.content}>Easy to integrate and deliver a high-quality video platform which offers full support across a wide variety of platforms.</p>   
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button className={classes.learnMoreBtn}>Learn More</Button>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(CorporateSolution);