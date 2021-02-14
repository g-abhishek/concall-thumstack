import { Box, Card, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    card: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "20px"
    }
}


class PricingPlan extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Box py={6} >
                    <h1>OUR PRICING PLAN</h1>
                    <Box py={5}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >

                            <Grid mx={3} item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={classes.card} >
                                        <CardContent>
                                            <Box m={2} style={{ backgroundColor: "grey", height: "150px" }}>

                                            </Box>
                                            <Box>
                                                <h3>PLUS</h3>
                                            </Box>
                                            <Box py={2}>
                                                <p className="mb-1 text-light-grey">1 Listing</p>
                                                <p className="mb-1 text-light-grey">30 Days Uptime</p>
                                                <p className="mb-1 text-light-grey">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <h2 className="color-purple mb-0">FREE</h2>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Box m={2} style={{ backgroundColor: "grey", height: "150px" }}>

                                            </Box>
                                            <Box>
                                                <h3>PLUS</h3>
                                            </Box>
                                            <Box py={2}>
                                                <p className="mb-1 text-light-grey">1 Listing</p>
                                                <p className="mb-1 text-light-grey">30 Days Uptime</p>
                                                <p className="mb-1 text-light-grey">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <h6 className="color-purple mb-0">RS.</h6>
                                                    <div style={{ display: "flex", alignItems: "baseline" }}>
                                                        <h2 className="color-purple mb-0">499</h2>
                                                        <h6 className="color-purple mb-0">MONTH</h6>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Box my={3} mx={3}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Box m={2} style={{ backgroundColor: "grey", height: "150px" }}>

                                            </Box>
                                            <Box>
                                                <h3>PLUS</h3>
                                            </Box>
                                            <Box py={2}>
                                                <p className="mb-1 text-light-grey">1 Listing</p>
                                                <p className="mb-1 text-light-grey">30 Days Uptime</p>
                                                <p className="mb-1 text-light-grey">Featured Listings</p>
                                            </Box>
                                            <Box pt={5}>
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <h6 className="color-purple mb-0">RS.</h6>
                                                    <div style={{ display: "flex", alignItems: "baseline" }}>
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
                    </Box>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(PricingPlan);