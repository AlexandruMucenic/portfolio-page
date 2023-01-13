import './pageSection.css';

function PageSection({ title, description, children }) {
  return (
    <section className='section-container'>
      <h2 className='section-title'> {title}</h2>
      <p className='section-description'>{description}</p>
      <div className='section-child-container'> {children} </div>
    </section>
  );
}

export default PageSection;
