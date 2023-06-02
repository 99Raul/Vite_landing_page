import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SliderDetails from './SliderDetails';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		paritialVisibilityGutter: 60,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		paritialVisibilityGutter: 50,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		paritialVisibilityGutter: 30,
	},
};

const imageData = [
	{
		id: 1,
		name: '1',
		description: '1',
		image:
			'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 2,
		name: '2',
		description: '2',
		image:
			'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 3,
		name: '3',
		description: '3',
		image:
			'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 4,
		name: '4',
		description: '4',
		image:
			'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
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
		<Carousel
			responsive={responsive}
			additionalTransfrom={0}
			arrows
			showDots
			autoPlaySpeed={3000}
			centerMode={false}
			className='carousel'
			containerClass='container-with-dots'
			dotListClass=''
			sliderClass='carousel-slide'
			draggable
			focusOnSelect={false}
			infinite
			itemClass='carousel-padding'
			keyBoardControl
			minimumTouchDrag={80}
			pauseOnHover
			renderArrowsWhenDisabled={false}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			slidesToSlide={1}
		>
			{imageProduct}
		</Carousel>
	);
};

export default Slider;
