import React from 'react';
import './Intro.css';
import Drone from '../drone/Drone.tsx';
import { Fade } from "react-awesome-reveal";
import Button from 'react-bootstrap/Button';
import Pdf from '../assets/Drone Engineering Internship Curriculum.pdf';

const Intro = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='text'>
          <Fade cascade damping={0.1} duration={2000} direction='left' triggerOnce>
            <p className='up'><strong>LinkedIn Top Startup 2023</strong></p>
            <div>
            <h1 className='unlock'>UNLOCK</h1>
            <h1 className='unlock'>THE SKIES</h1>
            </div>
            <p className='experience'>Experience the technology like never before<br/>with our innovative Drone Engineering program</p>
          </Fade>
          <div className='button'>
            <a href={Pdf} download>
              <Button variant="outline-dark">Download Brochure</Button>
            </a>
            <Button className='register'>Register Now</Button>
          </div>
        </div>
        <div className='drone'>
          <Fade direction='right' duration={2000} triggerOnce cascade>
            <Drone/>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Intro;