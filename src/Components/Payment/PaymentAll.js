import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import style from "../../Css/PaymentHistory.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const styles = {
    table:{
        minWidth: "768px"
    }
}



class PaymentAll extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            isDataReturned: true
        }
    }

    componentDidMount(){
        <p style={{color: "red", border: "1px solid red"}}>aa</p>
        const rows = [
            {"name":"Abhishek", "description": "Testing", "date": "Apr 2, 2020", "method": "UPI", "status": "pending", "amount": "999"},
            {"name":"Vikas", "description": "Testing", "date": "Oct 1, 2019", "method": "PAYTM", "status": "paid", "amount": "1800"},
            {"name":"Ashish", "description": "Testing", "date": "Jun 5, 2019", "method": "Card", "status": "failed", "amount": "2000"},
            {"name":"Prayas", "description": "Testing", "date": "Feb 20, 2019", "method": "PhonePe", "status": "paid", "amount": "5600"},
            {"name":"Sagar", "description": "Testing", "date": "Jan 15, 2018", "method": "UPI", "status": "paid", "amount": "555"},
        ];

          const rowsData = []

          for(let i=0; i< rows.length; i++){
              let item = rows[i]
              item.status = <p className={ item.status === "pending" ? style.pending: ( item.status === "failed" ? style.failed: ( item.status === "paid" ? style.paid: "" ) ) }>{item.status}</p>
              item.amount = <p className={style.amount}>&#8377;{item.amount}</p>

              rowsData.push(item)

          }
          this.setState({
              data: rowsData,
              isDataReturned: true
          })

          
    }

    handleTabChange = (e, val) => {
        this.setState({
            tabValue: val
        })
    }
    


    render() {
        const { classes } = this.props;
        return (
                <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={style.tableHeading}>NAME</TableCell>
                                <TableCell className={style.tableHeading}>DESCRIPTION</TableCell>
                                <TableCell className={style.tableHeading}>DATE</TableCell>
                                <TableCell className={style.tableHeading}>METHOD</TableCell>
                                <TableCell className={style.tableHeading}>STATUS</TableCell>
                                <TableCell className={style.tableHeading}>AMOUNT</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.isDataReturned? 
                                this.state.data.map((item) => {
                                    return (
                                        <TableRow key={item.name}>
                                            <TableCell component="th" scope="row">{item.name}</TableCell>
                                            <TableCell>{item.description}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.method}</TableCell>
                                            <TableCell>{item.status}</TableCell>
                                            <TableCell>{item.amount}</TableCell>
                                        </TableRow>
                                    )
                                    
                                })
                            : 
                                <ClipLoader 
                                    size={40}
                                    color={"#009dff"}
                                    loading = {true} 
                                />
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        );
    }
}

export default withStyles(styles)(PaymentAll);