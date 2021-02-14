import { AppBar, Box, Button, Container, Grid, makeStyles, Menu, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        backgroundColor: "#EBF5FE"
    },
    button: {
        fontSize: "14px",
        fontWeight: "bold"
    },
    tryFreeBtn: {
        backgroundColor: "#FE8940",
        '&:hover': {
            backgroundColor: "#FE8940",
        },
        borderRadius: "20px",
        padding: "5px 15px",
        color: "white",
        marginLeft: "5px"
    },
    appBar: {
        background: "#EBF5FE",
        boxShadow: "none"
    },
    brandNameBox: {
        position: "relative"
    },
    brandNameBg: {
        padding: "25px 40px",
        background: "#94cbff",
        position: "absolute",
        top: "1px",
        left: "15px",
        borderRadius: "50%",
        opacity: "0.3",
    },
    menu: {
        color: "black",
        fontWeight: "bold",
        cursor: "pointer"
    },
    link:{
        textDecoration: "none"
    },
    sideNav: {
        position: "fixed",
        height: "100%",
        background: "white",
        top: "0",
        width: "230px",
        left: "-230px",
        overflow: "hidden",
        transition: "0.5s",
        zIndex: "2000",
    },
    bgShadow: {
        opacity: "0.5",
        backgroundColor: "black",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "2000",
        top: "0",
        left: "0",
    }
}

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isMobileView: window.innerWidth <= 900 ,
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleWindowResize.bind(this))
    }

    handleWindowResize() {
        const resolution = window.innerWidth;
        const isMobile = resolution <= 900;
        if(!isMobile){
            this.setState({
                isNavOpen: false
            })
        }
        this.setState({
            isMobileView: isMobile
        })
      }

    openNav = () => {
        this.setState({
            isNavOpen: true
        })
        document.getElementById("sideNav").style.left = "0px"
        document.getElementById("wrapper").classList.remove("active")
    }

    closeNav = () => {
        this.setState({
            isNavOpen: false
        })
        document.getElementById("sideNav").style.left = "-230px"
        document.getElementById("wrapper").classList.remove("active")
    }
    


    render() {
        const { classes } = this.props

        const desktop = (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <Grid item>
                                <Button className={classes.button}>About Us</Button>
                                <Button className={classes.button}>PLAN & PRICING</Button>
                                <Button className={classes.button}>CONTACT US</Button>
                            </Grid>
                        </Grid>
                        <Box className={classes.brandNameBox}>
                            <Box className={classes.brandNameBg}></Box>
                            <h1 className="text-light-black">concall</h1>
                        </Box>

                        <Grid>
                            <Grid item>
                                <Button className={classes.button}>Join a meeting</Button>
                                <Button className={classes.button}>Sign In</Button>
                                <Button className={[classes.button, classes.tryFreeBtn]}>Try for free</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )

        const mobile = (
            <div>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar >
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            
                            <Box className={classes.brandNameBox}>
                                <Box className={classes.brandNameBg}></Box>
                                <h1 className="text-light-black">concall</h1>
                            </Box>

                            <Grid>
                                <Grid item>
                                    <MenuIcon className={classes.menu} onClick={this.openNav} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div id="wrapper" className="wrapper text-left">
                    <div id="bg-shadow" className={ this.state.isNavOpen ? classes.bgShadow : ""} onClick={this.closeNav}></div>
                    <div id="sideNav" className={classes.sideNav}>
                        <AppBar position="static" className={classes.appBar}>
                                <Toolbar>
                                    <Box className={classes.brandNameBox}>
                                        <Box className={classes.brandNameBg}></Box>
                                        <h1 className="text-light-black">concall</h1>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                        <Container maxWidth={"lg"}>
                            <Box py={2}>
                                <h4 className="my-4"><Link className={classes.link}>About Us</Link></h4>
                                <h4 className="my-4"><Link className={classes.link}>PLAN & PRICING</Link></h4>
                                <h4 className="my-4"><Link className={classes.link}>CONTACT US</Link></h4>
                                <h4 className="my-4"><Link className={classes.link}>JOIN A MEETING</Link></h4>
                                <h4 className="my-4"><Link className={classes.link}>SIGN IN</Link></h4>
                                <h4 className="my-4"><Link className={classes.link}>SIGN IN</Link></h4>
                                <Button className={[classes.button, classes.tryFreeBtn]}>Try for free</Button>
                            </Box>
                        </Container>                        
                    </div>
                </div>
            </div>
        )



        return (
            <div>            
                {this.state.isMobileView ? mobile : desktop}
                
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);