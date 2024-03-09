import './App.css';
import Video from './videos/Video';
import { useRef } from 'react';
import Heading from './components/heading/Index';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  const videoRef = useRef()

  const handlePlay =()=> {
    videoRef.current.playVideo()
  }  

  const handlePause =()=> {
    videoRef.current.pauseVideo()
  }




  return (
    <div className="App m-5">
      <div>
        <Heading></Heading>
        <div>
          {/* Do thang video da dung forwardRef nen co the nhan prop ref truyen vao nhu mot component cua DOM */}
          <Video ref={videoRef}></Video> 
        </div>
        <div>
          <button 
            onClick={handlePlay}
            className='btn btn-outline-success m-2'>Play</button>
          <button 
            onClick={handlePause}
            className='btn btn-outline-warning m-2'>Pause</button>
        </div>  
      </div>
      <div>
        <ul>
        <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
