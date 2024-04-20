import {
    Container,
    Box,
    Stack,
    Grid,
    Typography,
    Link,
    Button
} from "@mui/material"
import { makeStyles } from '@mui/styles';
import Masonry from "@mui/lab/Masonry";

const useStyles = makeStyles((theme) => ({
    container: {
        diplay: "block",
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRght: "auto", 
        paddingLeft: "16px",
        paddingRight: "16px",
        overflow: "hidden",
        padding: "24px",
        "&. MuiGrid2-container": {
            [theme.breakpoints.up("md")]: {
                justifyContent: "space-between"
            }
        }
    },
    GridContainer: {
        justifyContent: "space-between !important"
    },
    subtitle: {
        margin: "0px",
        fontWeight: "600",
        lineHeight: "1.57143",
        fontSize: "0.875rem"
    },
    footerinfo: {
        padding: "10px",
        // [theme.breakpoints.down('md')]: {
        //     paddingTop: " 25px !important",
        // }
    },
    footerDetails: {
        width: "100%",
        display: "flex",
        flexFlow: "column wrap",
        alignContent: "flex-start",
        boxSizing: "border-box",
        // margin: calc("-8px"),
        // height: calc("602px"),
        // [theme.breakpoints.down('xs')]: {
        //     paddingTop: " 25px !important",
        // }
    },
    footerMuiStack: {
        boxSizing: "border-box",
        // margin: calc(`${"8px"}`),
        // width: calc("25% - 16px"),
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "flex-start"
    }
}))



const Footer = () => {
    const classes = useStyles()
    return (<>
        <Container className={classes.container}>
            <Grid container={true} className={classes.GridContainer} style={{ justifyContent: "space-between" }}>
                <Grid xs={12} md={4} classes={classes.footerinfo}>
                    <Box>
                        <img src="/images/logo.svg" />
                    </Box>
                    <Box >
                        <Stack spacing={2}>
                            <Typography className={classes.subtitle}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                in a piece of classical Latin literature from 45 BC.
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2} pt={7}>
                            <Button>
                                <img src="/images/facebook.svg" />
                            </Button>
                            <Button>
                                <img src="/images/twitter.svg" />
                            </Button>
                            <Button>
                                <img src="/images/instagram.svg" />
                            </Button>
                        </Stack>
                    </Box>
                </Grid >
                <Grid xs={12} md={6} className={classes.footerinfo}>
                    <Masonry columns={3} spacing={3} className={classes.footerDetails}>
                        <Stack spacing={2} className={classes.footerMuiStack}>
                            <Typography className={classes.subtitle}>
                                Company
                            </Typography>
                            <Link underline="none" href="#">About</Link>
                            <Link underline="none" href="#">Career</Link>
                            <Link underline="none" href="#">Mobile</Link>
                        </Stack>
                        <Stack spacing={2} className={classes.footerMuiStack}>
                            <Typography className={classes.subtitle}>
                                Contact
                            </Typography>
                            <Link underline="none" href="#">Why Travlog?</Link>
                            <Link underline="none" href="#">Partner with us</Link>
                            <Link underline="none" href="#">FAQs</Link>
                            <Link underline="none" href="#">Blog</Link>
                        </Stack>
                        <Stack spacing={2} className={classes.footerMuiStack}>
                            <Typography className={classes.subtitle}>
                                Meet us
                            </Typography>
                            <Link underline="none" href="#">+00 92 1234 56789</Link>
                            <Link underline="none" href="#">info@travlog.com</Link>
                            <Link underline="none" href="#">205. R Street, New York <br /> BD23200</Link>
                        </Stack>
                    </Masonry>
                </Grid>
            </Grid>
        </Container>
    </>)
}

export default Footer;