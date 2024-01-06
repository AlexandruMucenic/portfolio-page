import TagCloud from '@frank-mayer/react-tag-cloud';

import './skillsSection.css';

function SkillsSection() {
  return (
    <section className="skills-container" id="skills">
      <div className="skills-description-container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-description">
          My professional journey began with a web development bootcamp, focused
          on: HTML, CSS, JavaScript, React, and PHP.
          <br />
          <br />
          This foundational experience ignited a passion for web development,
          leading me to further expand my expertise in these technologies
          through courses on Udemy and various other platforms.
          <br />
          <br />
          I have been part of the tech industry for nearly a year now. This has
          provided me the with opportunity to gain real-world experience but
          also, brought to light the importance of improving my understanding of
          computer science basics. Which is why I have enrolled in a two year
          postgraduate program in Computer Science, aiming to enhance my
          knowledge and technical proficiency.
          <br />
          <br />
          The projects showcased in the next section are a testament to my
          growth in the field, so far.
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
          'Sass',
          'Material UI',
          'Bootstrap',
          'JavaScript',
          'TypeScript',
          'React.js',
          'Node.js',
          'Next.js',
          'Express.js',
          'Passport.js',
          'Redux.js',
          'git',
          'HTML',
          'CSS',
          'Sass',
          'Material UI',
          'Bootstrap',
          'JavaScript',
          'TypeScript',
          'React.js',
          'Node.js',
          'Next.js',
          'Express.js',
          'Passport.js',
          'Redux.js',
          'git',
        ]}
      </TagCloud>
    </section>
  );
}

export default SkillsSection;
