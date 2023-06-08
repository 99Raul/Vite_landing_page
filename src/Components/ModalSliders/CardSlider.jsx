import {} from 'react';
import LaborPic from '../../assets/labor_pic2_.png';

const CardSlider = () => {
	return (
		<div className='conteudo'>
			<div className='carrousel_modal'>
				<img className='card_modal' src={LaborPic}></img>
				<img className='card_modal' src={LaborPic}></img>
				<img className='card_modal' src={LaborPic}></img>
				<img className='card_modal' src={LaborPic}></img>
			</div>
		</div>
	);
};

export default CardSlider;
