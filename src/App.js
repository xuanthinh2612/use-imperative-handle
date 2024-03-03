import logo from './logo.svg';
import './App.css';
import Video from './videos/Video';
import { useRef } from 'react';
import Heading from './components/heading/Index';

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
  );
}

export default App;
