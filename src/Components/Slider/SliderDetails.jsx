import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

export default function SliderDetails({ description, image }) {
	// console.log(image);
	return (
		<Container
			sx={{
				'@media (max-width:530px)': {
					height: 450,
					width: 480,
				},
				'@media (max-width:415px)': {
					height: 400,
					width: 400,
				},
				'@media (max-width:390px)': {
					height: 400,
					width: 380,
				},
			}}
		>
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
				<Typography variant='body2' sx={{ color: 'white' }}>
					{description}
				</Typography>
			</Paper>
			<Box
				component='img'
				sx={{
					height: 500,
					display: 'block',
					maxWidth: 700,
					overflow: 'hidden',
					width: '100%',
					'@media (max-width:415px)': {
						height: 400,
						width: 368,
					},
					'@media (max-width:390px)': {
						height: 300,
						width: 348,
					},
				}}
				src={image}
				alt={description}
			></Box>
		</Container>
	);
}
SliderDetails.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
};

// '@media (max-width:230px)': {
// 					width: 225,
// 					ml: -34,
// 				},
