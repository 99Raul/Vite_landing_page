import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Mission = () => {
	return (
		<div>
			<Navbar />
			<Box justifyContent='center' display='flex'>
				<Paper
					elevation={3}
					display='inline-block'
					sx={{
						width: '100%',
						height: 700,
						backgroundColor: '#212121',
						mt: 3,
						'@media (max-width:415px)': {
							width: 350,
							height: 750,
						},
					}}
				>
					<Typography
						variant='h3'
						justifyContent='center'
						display='flex'
						sx={{
							color: '#fe902d',
							mt: 1,
							'@media (max-width:415px)': {
								fontSize: 30,
							},
						}}
					>
						Our Mission
					</Typography>
					<Typography
						variant='h5'
						color='inherit'
						sx={{
							color: '#ffff',
							mt: 1,
							p: 4,
							lineHeight: 1.5,
							'@media (max-width:415px)': {
								fontSize: 15,
							},
						}}
					>
						We assist formerly incarcerated men and women to reintegrate into
						their communities by instilling our four pillars into their lives
						into freedom: Life Skills, Rebuilding Families, Rebuilding
						Communities and Civic Engagement. By bridging the gap between the
						construction industry and the formerly incarcerated, we aim to break
						down barriers, foster inclusivity, and promote positive
						reintegration, ultimately creating a more resilient, empowered, and
						diverse workforce in the construction sector.
					</Typography>
				</Paper>
			</Box>
		</div>
	);
};

export default Mission;
