import clsx from 'clsx';
import Image from 'next/image';

import DiagonalArrowIcon from '../../public/diagonal-arrow.svg';
import OwnYourSpaceImage from '../../public/own-your-space.png';

import { LetsTalkButton } from './Header';

import { h1 } from '@/utils/commonClasses';
import { orion_pax, poppins } from '@/utils/fonts';

const OwnYourSpace = () => {
  return (
    <div className="w-full pt-16 lg:pt-32">
      <div className="w-full flex items-center justify-center gap-3">
        <span className={clsx(orion_pax.className, 'uppercase')}>own your space</span>
        <Image src={DiagonalArrowIcon} alt="diagonal arrow icon" height={26} width={38} />
      </div>
      <div className="w-full flex justify-center text-center pt-10 lg:pt-20">
        <h1 className={clsx(poppins.className, h1)}>
          Build a web App that stands out
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <Image src={OwnYourSpaceImage} alt="own your space image" className="pt-10 pb-14 lg:pt-16 lg:pb-20" />
      </div>
      <p>
        We collaborate with you to develop user-friendly websites, cloud solutions, and tactical software applications,
        integrations, and software. Transform your ideas and requirements into solutions that will streamline your
        operations so you can spend more time interacting with and attracting more customers.
      </p>
      <div className="w-full flex items-center justify-center pt-14">
        <LetsTalkButton />
      </div>
    </div>
  );
};

export default OwnYourSpace;
