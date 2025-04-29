import { clsx } from 'clsx';

import MessageIcon from '../../public/message-icon.svg';

import SectionHead from './SectionHead';
import { DigitalTransformationImage } from './images';

import { poppins } from '@/utils/fonts';

const Coding = () => {
  return (
    <div className="w-full">
      <SectionHead image={MessageIcon} label="coding" title="Digital transformation" />
      <div className="w-full flex flex-col items-center justify-center">
        <p className="pt-11">
          <b>
            <i>GALACTECH WEB SOLUTIONS</i>
          </b>{' '}
          offers support to clients at every stage of the software development process, From defining the specifications
          to maintenance and support. We also offer our services to companies of all sizes, from early-stage startups to
          large corporations with an eye toward expansion and optimization, regardless of the sector in which they
          specialize.
        </p>
        <div className="py-24 lg:py-40 w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
          <DigitalTransformationImage />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-center text-center">
          <h2 className={clsx(poppins.className, 'text-2xl lg:text-5xl font-bold')}>
            Everything your business needs to stand out
          </h2>
        </div>
        <p className="pt-11 pb-20">
          We collaborate with you to develop user-friendly websites, cloud solutions, and tactical software
          applications, integrations, and software. Transform your ideas and requirements into solutions that will
          streamline your operations so you can spend more time interacting with and attracting more customers.
        </p>
      </div>
    </div>
  );
};

export default Coding;
