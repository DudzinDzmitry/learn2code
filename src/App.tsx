import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import { Home, Learning, Roadmap, Settings } from './components/pages';

function App() {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learning' element={<Learning />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
  )
}

export default App
