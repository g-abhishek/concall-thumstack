import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import style from "../../Css/PaymentSuccess.module.css";
import success from "../../assests/success.gif";

class PaymentSuccess extends Component {
    render() {
        return (
            <div>
                <div className={`${style.mainDiv}`}>
                    <Grid
                        container
                        justify="center"
                    >
                        <Grid item xs={10} sm={6} md={4}>
                            <div className={style.card}>
                                <div className={style.cardBody}>
                                    <div className={style.imgDiv}>
                                        <img src={success} className={style.img} />
                                    </div>
                                    <h4>Payment Successfull</h4>
                                    <h6 className={style.textGray}>Lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</h6>
                                </div>
                                <div className={style.cardFooter}>
                                    <div>
                                        <Button className={style.cardFooterBtn}>Button</Button>
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

export default PaymentSuccess;