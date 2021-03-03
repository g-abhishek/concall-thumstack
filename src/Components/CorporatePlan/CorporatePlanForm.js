import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@material-ui/core';
import React, { Component, useEffect, useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../Css/CorporatePlanForm.module.css"
import { useForm } from 'react-hook-form'
import info from "../../assests/info.svg";
import { ExpandMore } from '@material-ui/icons';

const rows = [
    {"name":"Plan A", "description": "lipsum is dummy text used in laying out print", "date": "Apr 2, 2020", "method": "UPI", "status": "pending", "amount": "999"},
    {"name":"Plan B", "description": "lipsum is dummy text used in laying out print", "date": "Oct 1, 2019", "method": "PAYTM", "status": "paid", "amount": "1800"},
    {"name":"Plan C", "description": "lipsum is dummy text used in laying out print", "date": "Jun 5, 2019", "method": "Card", "status": "failed", "amount": "2000"},
];

const useStyles = makeStyles({
    table:{
        minWidth: "576px"
    }
  });

class CorporatePlanForm extends Component {
    render() {
        return (
            <div className={style.corporatePlanDiv}>
                <Container maxWidth="xl" className={style.container}>
                    <div className={style.py3}>
                        <div className={style.card}>
                            <div className={style.cardHeader}>
                                <h3 className={style.mb0}>Corporate Plan</h3>
                            </div>
                            <div className={style.cardBody}>
                                <CorporateForm />
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        );
    }
}

export default CorporatePlanForm;


function CorporateForm(props) {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const [isMobileView, setMobileView] = useState(window.innerWidth <= 768)


    useEffect(()=>{
        function handleWindowResize() {
            console.log("resized")
            const resolution = window.innerWidth;
            const isMobile = resolution < 768;
            console.log(isMobile)
            if(isMobile){
                setMobileView(true)
            }else{
                setMobileView(false)
            }
        }
        window.addEventListener("resize", handleWindowResize)
        console.log("use effect")
    }, [])

    const onSubmit = (data) => {
        console.log(data)
    }
    


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                direction="row"
            >
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Corporate Name</p>
                        <input type="text" placeholder="Corporate Name" className={style.formControl} name="corporateName" ref={register({required: true})} />
                        {errors.corporateName && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Name</p>
                        <input type="text" placeholder="Name" className={style.formControl} name="name" ref={register({required: true})} />
                        {errors.name && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Email</p>
                        <input type="email" placeholder="Email" className={style.formControl} name="email" ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})} />
                        {errors.email?.type === 'required' && <p className={style.textDanger}>This field is required</p>}
                        {errors.email?.type === "pattern" && <p className={style.textDanger}>Invalid Email</p>}
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
            >
                
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Phone</p>
                        <input type="number" placeholder="Phone" className={style.formControl} name="phone" ref={register({required: true})} />
                        {errors.phone && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Address</p>
                        <textarea type="text" rows="2" placeholder="Address" className={style.textArea} name="address" ref={register({required: true})} ></textarea>
                        {errors.address && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
            >
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Department</p>
                        <input type="text" placeholder="Department" className={style.formControl} name="department" ref={register({required: true})} />
                        {errors.department && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>No. of users</p>
                        <input type="number" placeholder="No.of users" className={style.formControl} name="numberOfUsers" ref={register({required: true})} />
                        {errors.numberOfUsers && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Plan Name</p>
                        <select id="planName" className={style.formControl} name="planName" ref={register({ required: true })} style={{height:"30px"}}>
                            <option value="Plan A">Plan A</option>
                            <option value="Plan B">Plan B</option>
                            <option value="Plan C">Plan C</option>
                            <option value="Plan D">Plan D</option>
                        </select>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
            >
                <Grid item xs={12} sm={8} md={8}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Description</p>
                        <input type="text" placeholder="Description" className={style.formControl} name="description" ref={register({required: true})} />
                        {errors.description && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Purchase Date</p>
                        <input type="datetime-local" placeholder="Purchase date and time" className={style.formControl} name="pDateTime" ref={register({required: true})} />
                        {errors.pDateTime && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
            >
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Trail Start Date</p>
                        <input type="date" placeholder="Start date" className={style.formControl} name="startDate" ref={register({required: true})} />
                        {errors.startDate && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Trail End Date</p>
                        <input type="date" placeholder="End date" className={style.formControl} name="endDate" ref={register({required: true})} />
                        {errors.endDate && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box mx={2} className={style.box}>
                        <p className={style.label}>Plan Expiry Date</p>
                        <input type="date" placeholder="Expiry Date" className={style.formControl} name="expiryDate" ref={register({required: true})} />
                        {errors.expiryDate && <p className={style.textDanger}>This field is required</p>}
                    </Box>
                </Grid>
            </Grid>
            <Box mx={2} my={1}>
                <p className={style.tableHeader}>List of plan Purchased</p>
                {!isMobileView ? 
                    <TableContainer>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow style={{fontWeight: "bold"}}>
                                    <TableCell className={style.tableHeading}>NAME</TableCell>
                                    <TableCell className={style.tableHeading}>Description</TableCell>
                                    <TableCell className={style.tableHeading}>PRICE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((item) => {
                                        return (
                                            <TableRow key={item.name}>
                                                <TableCell className={style.tableItem} component="th" scope="row">{item.name}</TableCell>
                                                <TableCell className={style.tableItem}>{item.description}</TableCell>
                                                <TableCell className={style.tableItem}>{item.amount}</TableCell>
                                            </TableRow>
                                        )
                                        
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                :
                <div>
                    {
                        rows.map((item, key) => {
                            return (
                            <Accordion key={key}>
                                <AccordionSummary expandIcon={<ExpandMore />} id={key} >
                                    <div className={style.accordionHeader}>
                                        <p className={style.mr3}>{item.name}</p>
                                        <p> &#8377;{item.amount}</p>
                                    </div>                                        
                                </AccordionSummary>
                                <AccordionDetails>
                                        <p className={style.small}>{item.description}</p>
                                </AccordionDetails>
                            </Accordion>
                            )
                            
                        })
                    }
                </div>
                }
            </Box>
            <Box mx={2} my={2}>
                <Button type="submit" className={style.submitBtn}>Submit</Button>
            </Box>
        </form>

    )
}