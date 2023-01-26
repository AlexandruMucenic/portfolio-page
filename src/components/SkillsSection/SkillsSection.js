import TagCloud from '@frank-mayer/react-tag-cloud';

import './skillsSection.css';

function SkillsSection() {
  return (
    <section className='skills-container' id='skills'>
      <div className='skills-description-container'>
        <h2 className='skills-title'>My Skills</h2>
        <p className='skills-description'>
          My journey started with a web development bootcamp, from FastTrackIT,
          focused on HTML, CSS, Javascript, React and PHP.
          <br />
          <br />
          After finishing the bootcamp, I've realized that I have to consolidate
          my knowledge on JavaScript, in order to improve my understanding of
          React.js and get to the point of being able to learn Node.js. So, to
          get there I've undertook a complete course on JavaScript, by Jonas.io.
          <br />
          <br />
          This page and the projects from the section above are a testimony of
          what I've learned so far.
        </p>
      </div>

      <TagCloud
        options={w => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'medium',
        })}
      >
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'PHP',
          'git',
          'React.js',
          'HTML',
          'git',
          'React.js',
          'JavaScript',
          'PHP',
          'CSS',
          'HTML',
          'CSS',
          'React.js',
          'PHP',
          'JavaScript',
          'git',
        ]}
      </TagCloud>
    </section>
  );
}

export default SkillsSection;
