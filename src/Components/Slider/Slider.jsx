import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import SliderDetails from './SliderDetails';

import H1 from '../../assets/hw_sd1.png';
import H2 from '../../assets/hw_sd2.png';
// import H3 from '../../assets/hw_sd3.png';
// import H4 from '../../assets//hw_sd4.png';
import H6 from '../../assets/hw_sd5.1.png';
import H33 from '../../assets/hw_sd3.3.png';
import H4_1 from '../../assets/hw_sd4.1.png';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const imageData = [
	{
		id: 1,
		name: '1',
		description: '1',
		image: H1,
	},
	{
		id: 2,
		name: '2',
		description: '2',
		image: H2,
	},
	{
		id: 3,
		name: '3',
		description: '3',
		image: H33,
	},
	{
		id: 4,
		name: '4',
		description: '4',
		image: H4_1,
	},
	{
		id: 5,
		name: '5',
		description: '5',
		image: H6,
	},
];

const Slider = () => {
	const imageProduct = imageData.map((item) => (
		<SliderDetails
			key={item.id}
			image={item.image}
			description={item.description}
		/>
	));

	return (
		<>
			<p className='primary-subheading-carousel'>Gallery</p>
			<Box sx={{ maxWidth: 700, flexGrow: 1, m: 'auto', mt: 2 }}>
				<Carousel
					responsive={responsive}
					additionalTransfrom={0}
					arrows
					showDots
					autoPlaySpeed={3000}
					centerMode={false}
					className=''
					containerClass=''
					dotListClass=''
					sliderClass=''
					draggable
					focusOnSelect={false}
					infinite
					itemClass=''
					keyBoardControl
					minimumTouchDrag={80}
					pauseOnHover
					renderArrowsWhenDisabled={false}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					slidesToSlide={1}
					swipeable
				>
					{imageProduct}
				</Carousel>
			</Box>
		</>
	);
};

export default Slider;
