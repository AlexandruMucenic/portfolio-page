import './projectCard.css';

function ProjectCard({ title, imageURL, description, projectURL }) {
  return (
    <div className='card-wrapper'>
      <div className='card-top'>
        <img src={imageURL} alt='bookshop project' width={390} height={290} />
      </div>
      <div className='card-bottom'>
        <span className='top-text'>{title}</span>
        <br />
        <span className='bottom-text'>{description}</span>
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
