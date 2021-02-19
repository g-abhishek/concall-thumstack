import { Container, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import style from "../../Css/PaymentHistory.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import PaymentAll from './PaymentAll.js'
import PaymentPending from './PaymentPending.js'

const styles = {
    table:{
        minWidth: "768px"
    }
}



class PaymentHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            tabValue: 0,
        }
    }


    handleTabChange = (e, val) => {
        this.setState({
            tabValue: val
        })
    }
    


    render() {
        
        return (
            <div>
                <div className={style.mainDiv}>
                    <Container className="py-5" maxWidth={"lg"}>
                        <div className={style.card}>
                            <div className={style.cardBody}>
                                <div className="text-left">
                                    <h4>Transaction History</h4>
                                </div>

                                <div>
                                    <Tabs                                    
                                        value={this.state.tabValue}                                    
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={this.handleTabChange}
                                    >
                                        <Tab className={style.tabBtn} label="All Payment"/>
                                        <Tab className={style.tabBtn} label="Pending"/>
                                    </Tabs>
                                    {this.state.tabValue === 0 ?
                                        <PaymentAll />
                                    :<></>}
                                    {this.state.tabValue === 1 ?                                        
                                        <PaymentPending />
                                    :<></>}

                                </div>
                            </div>
                        </div>
                        
                    </Container>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaymentHistory);