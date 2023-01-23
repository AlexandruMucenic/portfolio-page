import './projectCard.css';

function ProjectCard({ title, imageURL, description, projectURL }) {
  return (
    <div className='card-wrapper'>
      <div className='card-top'>
        <img className='project-img' src={imageURL} alt='bookshop project' />
      </div>
      <div className='card-bottom'>
        <h4 className='top-text'>{title}</h4>
        <br />
        <p className='bottom-text'>{description}</p>
        <br />
        <a
          className='button'
          href={projectURL}
          target='_blank'
          rel='noreferrer'
        >
          See project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
