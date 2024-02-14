import React from 'react';
import { useSpring, animated } from 'react-spring';
// import './SkillsSection.css'; // Import your CSS file for additional styling

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    // Add more skills as needed
  ];

  const animatedStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, // Adjust the delay as needed
  });

  return (
    <animated.div style={animatedStyles} className="skills-section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default SkillsSection;
