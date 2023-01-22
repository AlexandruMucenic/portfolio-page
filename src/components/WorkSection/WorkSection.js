import ProjectCard from '../ProjectCard/ProjectCard';
import ScrollDownLeft from '../ScrollDownLeft/ScrollDownLeft';
import ScrollDownRight from '../ScrollDownRight/ScrollDownRight';

import { projectsData } from '../../constants';

import './workSection.css';

function WorkSection() {
  return (
    <section className='work-container' id='work'>
      <h2 className='work-title'>My Work</h2>
      <p className='work-description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus Page Maker including
        versions of Lorem Ipsum.
      </p>

      <div className='sites-container'>
        {projectsData.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageURL={project.imageURL}
            description={project.description}
            projectURL={project.projectURL}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
