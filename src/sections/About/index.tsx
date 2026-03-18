import AboutIntroduction from './AboutIntroduction';
import AboutHighlights from './AboutHighlights';
import AboutVision from './AboutVision';
import AboutExpertise from './AboutExpertise';
import AboutAccordion from './AboutAccordion';

const About = () => {
  return (
    <div className="w-full bg-white flex flex-col">
      <AboutIntroduction />
      <AboutHighlights />
      <AboutVision />
      <AboutExpertise />
      <AboutAccordion />
    </div>
  );
};

export default About;
