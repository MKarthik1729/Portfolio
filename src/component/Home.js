import React, {useEffect } from 'react'
import './home.css'
import {Button } from 'react-bootstrap';
import Typed from 'typed.js';
import me from './wall4.jpeg';

function Home(props) {
  useEffect(() => {
    const options = {
      strings: ['Software Developer', 'Python Developer', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 25,
    };

    const typed = new Typed('.text', options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='content'>
      <div className='first'>
        <div>
          <h3> Hello ,it's Me</h3>
          <h1>Mopidevi Surya</h1>
          <h3>And I'm a<span className="text"></span></h3>
          <p className='start'>A software developer is a professional who specializes in creating, designing, and maintaining software applications. These individuals play a crucial role in the development lifecycle, contributing their expertise to produce high-quality, functional, and efficient software solutions.</p>
          <div>
            <br /><br /><Button className='aboutMe' onClick={props.func}>More About Me</Button>
          </div>
        </div>
        <div >
          <div className='PhotoAdd'>
            <img className='image' src={me} alt="Profile Photo" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home