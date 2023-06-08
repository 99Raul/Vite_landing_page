import { useState } from 'react';

import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportIcon from '@mui/icons-material/Support';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CardSlider from './ModalSliders/CardSlider';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 570,
	height: 450,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	'@media (max-width: 395px)': {
		width: '370px',
	},
};

const Work = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorEl4, setAnchorEl4] = useState(null);

	const [modalOpen, setModalOpen] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClick4 = (event) => {
		setAnchorEl4(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClose4 = () => {
		setAnchorEl4(null);
	};

	const handleModalOpen = () => setModalOpen(true);
	const handleModalClose = () => setModalOpen(false);

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const open4 = Boolean(anchorEl4);
	const id4 = open4 ? 'simple-popover' : undefined;

	const workInfoData = [
		{
			icon: <EngineeringIcon sx={{ height: 50, width: 50 }} />,
			title: 'Life Skills',
			text: 'These skills include effective communication, problem-solving, teamwork, financial literacy, time management and job readiness',
		},
		{
			icon: <SupportIcon sx={{ height: 50, width: 50 }} />,
			title: 'Civic Engagement',
			text: 'We believe that lasting and sustainable reintegration is fostered when we get involved and learn about the political process abd how decisions are made that affect our lives. We meet and speak with local politicians, discover what issues currently on the ballot are, have a voice in what we believe the issues should be, and we educate on how to research each candidates positions in order to vote their values.',
			btn: (
				<div className='popover_btn'>
					<Button
						aria-describedby={id}
						variant='contained'
						onClick={handleClick}
						sx={{ mt: 2, backgroundColor: '#424242' }}
					>
						<PlaylistAddCheckIcon sx={{ mr: 0.3 }} />
						Achievements
					</Button>
					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
					>
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Black History Month Community Conversation, February 2, 2023
						</Typography>
						<Divider />
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Building Workforce Partnerships Conference, April 5,2023
						</Typography>
						<Divider />
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							The 43rd annual San Diego County Democratic Party Roosevelt Dinner
							on April 22,2023
						</Typography>
						<Divider />
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Progressive Labor Summit, April 29 2023
						</Typography>
					</Popover>
				</div>
			),
			mdl: (
				<div>
					<Button
						onClick={handleModalOpen}
						variant='contained'
						sx={{ mt: 0.7 }}
					>
						<PermMediaIcon sx={{ mr: 0.3 }} />
						Images
					</Button>
					<Modal
						open={modalOpen}
						onClose={handleModalClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
						sx={{}}
					>
						<Box sx={style}>
							<Typography id='modal-modal-title' variant='h6' component='h2'>
								Text in a modal
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: 2 }}>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
							</Typography>
							<CardSlider />
						</Box>
					</Modal>
				</div>
			),
		},

		{
			icon: <Diversity3Icon sx={{ height: 50, width: 50 }} />,
			title: 'Rebuilding Families',
			text: 'By empowering families with tools, the union aims to create a nurturing environment where individuals can thrive, fostering healthier relationships and a brighter future for all family members',
		},
		{
			icon: <LocalLibraryIcon sx={{ height: 50, width: 50 }} />,
			title: 'Rebuilding Communities',
			text: 'Community service is a restorative practice to repair the harm that was once done in the community, rebuild prosocial relationships and re-establish trust. We do this by practicing in event to meet out community needs',
			btn4: (
				<div className='popover_btn'>
					<Button
						aria-describedby={id4}
						variant='contained'
						onClick={handleClick4}
						sx={{ mt: 2, backgroundColor: '#424242' }}
					>
						<PlaylistAddCheckIcon sx={{ mr: 0.3 }} />
						Achievements
					</Button>
					<Popover
						id={id4}
						open={open4}
						anchorEl={anchorEl4}
						onClose={handleClose4}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
					>
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Labor Council Covid-19 food distribution initiative- we
							distributed over 100,000 pounds of food to families in need
						</Typography>
						<Divider />
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Clean up projects, abatement projects, and building projects as
							needed
						</Typography>
						<Divider />
						<Typography
							sx={{ p: 2, backgroundColor: '#212121', color: 'white' }}
						>
							Host an annual career fair and softball game
						</Typography>
					</Popover>
				</div>
			),
		},
	];
	return (
		<div className='work-section-wrapper'>
			<div className='work-section-top'>
				<p className='primary-subheading'>Mission</p>
				<h1 className='primary-heading'>4 Pillars</h1>
				{/* <p className='primary-text-mission'>
					We assist formerly incarcerated men and women to reintegrate into
					their communities by instilling our four pillars into their lives into
					freedom: Life Skills, Rebuilding Families, Rebuilding Communities and
					Civic Engagement.
				</p> */}
			</div>
			<div className='work-section-bottom'>
				{workInfoData.map((data) => (
					<div className='work-section-info' key={data.title}>
						<div className='info-boxes-img-container'>{data.icon}</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
						{data.btn}
						{data.mdl}
						{data.btn4}
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
