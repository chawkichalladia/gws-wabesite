import MedalIcon from '../../public/medal.svg';

import SectionHead from './SectionHead';
import { OurExpertiseImage1, OurExpertiseImage2 } from './images';

const OurExpertise = () => {
  return (
    <div className="w-full">
      <SectionHead image={MedalIcon} label="our expertise" title="web apps and web solutions" />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="py-20 md:py-32 w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
          <OurExpertiseImage1 />
        </div>
        <p>
          Galatech offers support to clients at every stage of business or software development, from early-stage
          startups to large corporations with an eye toward expansion and optimization, regardless of the sector in
          which they specialize.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="py-20 md:py-32 w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
          <OurExpertiseImage2 />
        </div>
        <p>
          Together, our designers and developers make sure that all projects' creative and technical components are
          cohesive and appropriate for your company's needs.
        </p>
      </div>
    </div>
  );
};

export default OurExpertise;
