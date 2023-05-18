import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Ibewlogo from '../assets/ibew_569_logo.png';
import Sdlogo from '../assets/SanDiego_construction_council_logo.png';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#616161' : '#616161',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: '#fafafa',
}));

const Partners = () => {
	return (
		<div className='partners'>
			<div className='partner-section-text-container'>
				<p className='partner-subheading'>Partners</p>
			</div>
			<Stack
				direction='row'
				divider={<Divider orientation='vertical' flexItem />}
				spacing={2}
				justifyContent='center'
				sx={{ mt: 2 }}
			>
				<Avatar alt='Ibew 569' src={Ibewlogo} />
				<Item>Ibew 569</Item>
				<Avatar alt='SD' src={Sdlogo} />
				<Item>SD Trades Council</Item>
			</Stack>
		</div>
	);
};

export default Partners;
