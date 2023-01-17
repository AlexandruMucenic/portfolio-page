import './skillsSection.css';

function SkillsSection() {
  return (
    <section className='skills-container'>
      <div className='description-container'>
        <h2 className='skills-title'>My Skills</h2>
        <p className='skills-description'>Something regarding my skills</p>
      </div>
      <div className='skills-canvas'>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>PHP</li>
          <li>Git</li>
          <li>NPM</li>
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
