import Navbar from '../Components/Navbar';
import YadiraSd from '../assets/yadira_hmk.png';
import JasonSd from '../assets/jason_hmk.png';
import MathewSd from '../assets/mathew_hmk.png';
import TomSd from '../assets/tom_hmk.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Members = () => {
	const memberData = [
		{
			id: 1,
			name: 'Jason Shanley',
			description: 'Founder & CEO',
			image: JasonSd,
		},
		{
			id: 2,
			name: 'Yadira Ocon',
			description: 'Program Manager',
			image: YadiraSd,
		},
		{
			id: 3,
			name: 'Mathew Edwards',
			description: 'Program Facilitator',
			image: MathewSd,
		},
		{
			id: 4,
			name: 'Tom Lemmon',
			description: 'Board Member',
			image: TomSd,
		},
	];

	return (
		<div>
			<Navbar />
			<div className='member_team'>
				<Typography variant='h3' sx={{ mt: 14 }}>
					Our Team
				</Typography>
			</div>
			<Grid sx={{ flexGrow: 1, mt: 7 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent='center'>
						{memberData.map((data) => (
							<Card
								key={data.id}
								sx={{ mr: 3, height: 250, width: 250, mb: 2 }}
							>
								<Avatar
									alt='Remy Sharp'
									src={data.image}
									sx={{ mx: 'auto', mt: 2, width: 80, height: 80 }}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										{data.name}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{data.description}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Members;
