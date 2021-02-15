import { Box, Button, Card, CardContent, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import playstore from "../assests/playstore.png";
import playstore1 from "../assests/playstore1.png";
import appstore from "../assests/appstore.png";

const styles = {
    root: {
        backgroundColor: "#131519",
        textAlign: "left",
        color: "white"
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
    link:{
        color: "white",
        textDecoration: "none"
    },
    container: {
        borderBottom: "1px solid white"
    },
    img: {
        width:"160px"
    },
    displayflex: {
        display: "flex"
    },
    alignItemsBaseline: {
        alignItems: "baseline"
    },
}



class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Box py={6} className={classes.root}>
                    <Container className={classes.container} maxWidth={"lg"}>
                        <Box py={2}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"  
                                alignItems="center"                          
                            >
                                <Grid item md={6}>
                                    <div className={[classes.displayflex, classes.alignItemsBaseline]}>
                                        <h1>concall</h1>
                                        <p className="mx-1">by v7infosolutions</p>
                                    </div>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-end"  
                                    >
                                        <Grid item><img src={playstore1} className={classes.img}></img></Grid>
                                        <Grid item><img src={appstore} className={classes.img}></img></Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <div>

                            </div>
                            
                        </Box>
                    </Container>
                    <Container className={classes.container} maxWidth={"lg"}>
                        <Box py={2}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"  
                                alignItems="center"                          
                            >
                                <Grid item md={2}>
                                    <h3>Lorem</h3>
                                </Grid>
                                <Grid item md={10}>
                                    <Grid
                                        container
                                        direction="row"
                                        spacing={2}
                                    >
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Why Concall</Link></p></Grid>
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Team</Link></p></Grid>
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Careers</Link></p></Grid>
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Privacy Policy</Link></p></Grid>
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Cookies</Link></p></Grid>
                                        <Grid item><p className="small mb-0"><Link className={classes.link}>Terms and Conditions</Link></p></Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <div>

                            </div>
                            
                        </Box>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);