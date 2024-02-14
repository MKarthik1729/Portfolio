import React from 'react'
import './aboutMe.css'
import me from './me2.jpeg';

export default function aboutMe(props) {
    return (
        <div className='info' ref={props.x} >
            <h1>About <span>ME</span></h1>
            <h3>Software Developer</h3>
            <p className='intro'>Hello! 👋 I'm <span>Mopidevi Pavitra Surya</span>, an enthusiastic student pursuing a Bachelor's Degree at Indian Institute of Information and Technology,Sricity with a passion for Software Developer.
                🚀 I've gained practical insights and problem-solving abilities.
            </p>
            <div className='AdditionalInfo'>
                <div className='PhotoAdd1'>
                    <img className='image1' src={me} alt="Profile Photo" />
                </div>
                <div className='firstPart'>
                    <h3>Education</h3>
                    <dl className='education'>
                        <dt>Bachelor's Degree</dt><br />
                        <dd>
                            - Indian Institute of Information Technology Sricity , Chittoor.<br />
                            - Branch : Computer Science and Engineering.
                        </dd><br />

                        <dt>Board of Intermediate Education</dt><br />
                        <dd>
                            - Narayana Junior college,Vijayawada.
                        </dd><br />

                        <dt>Board of Intermediate Education</dt><br />
                        <dd>
                            - Viswabharathi English Medium High School,Gudivada.
                        </dd>
                    </dl>
                    <h3>Courses and Certifications</h3>
                    <dl className='education'>
                        <dt>Python Certificate</dt><br />
                        <dd>
                            - Awarded for completing a Python programming course on EDUCBA.
                        </dd><br />

                        <dt>SQL Certificate</dt><br />
                        <dd>
                            - Earned by successfully completing a SQL database management course on SkillUP.
                        </dd>
                    </dl><br />
                </div>
            </div>
            <p className='add'>Eager to contribute my knowledge and skills, I'm excited about making a positive impact in the field. Let's connect and explore the possibilities together! 🌟</p>
        </div>
    )
}
