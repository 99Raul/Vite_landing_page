// import Logo from '../assets/logo6.svg'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GiSharkJaws } from 'react-icons/gi'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';


const Navbar = () => {


	return (
	
      <AppBar position="static" sx={{ bgcolor: '#212121', }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GiSharkJaws size='2em'style={{paddingRight:9 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOMEWORKSD
          </Typography>
             <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Link href="https://www.facebook.com/homeworksd/"  target="_blank" color="inherit">
                
                <FacebookIcon sx={{ height: 25, width:25, mr: 1, mt:0.8 }}/>
                </Link>

                <Link color="inherit" href="https://twitter.com/homework_sd?lang=en"  target="_blank">
                <TwitterIcon sx={{ height: 25, width:25 , mr :1, display: { xs: 'none', md: 'flex' }}} />
                </Link>

                <Link href='https://www.instagram.com/homeworksd/'  target="_blank" color="inherit">
                <InstagramIcon sx={{ height: 25, width:25,display: { xs: 'none', md: 'flex' } }}/>
                </Link>
            </IconButton>
              </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
		
    
	);
};

//style={{ width: 200, height: 200 }}
export default Navbar;


//  <div className="navbar-links-container">
//         <a href="">Home</a>

//         <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a> */}
//      <button className="primary-button">Bookings Now</button>
//       </div>


//  <div className="nav-logo-container">
//         <img src={Logo} alt="" className='logo'  />
//     </div>