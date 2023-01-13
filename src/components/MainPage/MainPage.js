import PageSection from '../PageSection/PageSection';
import './mainPage.css';

function Page() {
  return (
    <main className='main-container'>
      <PageSection title='about' description='description'>
        <button>Contact me</button>
      </PageSection>

      <PageSection title='work' description='description'>
        <div> Child Component </div>
      </PageSection>

      <PageSection title='skills' description='description'>
        <div> Child Component </div>
      </PageSection>

      <PageSection title='contact' description='description'>
        <div> Child Component </div>
        <button>Send Message</button>
      </PageSection>
    </main>
  );
}
export default Page;
