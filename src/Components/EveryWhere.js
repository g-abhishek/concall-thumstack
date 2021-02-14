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
    }
}


class EveryWhere extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>                
                <Box py={5} className={classes.root}>
                    <Container maxWidth="md">
                            <Grid
                                container
                                justify="flex-start"
                            >
                                <Grid item sm={6}>
                                    <h2 className="mb-3">Use it everywhere</h2>
                                    <h4 className="color-purple my-2">Available as web, desktop & mobile app</h4>
                                    <p className="my-2">Schedule, start or join HD video and audio conferences from any device or room with no friction.</p>
                                    <Box py={2}>
                                        <Button className={classes.learnMoreBtn}>Get Started</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            
                    </Container>                
                </Box>
                
            </div>
        );
    }
}

export default withStyles(styles)(EveryWhere);