import TagCloud from '@frank-mayer/react-tag-cloud';

import './skillsSection.css';

function SkillsSection() {
  return (
    <section className='skills-container' id='skills'>
      <div className='skills-description-container'>
        <h2 className='skills-title'>My Skills</h2>
        <p className='skills-description'>
          My skills so far are based on a web development bootcamp from
          FastTrackIT, and a couple of Udemy courses.
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
