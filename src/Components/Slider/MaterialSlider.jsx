import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import H1 from '../../assets/hw_sd1.png';
import H2 from '../../assets/hw_sd2.png';
// import H3 from '../../assets/hw_sd3.png';
// import H4 from '../../assets//hw_sd4.png';
import H6 from '../../assets/hw_sd5.1.png';
import H33 from '../../assets/hw_sd3.3.png';
import H4_1 from '../../assets/hw_sd4.1.png';

const images = [
	{
		id: 0,
		label: 'Homework SD',
		img: H1,
	},
	{
		id: 1,
		label: '',
		img: H2,
	},
	{
		id: 2,
		label: '',
		img: H33,
	},
	{
		id: 3,
		label: '',
		img: H4_1,
	},
	{
		id: 4,
		label: '',
		img: H6,
	},
];

function MaterialSlider() {
	const theme = useTheme();

	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			<p className='primary-subheading-carousel'>Gallery</p>
			<Box sx={{ maxWidth: 600, flexGrow: 1, m: 'auto', mt: 2 }}>
				<Paper
					square
					elevation={0}
					sx={{
						display: 'flex',
						alignItems: 'center',
						height: 50,
						pl: 2,
						bgcolor: '#212121',
					}}
				>
					<Typography sx={{ color: 'white' }}>
						{images[activeStep].label}
					</Typography>
				</Paper>

				{images.map((step, index) => (
					<div key={step.id}>
						{Math.abs(activeStep - index) <= 0 ? (
							<Box
								component='img'
								sx={{
									height: 400,
									display: 'block',
									maxWidth: 600,
									overflow: 'hidden',
									width: '100%',
								}}
								src={step.img}
								alt={step.label}
							/>
						) : null}
					</div>
				))}

				<MobileStepper
					steps={maxSteps}
					position='static'
					variant='dots'
					activeStep={activeStep}
					sx={{
						bgcolor: '#212121',
						'& 	.MuiMobileStepper-dots': {
							color: '#fe902d',
						},
						'& 	.MuiMobileStepper-dot': { color: '#fe902d', bgcolor: '#ffffff' },
						'& 	.MuiMobileStepper-dotActive': {
							color: '#fe902d',
							bgcolor: '#fe902d',
						},
					}}
					nextButton={
						<Button
							size='small'
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
							sx={{ color: '#fe902d' }}
						>
							Next
							{theme.direction === 'rtl' ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size='small'
							onClick={handleBack}
							disabled={activeStep === 0}
							sx={{ color: '#fe902d' }}
						>
							{theme.direction === 'rtl' ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Box>
		</>
	);
}

export default MaterialSlider;
