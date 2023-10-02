import clsx from 'clsx';
import Image from 'next/image';

import DigitalTransformationImage from '../../public/digital-transformation.png';
import MessageIcon from '../../public/message-icon.svg';

import SectionHead from './SectionHead';

import { poppins } from '@/utils/fonts';

const Coding = () => {
  return (
    <div className="w-full">
      <SectionHead image={MessageIcon} label="coding" title="Digital transformation" />
      <div className="w-full flex flex-col items-center justify-center">
        <p className="pt-11">
          Galatech offers support to clients at every stage of business or software development, from early-stage
          startups to large corporations with an eye toward expansion and optimization, regardless of the sector in
          which they specialize.
        </p>
        <Image
          src={DigitalTransformationImage}
          alt="Digital transformation image"
          className="py-24 lg:py-40 md:w-4/5 lg:w-2/3 xl:w-1/2"
        />
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
