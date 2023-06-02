import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Link from '@mui/material/Link';

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-section-one'>
				{/* <div className="footer-logo-container">
        <img src={Logo} alt="" />
        </div> */}

				<p className='secondary-text'>Contact us and follow for updates</p>
				<div className='footer-icons'>
					<Link href='https://twitter.com/homework_sd?lang=en' target='_blank'>
						<TwitterIcon sx={{ height: 30, width: 30 }} />
					</Link>
					<Link href='https://www.facebook.com/homeworksd/' target='_blank'>
						<FacebookIcon sx={{ height: 30, width: 30 }} />
					</Link>
					<Link href='https://www.instagram.com/homeworksd/' target='_blank'>
						<InstagramIcon sx={{ height: 30, width: 30 }} />
					</Link>
				</div>
			</div>
			<div className='footer-section-two'>
				<LocationOnIcon sx={{ height: 25, width: 25, mt: 0.5, mr: 0.3 }} />
				<div className='footer-section-columns'>
					<span>3737 Camino de Rio S </span>
					<span>Suite 202</span>
					<span>San Diego</span>
					<span>Ca, 92108</span>
				</div>
				<ContactPhoneIcon sx={{ height: 25, width: 25, mr: 1.5, mt: 0.5 }} />
				<div className='footer-section-columns'>
					<span>(707) 469-3597</span>
				</div>
				<EmailIcon sx={{ height: 25, width: 25, mr: 1, mt: 0.3 }} />
				<div className='footer-section-columns'>
					<span>homeworksd4@gmail.com</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
