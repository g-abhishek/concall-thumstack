import { Box, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import tablet from "../assests/tablet.png";

class ImageView extends Component {
    render() {
        return (
            <div>
                <Box py={10}>
                    <Grid
                        container
                        justify="center"
                     >
                        <Grid item xs={10} sm={8} md={8} lg={7}>
                            <img src={tablet} style={{width:"100%"}}></img>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}

export default ImageView;