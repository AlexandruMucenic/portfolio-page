import ProjectCard from '../ProjectCard/ProjectCard';

import { projectsData } from '../../constants';

import './workSection.css';

function WorkSection() {
  return (
    <section className='work-container' id='work'>
      <h2 className='work-title'>My Work</h2>
      <p className='work-description'>
        Below, you can find the projects that I've made so far, with them I've
        tried to sum up everything that I have learned.
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
