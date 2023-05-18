// import AboutBackground from '../assets/about-background3.png'
import AboutBackgroundImage from '../assets/labor_pic3_.png';

const About = () => {
	return (
		<div className='about-section-container'>
			{/* <div className="about-background-image-container">
        <img  src={AboutBackground} alt="" />
      </div> */}
			<div className='about-section-image-container'>
				<img className='pics' src={AboutBackgroundImage} alt='' />
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
				{/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
				{/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
			</div>
		</div>
	);
};

export default About;
