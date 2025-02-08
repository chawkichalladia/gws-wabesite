import Image from 'next/image';
import { useContext, useState } from 'react';

import ArrowCircleRight from '../../public/arrow-circle-right.svg';
import Logo from '../../public/logo.png';

import Contact from './Contact';

import { GlobalContext } from '@/context';
import { poppins } from '@/utils/fonts';

export const LetsTalkButton = () => {
  const { toggle } = useContext(GlobalContext);

  return (
    <>
      <button
        onClick={toggle}
        className="bg-white text-black px-3 md:px-6 py-2 md:py-4 text-md md:text-lg rounded-full flex items-center gap-2.5 self-center hover:bg-grey-3"
      >
        <div className={poppins.className}>Let's talk</div>
        <div className="flex align-items-center">
          <Image src={ArrowCircleRight} alt="Round right caret" />
        </div>
      </button>
      <Contact />
    </>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between align-items-center absolute w-full max-w-[90%] pt-8 md:pt-16 ">
      <div>
        <Image src={Logo} alt="Galactech Web Solutions logo" className="w-20 md:w-40 h-12 md:h-24" />
      </div>
      <LetsTalkButton />
    </header>
  );
};

export default Header;
