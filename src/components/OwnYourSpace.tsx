import clsx from 'clsx';
import Image from 'next/image';

import DiagonalArrowIcon from '../../public/diagonal-arrow.svg';
import OwnYourSpaceImage from '../../public/own-your-space.png';

import { LetsTalkButton } from './Header';

import { orion_pax, poppins } from '@/utils/fonts';

const OwnYourSpace = () => {
  return (
    <div className="container pt-16">
      <div className="container flex items-center justify-center gap-3">
        <span className={clsx(orion_pax.className, 'uppercase')}>own your space</span>
        <Image src={DiagonalArrowIcon} alt="diagonal arrow icon" height={26} width={38} />
      </div>
      <div className="container flex justify-center text-center pt-10">
        <h2 className={clsx(poppins.className, 'text-2xl md:text-5xl font-bold')}>Build a web App that stands out</h2>
      </div>
      <Image src={OwnYourSpaceImage} alt="own your space image" className="pt-10 pb-14 md:pt-16 md:pb-20" />
      <p>
        We collaborate with you to develop user-friendly websites, cloud solutions, and tactical software applications,
        integrations, and software. Transform your ideas and requirements into solutions that will streamline your
        operations so you can spend more time interacting with and attracting more customers.
      </p>
      <div className="container flex items-center justify-center pt-14">
        <LetsTalkButton />
      </div>
    </div>
  );
};

export default OwnYourSpace;
