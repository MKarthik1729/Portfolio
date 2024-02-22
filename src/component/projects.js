import React from 'react'
import library from './library.avif'
import mern from './merns.jpeg'
import ml from './ml.jpeg'
import './project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function projects(props) {
  return (
    <div ref={props.x}>
      <section>
          <div className='portfolio' id='project'>
              <div className='main-text' id = 'project'>
              <h1>My <span>Projects</span></h1>
              <div className='portfolio-content'>
                  <div className='row'>
                  <img className='image1' src={mern} alt="Profile Photo" />
                      <div className='layer'>
                          <h5>HEALTH STACK</h5>
                          <p>An integrated e-commerce platform specializing in the sale of medicines, healthcare products, and pharmaceutical items, featuring distinct portals for administrators, consumers, and sellers.</p>
                         <Link to='/health'>
                         <FontAwesomeIcon className='sec' icon={faExternalLinkAlt} style={{ color: 'white' }} />
                         </Link> 
                      </div>
                  </div>
                  <div className='row'>
                  <img className='image1' src={ml} alt="Profile Photo" />
                      <div className='layer'>
                          <h5>DRUG TARGET INTERACTION AND PREDICTION </h5>
                          <p>A machine learning project focused on predicting drug-target interactions, leveraging advanced algorithms to forecast the interaction outcomes between drugs and their molecular targets.</p>
                          <Link to='/drug'>
                          <FontAwesomeIcon className='sec' icon={faExternalLinkAlt} style={{ color: 'white' }} />
                          </Link>
                      </div>
                  </div>
                  <div className='row'>
                  <img className='image1' src={library} alt="Profile Photo" />
                      <div className='layer'>
                          <h5>LIBRARY MANAGEMENT SYSTEM</h5>
                          <p>A console-based Object-Oriented Programming (OOP) project designed for library management, incorporating CRUD operations, along with mathematical functionalities.</p>
                          <Link to='/library'>
                          <FontAwesomeIcon className='sec'  icon={faExternalLinkAlt} style={{ color: 'white' }} />
                          </Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default projects;
// onClick={}