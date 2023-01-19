import ScrollDownLeft from '../ScrollDownLeft/ScrollDownLeft';
import ScrollDownRight from '../ScrollDownRight/ScrollDownRight';

import './workSection.css';
import bookshop from '../../imgs/bookshop.png';
import today from '../../imgs/today-i-learned.png';
import traffic from '../../imgs/traffic-light.png';
import counter from '../../imgs/counter-app.png';

function WorkSection() {
  const width = 390;
  const height = 290;

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
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <div className='sites-container'>
        <div>
          <a
            href='https://amucenic-bookshop.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={bookshop}
              alt='bookshop project'
              width={width}
              height={height}
            />
          </a>
        </div>
        <div>
          <a
            href='https://amucenic-today-i-learned.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={today}
              alt='today i learned project'
              width={width}
              height={height}
            />
          </a>
        </div>
        <div>
          <a
            href='https://amucenic-trafficlight.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={traffic}
              alt='trafficlight project'
              width={width}
              height={height}
            />
          </a>
        </div>
        <div>
          <a
            href='https://amucenic-counter-app.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <img
              src={counter}
              alt='counter app project'
              width={width}
              height={height}
            />
          </a>
        </div>
      </div>
      <ScrollDownLeft />
      <ScrollDownRight />
    </section>
  );
}

export default WorkSection;
