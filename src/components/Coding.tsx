import clsx from 'clsx';
import Image from 'next/image';

import DigitalTransformationImage from '../../public/digital-transformation.png';
import MessageIcon from '../../public/message-icon.svg';

import SectionHead from './SectionHead';

import { poppins } from '@/utils/fonts';

const Coding = () => {
  return (
    <div className="container">
      <SectionHead image={MessageIcon} label="coding" title="Digital transformation" />
      <div className="container flex flex-col items-center justify-center">
        <p className="pt-11">
          Galatech offers support to clients at every stage of business or software development, from early-stage
          startups to large corporations with an eye toward expansion and optimization, regardless of the sector in
          which they specialize.
        </p>
        <Image src={DigitalTransformationImage} alt="Digital transformation image" className='py-24 md:py-40' />
      </div>
      <div className="container flex flex-col items-center justify-center">
        <div className='container flex justify-center text-center'>
          <h2 className={clsx(poppins.className, 'text-2xl md:text-5xl font-bold')}>
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
