// import AboutBackground from '../assets/about-background3.png'
import AboutBackgroundImage from '../assets/labor_pic3_.png';

const About = () => {
	return (
		<div className='about-section-container'>
			<div className='about-section-image-container'>
				<img className='pics' src={AboutBackgroundImage} alt='picture' />
			</div>
			<div className='about-section-text-container'>
				<p className='primary-subheading'>About</p>
				<h1 className='primary-heading'>Change</h1>
				<p className='primary-text'>
					We are building bridges in our communities, challenging recidivism
					odds, and changing the narrative of what it means to be formerly
					incarcerated.By equipping them with the necessary skills,
					certifications, and guidance, the group seeks to empower individuals
					to secure sustainable employment, gain financial independence, and
					establish a successful career in the construction industry.
				</p>
			</div>
		</div>
	);
};

export default About;
