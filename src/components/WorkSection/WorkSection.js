import { workProjectsData, personalProjectsData } from '../../constants';
import ProjectCard from '../ProjectCard/ProjectCard';

import './workSection.css';

function WorkSection() {
  return (
    <section className="work-container" id="work">
      <h2 className="work-title">My Work</h2>

      <p className="work-description">
        Highlighted below are the key projects I have contributed to throughout
        my professional career.
      </p>
      <div className="sites-container">
        {workProjectsData.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageURL={project.imageURL}
            description={project.description}
            projectURL={project.projectURL}
          />
        ))}
      </div>
      <p className="work-description">
        Displayed here is a curated selection of personal projects I have
        developed to date.
      </p>

      <div className="sites-container">
        {personalProjectsData.map(project => (
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
