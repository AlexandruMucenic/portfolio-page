import Header from '../Header/Header';
import PageSection from '../PageSection/PageSection';
import Button from '../Button/Button';
import './mainPage.css';

function Page() {
  const description = `Web development enthusiast, at the beginning of his carrer. Welcome on my presentation page!`;

  return (
    <main className='main-container'>
      <Header title={'Hi, I am Alex'} description={description}>
        <Button text='Contact Me!' />
      </Header>

      <PageSection title='My Work' description={description}>
        <div> Child Component </div>
      </PageSection>

      <PageSection title='My Skills' description='description'>
        <div> Child Component </div>
      </PageSection>

      <PageSection title='Contact' description='description'>
        <div> Child Component </div>
        <button>Send Message</button>
      </PageSection>
    </main>
  );
}
export default Page;
