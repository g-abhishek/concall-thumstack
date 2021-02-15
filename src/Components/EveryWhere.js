import { Box, Button, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = {
    root: {
        backgroundColor: "#F3F3F4",
        textAlign: "left"
    },    
    learnMoreBtn: {
        color: "#5338FF",
        fontWeight: "bold",
        border: "2px solid #5338FF",
        borderRadius: "20px",
        padding: "5px 15px"
    },
    heading: {
        fontWeight: "600",
        margin: "1rem 0"
    },
    subHeading: {
        color: "#5338FF",
        margin: "1rem 0"
    },
    content: {
        fontWeight: "500",
        margin: "0.5rem 0"
    },
}


class EveryWhere extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>                
                <Box py={5} className={classes.root}>
                    <Container maxWidth="lg">
                        <div className="px-md-3">
                            <Grid
                                container
                                justify="flex-start"
                            >
                                <Grid item sm={6}>
                                    <h2 className={classes.heading}>Use it everywhere</h2>
                                    <h4 className={classes.subHeading}>Available as web, desktop & mobile app</h4>
                                    <p className={classes.content}>Schedule, start or join HD video and audio conferences from any device or room with no friction.</p>
                                    <Box py={2}>
                                        <Button className={classes.learnMoreBtn}>Get Started</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>                
                </Box>
                
            </div>
        );
    }
}

export default withStyles(styles)(EveryWhere);