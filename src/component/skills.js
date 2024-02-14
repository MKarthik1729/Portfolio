import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import './skills.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Skills() {
  return (
    <div className="second" >
      <h1 className="heading0">My  <span>Skills</span></h1>
      <section className="main">
        <div className="skills">
           <h1 className="heading">Technical skills</h1>
            <div>
                <FontAwesomeIcon className="html" icon={faHtml5} /><br/>
                <span className="names">HTML</span>
              <div className="progress-bar" role='progressbar' style={{width:'50%'}} >
              <ProgressBar completed = {95} bgColor = "cyan" labelColor="black" height="11px" animateOnRender = {true} isLabelVisible = {true} />
              <br></br>
              </div>
            </div>
            <div >
                <FontAwesomeIcon className="python" icon={faPython} /><br/>
                <span className="names">Python</span>
              <div className="progress-bar" role='progressbar' style={{width:'50%'}} >
              <ProgressBar completed = {90} bgColor = "cyan" height="11px" labelColor="black" animateOnRender = {true} isLabelVisible = {true} />
              <br></br>
              </div>
            </div>
            <div className="bar">
                <FontAwesomeIcon className="css" icon={faCss3} /><br/>
                <span className="names">CSS</span>
              <div className="progress-bar" role='progressbar' style={{width:'50%'}} >
              <ProgressBar completed = {80} bgColor = "cyan" height="11px" labelColor="black" animateOnRender = {true} isLabelVisible = {true} />
              <br></br>
              </div>
            </div>
            <div className="bar">
                <FontAwesomeIcon className="javascript" icon={faJs} /><br/>
                <span className="names">Javascript</span>
              <div className="progress-bar" role='progressbar' style={{width:'50%'}} >
              <ProgressBar completed = {75} bgColor = "cyan" height="11px" labelColor="black" animateOnRender = {true} isLabelVisible = {true} />
              <br></br>
              </div>
            </div>
            <div className="bar">
                <FontAwesomeIcon className="react" icon={faReact} /><br/>
                <span className="names">React</span>
              <div className="progress-bar" role='progressbar' style={{width:'50%' ,height : '25px',color : 'black'}} >
              <ProgressBar completed = {70} bgColor = "cyan" height="11px" labelColor="black" animateOnRender = {true} isLabelVisible = {true}/>
              <br></br>
              </div>
            </div>
          </div>
          <div className="skills">
            <h1 className="heading"> Professional skills</h1>
            <div class='bar1'>
                <div className="radial-bar">
                    <div style={{ width: '150px', margin: 'auto',paddingTop:'20px' }}>
                        <CircularProgressbar
                            className="circleBars"
                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            trailColor: 'light grey',
                            pathColor: `rgba(0,255,255, ${95 / 100})`,
                            pathTransitionDuration: 0,
                            pathTransition: 'stroke-dashoffset 1s ease 0s',
                            })}
                        /><br/><br/>
                        <div className="text">creativity</div>
                    </div>
                </div>
                <div className="radial-bar">
                    <div style={{ width: '150px', margin: 'auto',paddingLeft :'40px',paddingTop:'20px'}}>
                        <CircularProgressbar
                            className="circleBars"
                            value={70}
                            text={`${70}%`}
                            styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            trailColor: 'light grey',
                            pathColor: `rgba(0,255,255, ${70 / 100})`,
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 1s ease 0s',
                            width : '100px',
                            })}
                    /><br/><br/>
                    <div className="text">communication</div>
                    </div>
                </div>
            </div>
            <div className="bar2">
                <div className="radial-bar">
                    <div style={{ width: '150px', margin: 'auto' ,paddingTop:'40px'}}>
                        <CircularProgressbar
                            className="circleBars"
                            value={90}
                            text={`${90}%`}
                            styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            trailColor: 'light grey',
                            pathColor: `rgba(0,255,255, ${90 / 100})`,
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 1s ease 0s',
                            })}
                        /><br/><br/>
                        <div className="text">problem solving</div>
                    </div>
                </div>
                <div className="radial-bar">
                   <div style={{ width: '150px', margin: 'auto' , paddingLeft: '40px',paddingTop:'40px'}}>
                        <CircularProgressbar
                            className="circleBars"
                            value={80}
                            text={`${80}%`}
                            styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            trailColor: 'light grey',
                            pathColor: `rgba(0,255,255, ${80 / 100})`,
                            // pathTransitionDuration: 1,
                            // pathTransition: 'stroke-dashoffset 1s ease 0s',
                            })}
                        /><br/><br/>
                        <div className="text">Teamwork</div>   
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div >);



};

export default Skills;
