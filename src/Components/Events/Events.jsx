import Navbar from '../Navbar';
import { useQuery } from 'react-query';
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Events = () => {
	const url =
		'https://www.eventbriteapi.com/v3/organizations/483356901461/events/';

	// 'Authorization': `Bearer ${token}` for post deploy

	//organizer_id 483356901461

	// Fetcher function

	const getEvents = async () => {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_API_EVENT_KEY}`,
			},
		});

		console.log(data);
		return data;
	};

	// Using the hook
	const { data, error, isLoading } = useQuery('evnt', getEvents);
	// Error and Loading states
	if (error)
		return (
			<div>
				<Navbar />
				<Box
					sx={{
						mt: 14,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Alert
						variant='filled'
						severity='error'
						sx={{ mt: 2, justifyContent: 'center' }}
					>
						Request Failed
					</Alert>
				</Box>
			</div>
		);
	if (isLoading)
		return (
			<div>
				<Navbar />
				<Box sx={{ mt: 14, display: 'flex', justifyContent: 'center' }}>
					<CircularProgress />
					<Typography variant='h5' sx={{ ml: 2, mt: 0.4 }}>
						Loading...
					</Typography>
				</Box>
			</div>
		);

	if (data.events.length === 0)
		return (
			<div>
				<Navbar />
				<Box sx={{ mt: 14, display: 'flex', justifyContent: 'center' }}>
					<Typography variant='h5' sx={{ ml: 2, mt: 0.4 }}>
						please check again later for events
					</Typography>
				</Box>
			</div>
		);

	// Show the response if everything is fine

	return (
		<div>
			<Navbar />

			{/*this api calls through two objects in api, using url */}
			{data?.events.map((evt) => {
				return (
					<Box
						key={evt.category_id}
						sx={{ mt: 14, display: 'flex', justifyContent: 'center' }}
					>
						<Card sx={{ maxWidth: 600 }}>
							<CardMedia
								component='img'
								sx={{ width: 300, m: 'auto', mt: 0.8 }}
								image={evt.logo.url}
								title='Card media'
							/>
							<CardContent>
								<Typography sx={{ mt: 1, fontWeight: 'bold' }} variant='h6'>
									{evt.name.text}
								</Typography>
								<Typography sx={{ mt: 1 }}>
									{new Date(evt.start.local).toDateString()}
									{', '}
									{new Date(evt.start.local).toLocaleTimeString()}
								</Typography>
								<Typography sx={{ mt: 1 }}>{evt.description.text}</Typography>
							</CardContent>
							<CardActions>
								<Link href={evt.url}>
									<Button
										variant='contained'
										sx={{ backgroundColor: '#fe902d', color: 'black' }}
									>
										Tickets
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Box>
				);
			})}
		</div>
	);
};

export default Events;
