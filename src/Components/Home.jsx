import Navbar from './Navbar.jsx';
// import BannerBackground from '../assets/home-banner-background2_.png'
import BannerImage from '../assets/labor_pic4_.png'



const Home = () => {
	return (
		<div className='home-container'>
			<Navbar />
			<div className='home-banner-container'>
				{/* <div className='home-bannerImage-container'>
					<img src={BannerBackground} alt='' />
				</div> */}
				<div className='about-section-text-container'>
						<h1 className='primary-heading'> 
						Freedom looks good on you
						</h1>
						<p className="primary-text">
            HomeworkSD focuses on assisting formerly incarcerated men and women to reintegrate into their communities.Through targeted training programs, job placement assistance, and supportive services, the group aims to bridge the gap between the construction industry and formerly incarcerated individuals.
						</p>
				</div>
			<div className="home-image-section">
				<img className='pics' src={BannerImage} alt="" />
			</div>
			</div>
		</div>
	);
};

export default Home;
