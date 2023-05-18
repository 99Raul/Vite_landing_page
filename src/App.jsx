import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Footer from './Components/Footer'
import {Divider} from '@mui/material'



function App() {

  return (
    
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Divider sx={{ mt: 10 }}/>
      <Footer />
      
    </div>
  )
}

export default App
