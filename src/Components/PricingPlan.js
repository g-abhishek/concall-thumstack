import { Box, Card, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import arrow from "../assests/arrow.svg";
import { Link } from 'react-router-dom';
import style from '../Css/PricingPlan.module.css';

const styles = {
    card: {
        boxShadow: "2px 4px 34px -10px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        maxWidth: "240px",
        margin: "auto"
    },
    seeAllPlan: {
        fontSize: "18px",
        color: "#5338FF",
        display:"flex",
        justifyContent: "center",
        fontWeight: "500"
    },
    cardImage:{
        backgroundColor: "grey", 
        height: "150px",
        margin: "12px",
        borderRadius: "10px"
    },
    pricingDetail:{
        color: "grey",
        fontWeight: "500"
    },
    pricingHeader: {
        display: "flex", 
        justifyContent: "center"
    },
    pricingHeaderContent: {
        display: "flex", 
        alignItems: "baseline"
    },
    link: {        
        textDecoration: "none",
        color: "#5338FF",
    }
}


class PricingPlan extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Box py={6} >
                    <h2>OUR PRICING PLAN</h2>
                    <Box py={5}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >

                            <Grid mx={3} item xs={12} sm={4} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={`${style.card} ${classes.card}`} >
                                        <CardContent>
                                            <Box className={classes.cardImage}>

                                            </Box>
                                            <Box>
                                                <h3 className="my-3">BASIC</h3>
                                            </Box>
                                            <Box className={classes.pricingDetail} py={2}>
                                                <p className="mb-2">1 Listing</p>
                                                <p className="mb-2">30 Days Uptime</p>
                                                <p className="mb-2">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <h2 className="color-purple mb-0">FREE</h2>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={`${style.card} ${classes.card}`}>
                                        <CardContent>
                                            <Box className={classes.cardImage}>

                                            </Box>
                                            <Box>
                                                <h3 className="my-3">PLUS</h3>
                                            </Box>
                                            <Box className={classes.pricingDetail} py={2}>
                                                <p className="mb-2">1 Listing</p>
                                                <p className="mb-2">30 Days Uptime</p>
                                                <p className="mb-2">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <div className={classes.pricingHeader}>
                                                    <h6 className="color-purple mb-0">RS.</h6>
                                                    <div className={classes.pricingHeaderContent}>
                                                        <h2 className="color-purple mb-0">499</h2>
                                                        <h6 className="color-purple mb-0">MONTH</h6>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={`${style.card} ${classes.card}`}>
                                        <CardContent>
                                            <Box className={classes.cardImage}>

                                            </Box>
                                            <Box>
                                                <h3 className="my-3">PLUS</h3>
                                            </Box>
                                            <Box className={classes.pricingDetail} py={2}>
                                                <p className="mb-2">1 Listing</p>
                                                <p className="mb-2">30 Days Uptime</p>
                                                <p className="mb-2">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <div className={classes.pricingHeader}>
                                                    <h6 className="color-purple mb-0">RS.</h6>
                                                    <div className={classes.pricingHeaderContent}>
                                                        <h2 className="color-purple mb-0">1299</h2>
                                                        <h6 className="color-purple mb-0">MONTH</h6>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box  py={3}>
                            <div className={classes.seeAllPlan}>
                                <Link className={classes.link}><p className="mb-0 mr-2">See All Plans</p></Link>
                                <img src={arrow} style={{width:"20px"}}></img>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(PricingPlan);