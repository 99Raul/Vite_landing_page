import Navbar from './Navbar.jsx';
// import BannerBackground from '../assets/home-banner-background2_.png'
import BannerImage from '../assets/labor_pic4_.png';
import Work from './Work.jsx';
import Partners from './Partners.jsx';
import About from './About.jsx';
import Slider2 from './Slider/Slider2.jsx';
// import WhiteLogo from '../assets/white_shark2.svg';
import SharkLogo from '../assets/shark_logo.png';

const Home = () => {
	return (
		<>
			<div className='home-container'>
				<Navbar />
				<div className='home-banner-container'>
					{/* <div className='home-bannerImage-container'>
					<img src={BannerBackground} alt='' />
				</div> */}
					<div className='about-section-text-container'>
						{/* <img src={WhiteLogo} className='white_shark2' /> */}
						<h1 className='primary-heading'>
							Our vision is to change the narrative of what it means to be formerly
							incarcerated{' '}
						</h1>
						<p className='primary-text'>
							HoMEwork focuses on assisting formerly incarcerated men and women
							to reintegrate into their communities
						</p>
						{/*Through targeted training
							programs, job placement assistance, and supportive services, the
							group aims to bridge the gap between the construction industry and
							formerly incarcerated individuals. */}
					</div>
					<div className='home-image-section'>
						{/* <img className='pics' src={BannerImage} alt='' /> */}
						<img className='pics' src={SharkLogo} alt='' />
					</div>
				</div>
			</div>

			<About />
			<Work />
			<Slider2 />
			<Partners />
		</>
	);
};

export default Home;
