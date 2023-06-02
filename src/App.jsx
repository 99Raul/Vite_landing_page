import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Divider } from '@mui/material';
import Members from './Components/Members';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './Components/Events/Events';
import Contact from './Components/Contact/Contact';
import Mission from './Components/Mission';
// import Slider from './Components/Slider';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/members' element={<Members />} />
					<Route path='/events' element={<Events />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/mission' element={<Mission />} />
				</Routes>
			</Router>
			<Divider sx={{ mt: 10 }} />
			<Footer />
		</div>
	);
}

export default App;


