import HeaderSection from '../HeaderSection/HeaderSection';
import WorkSection from '../WorkSection/WorkSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import ContactSection from '../ContactSection/ContactSection';
import Button from '../Button/Button';

import './mainPage.css';

function Page() {
  return (
    <main className='main-container'>
      <span id='htmlUp' />
      <HeaderSection>
        <Button text='Contact Me!' src='#contact' />
      </HeaderSection>
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <span id='htmlDown' />
    </main>
  );
}
export default Page;
