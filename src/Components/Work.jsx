import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportIcon from '@mui/icons-material/Support';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Work = () => {
	const workInfoData = [
		{
			icon: <EngineeringIcon sx={{ height: 50, width: 50 }} />,
			title: 'Life Skills',
			text: 'These skills include effective communication, problem-solving, teamwork, financial literacy, time management and job readiness',
		},
		{
			icon: <SupportIcon sx={{ height: 50, width: 50 }} />,
			title: 'Civic Engagement',
			text: "Through various initiatives, the union encourages participation in the democratic process, community organizing, and advocacy for workers' rights",
		},
		{
			icon: <Diversity3Icon sx={{ height: 50, width: 50 }} />,
			title: 'Rebuilding Families',
			text: 'By empowering families with tools, the union aims to create a nurturing environment where individuals can thrive, fostering healthier relationships and a brighter future for all family member',
		},
		{
			icon: <LocalLibraryIcon sx={{ height: 50, width: 50 }} />,
			title: 'Rebuilding Communities',
			text: 'Through collaborative efforts, the union focuses on various initiatives, such as infrastructure development, job creation, education and training programs, and community outreach',
		},
	];
	return (
		<div className='work-section-wrapper'>
			<div className='work-section-top'>
				<p className='primary-subheading'>Work</p>
				<h1 className='primary-heading'>4 Pillars</h1>
				{/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
			</div>
			<div className='work-section-bottom'>
				{workInfoData.map((data) => (
					<div className='work-section-info' key={data.title}>
						<div className='info-boxes-img-container'>{data.icon}</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
