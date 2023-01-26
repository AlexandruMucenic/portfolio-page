import ProjectCard from '../ProjectCard/ProjectCard';

import { projectsData } from '../../constants';

import './workSection.css';

function WorkSection() {
  return (
    <section className='work-container' id='work'>
      <h2 className='work-title'>My Work</h2>
      <p className='work-description'>
        This section is dedicated to the projects I've done by now.
        <br />
        Today-I-Learned and Forkify were developed during Udemy courses, the
        others I've made from scratch.
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
