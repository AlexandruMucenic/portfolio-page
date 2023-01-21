import ScrollDownLeft from '../ScrollDownLeft/ScrollDownLeft';
import ScrollDownRight from '../ScrollDownRight/ScrollDownRight';

import TagCloud from '@frank-mayer/react-tag-cloud';

import './skillsSection.css';

function SkillsSection() {
  return (
    <section className='skills-container' id='skills'>
      <div className='skills-description-container'>
        <h2 className='skills-title'>My Skills</h2>
        <p className='skills-description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
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
          'React.js',
          'PHP',
          'git',
          'CSS',
          'JavaScript',
          'React.js',
          'PHP',
          'git',
          'HTML',
        ]}
      </TagCloud>

      <ScrollDownLeft />
      <ScrollDownRight />
    </section>
  );
}

export default SkillsSection;
