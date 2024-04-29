import clsx from 'clsx';
import Image from 'next/image';

import MedalIcon from '../../public/medal.svg';
import WebAppImage2 from '../../public/web-app-2.png';

import SectionHead from './SectionHead';
import { OurExpertiseImage1 } from './images';

const OurExpertise = () => {
  return (
    <div className="w-full">
      <SectionHead image={MedalIcon} label="our expertise" title="web apps and web solutions" />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="py-20 md:py-32 md:w-4/5 lg:w-2/3 xl:w-1/2">
          <OurExpertiseImage1 />
        </div>
        <p>
          Galatech offers support to clients at every stage of business or software development, from early-stage
          startups to large corporations with an eye toward expansion and optimization, regardless of the sector in
          which they specialize.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Image src={WebAppImage2} alt="web solutions image" className="py-20 md:py-32 md:w-4/5 lg:w-2/3 xl:w-1/2" />
        <p>
          Together, our designers and developers make sure that all projects' creative and technical components are
          cohesive and appropriate for your company's needs.
        </p>
      </div>
    </div>
  );
};

export default OurExpertise;
