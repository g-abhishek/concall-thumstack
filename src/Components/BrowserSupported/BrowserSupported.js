import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import style from "../../Css/BrowserSupported.module.css";
import safari from "../../assests/safari.png";
import browser from "../../assests/browser.png";
import { Link } from 'react-router-dom';

class BrowserSupported extends Component {
    render() {
        return (
            <div>
                <div className={`${style.mainDiv}`}>
                    <Grid
                        container
                        justify="center"
                    >
                        <Grid item xs={11} sm={8} md={6}>
                            <div className={style.card}>
                                <div className={style.cardBody}>
                                <div className={style.imgDiv}>
                                        <img src={browser} className={style.img} />
                                    </div>
                                    <h2 className="pb-3">Ping and Talk</h2>
                                    <h4 className={style.textGray}>For better experience use our mobile app</h4>
                                </div>
                                <div className={style.cardFooter}>
                                    <div className={style.cardFooterSubDiv}>
                                        <Button className={style.cardFooterBtn}>Open in APP</Button>
                                        <a className="py-3" href="#" style={{ textDecoration: "none"}}>Or continue with the browser</a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default BrowserSupported;