import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SliderDetails(props) {
	return (
		<Card
			sx={{
				maxWidth: 390,
			}}
		>
			<CardMedia
				sx={{
					height: 233,
					width: 390,
				}}
				component='img'
				src={props.image}
				alt='pictures from homework sd non profit'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	);
}

// '@media (max-width:230px)': {
// 					width: 225,
// 					ml: -34,
// 				},
