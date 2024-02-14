import React, { useState, useEffect } from 'react'
import './home.css'
import { Form, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import me from './wall4.jpeg';

function Home(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };
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
            {/* <FontAwesomeIcon className='icon' icon={faInstagram} size="5x" style={{ margin: '0 10px',color:'pink' }} />
            <a href='https://github.com/SuryaMopidevi' alt='gitHub'><FontAwesomeIcon className='icon' icon={faGithub} size="2x" style={{ margin: '0 10px',color:'white' }} /></a>
            <FontAwesomeIcon className='icon' icon={faPhone} size="2x" style={{ margin: '0 10px',color:'green' }} />
            <a href='https://www.linkedin.com/in/pavitra-surya-mopidevi-9792ab249/' alt='linkedIn'><FontAwesomeIcon className='icon' icon={faLinkedin} size="2x" style={{ margin: '0 10px',color:'white' }} /></a>
            <FontAwesomeIcon className='icon' icon={faEnvelope} size="2x" style={{ margin: '0 10px',color:'red' }} /> */}
            <br /><br /><Button className='aboutMe' onClick={props.func}>More About Me</Button>
          </div>
        </div>
        <div >
          <div className='PhotoAdd'>
            <img className='image' src={me} alt="Profile Photo" />
          </div>

          <h2>Upload Photo</h2>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Photo</Form.Label><br />
              <Form.Control type="file" onChange={handleFileChange} />
              <Button className="upload" onClick={handleUpload}>
                Upload
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>

  )
}

export default Home