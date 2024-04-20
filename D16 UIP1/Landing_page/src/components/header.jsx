import { makeStyles } from '@mui/styles';
import {
    Box,
    Toolbar,
    AppBar,
    IconButton,
    Button,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
const navItems = ['Home', 'Discover', 'Special Deals', 'Contact'];

const useStyles = makeStyles(() => ({
    Toolbar: {
        boxShadow: "none !important",
        backgroundColor: "white !important",
        "& .MuiToolbar-root": {
            margin: "0 auto",
            maxWidth: "1210px",
            width: "100%",
            height: "80px !important",
            background: "white",
            justifyContent: "space-between",
            // [theme.breakpoints.down("md")]: {
            //     justifyContent: "flex-start !important"
            // },
        },
        "& .MuiPaper-root": {
            backgroundColor: "white",
        }
    },
    loginbtn: {
        width: "100%",
        maxWidth: "80px",
        borderRadius: "50px !important",
        maxHeight: "40px",
        background: "white"
    },
    SignUP: {
        width: "100%",
        minWidth: "90px",
        borderRadius: "50px !important",
        color: "white !important",
        background: "blue !important"
    },
    menubar: {
        // [theme.breakpoints.down("md")]: {
        //     display: "none"
        // },
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <AppBar className={classes.Toolbar}>
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            // onClick={handleDrawerToggle}
                            sx={{ mr: 3, display: { md: 'none' }, color: "black" }}
                        >
                            <MenuIcon color="black" />
                        </IconButton>
                        <Box alignItems="center" display="flex" >
                            <img src="/images/logo.svg" />
                        </Box>

                        <Box display="flex" gap="20px" className={classes.menubar}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'black' }}>
                                    {item}
                                </Button>
                            ))}

                        </Box>
                        <Box display="flex" gap="10px" alignItems="center" className={classes.menubar}>
                            <Button className={classes.loginbtn}>
                                Login
                            </Button>
                            <Button className={classes.SignUP} >
                                Sign Up
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Header;
