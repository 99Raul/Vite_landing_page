// import Logo from '../assets/logo6.svg'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { GiSharkJaws } from 'react-icons/gi';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { MenuList } from '@mui/material';
import { Divider } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import WhiteShark from '../assets/white_logo.svg';

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
		console.log(event);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='static' sx={{ bgcolor: '#212121' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box>
						<IconButton
							size='large'
							aria-label='sub-menu'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon sx={{ height: 25, width: 25, mr: 1.3 }} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'block' },
							}}
						>
							<MenuList sx={{ columnGap: 1 }}>
								<MenuItem
									component={Link}
									// the 'to' prop (and any other props not recognized by MenuItem itself)
									// will be passed down to the Link component
									href='/members'
								>
									Members
								</MenuItem>
								<Divider />
								<MenuItem component={Link} href='/mission'>
									Mission
								</MenuItem>
								<Divider />
								<MenuItem component={Link} href='/events'>
									Events
								</MenuItem>
								<Divider />
								<MenuItem component={Link} href='/contact'>
									Contact
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<Link href='/' color='#ffffff'>
						{/* <GiSharkJaws
							size='2em'
							style={{ paddingRight: 9 }}
							className='shark_icon'
						/> */}

						<img src={WhiteShark} className='white_shark' />
					</Link>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 0,
							display: { xs: 'flex', md: 'flex', sm: 'flex', lg: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							'@media (max-width:415px)': {
								fontSize: 15,
							},
						}}
					>
						HOMEWORKSD
					</Typography>
					<Box sx={{ flexGrow: 14 }} />
					<Link
						href='/contact'
						color='#ffffff'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Button sx={{ color: '#fff' }} size='small'>
							<ContactPageIcon sx={{ height: 20, width: 20 }} />
							<Typography variant='button'>Contact</Typography>
						</Button>
					</Link>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size='large'
							aria-label='show 4 new mails'
							color='inherit'
						>
							<Link
								href='https://www.facebook.com/homeworksd/'
								target='_blank'
								color='inherit'
							>
								<FacebookIcon
									sx={{
										height: 25,
										width: 25,
										mr: 1,
										mt: 0.8,
										color: ' rgb(23, 169, 253)',
									}}
								/>
							</Link>

							<Link
								color='inherit'
								href='https://twitter.com/homework_sd?lang=en'
								target='_blank'
							>
								<TwitterIcon
									sx={{
										height: 25,
										width: 25,
										mr: 1,
										color: '#1DA1F2',
										display: { xs: 'none', md: 'flex' },
									}}
								/>
							</Link>

							<Link
								href='https://www.instagram.com/homeworksd/'
								target='_blank'
								color='inherit'
							>
								<InstagramIcon
									sx={{
										height: 25,
										width: 25,
										color: 'rgb(233, 30, 99)',
										display: { xs: 'none', md: 'flex' },
									}}
								/>
							</Link>
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

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
