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
    }
}



class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Box py={6} className={classes.root}>
                    <Container maxWidth={"lg"}>
                        <Box>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                            >
                                <Grid mx={3} item xs={12} sm={3} md={3} lg={4} xl={4}>
                                    <Box my={2} mx={2}>
                                        <h1 className="mb-0">concall</h1>
                                        <p className="small">by v7infosolutions</p>   
                                    </Box>
                                </Grid>
                                <Grid mx={3} item xs={12} sm={3} md={2} lg={2} xl={2}>
                                    <Box className="text-left" my={2} mx={2}>
                                        <h4>Products</h4>
                                        <p className="small mb-2"><Link className={classes.link}>Why Concall</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Meetings</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Rooms</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Tutorials</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Queries</Link></p>
                                    </Box>
                                </Grid>
                                <Grid mx={3} item xs={12} sm={3} md={2} lg={2} xl={2}>
                                    <Box className="text-left" my={2} mx={2}>
                                        <h4>Company</h4>
                                        <p className="small mb-2"><Link className={classes.link}>Contact Us</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>About</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Team</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Awards</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Careers</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Press Releases</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>News</Link></p>
                                    </Box>
                                </Grid>
                                <Grid mx={3} item xs={12} sm={3} md={2} lg={2} xl={2}>
                                    <Box className="text-left" my={2} mx={2}>
                                        <h4>Helpful Links</h4>
                                        <p className="small mb-2"><Link className={classes.link}>Downloads</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Events & Webinars</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Download Desktop App</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Download Mobile App</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Trust Center</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Numbers</Link></p>
                                    </Box>
                                </Grid>
                                <Grid mx={3} item xs={12} sm={3} md={2} lg={2} xl={2}>
                                    <Box className="text-left" my={2} mx={2}>
                                        <h4>Support</h4>
                                        <p className="small mb-2"><Link className={classes.link}>Getting Started</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Support Center</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Video Tutorials</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Contact Support</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Meeting Assistance</Link></p>
                                        <p className="small mb-2"><Link className={classes.link}>Event Assistance</Link></p>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                    <Container style={{borderBottom: "1px solid white"}} maxWidth={"md"}>
                        <Box py={2}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"  
                                alignItems="center"                          
                            >
                                <Grid item md={6}>
                                    <div className="d-flex align-items-baseline">
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
                                        <Grid item><img src={playstore1} style={{width:"160px"}}></img></Grid>
                                        <Grid item><img src={appstore} style={{width:"160px"}}></img></Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <div>

                            </div>
                            
                        </Box>
                    </Container>
                    <Container style={{borderBottom: "1px solid white"}} maxWidth={"md"}>
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