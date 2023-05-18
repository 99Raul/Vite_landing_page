import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Footer from './Components/Footer';
import { Divider } from '@mui/material';
import Partners from './Components/Partners';

function App() {
	return (
		<div className='App'>
			<Home />
			<About />
			<Work />
			<Partners />
			<Divider sx={{ mt: 10 }} />
			<Footer />
		</div>
	);
}

export default App;
