import {
  Box, 
  Toolbar,
  // makeStyles, 
  AppBar, 

  IconButton,
  Button,
  // Container
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
// const useStyles = makeStyles(() => ({
// }));
const navItems = ['Home', 'About', 'Contact'];
const Header = () => {
  // const classes = useStyles();
  return (
    <>  
   
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header