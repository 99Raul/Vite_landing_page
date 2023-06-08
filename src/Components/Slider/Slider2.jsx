import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import H1 from '../../assets/hw_sd1.png';
import H2 from '../../assets/hw_sd2.png';
// import H3 from '../../assets/hw_sd3.png';
// import H4 from '../../assets//hw_sd4.png';
import H6 from '../../assets/hw_sd5.1.png';
import H33 from '../../assets/hw_sd3.3.png';
import H4_1 from '../../assets/hw_sd4.1.png';

const Slider2 = () => {
	return (
		<>
			<p className='primary-subheading-carousel'>Gallery</p>

			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className='carousel'
				containerClass='carousel_container'
				dotListClass=''
				draggable
				focusOnSelect={false}
				infinite
				itemClass='carousel_item'
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 1,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 1,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots
				sliderClass='carousel_slider'
				slidesToSlide={1}
				swipeable
			>
				<div className='gallery_slides'>
					<img className='gallery_slides_img' src={H1} />
				</div>
				<div className='gallery_slides'>
					<img className='gallery_slides_img' src={H2} />
				</div>
				<div className='gallery_slides'>
					<img className='gallery_slides_img' src={H33} />
				</div>
				<div className='gallery_slides'>
					<img className='gallery_slides_img' src={H4_1} />
				</div>
				<div className='gallery_slides'>
					<img className='gallery_slides_img' src={H6} />
				</div>
			</Carousel>
		</>
	);
};

export default Slider2;

// style={{
// 						display: 'block',
// 						height: '80%',
// 						margin: 'auto',
// 						width: '80%',
// 						borderRadius: '20px',
// 					}}
