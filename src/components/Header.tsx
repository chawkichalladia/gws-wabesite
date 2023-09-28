import Image from 'next/image';

import ArrowCircleRight from '../../public/arrow-circle-right.svg';
import Logo from '../../public/logo.png';

import { poppins } from '@/utils/fonts';

export const LetsTalkButton = () => {
  return (
    <button className="bg-white text-black px-3 md:px-6 py-2 md:py-4 text-md md:text-lg rounded-full flex align-items-center gap-2.5 self-center">
      <div className={poppins.className}>Let's talk</div>
      <div className="flex align-items-center">
        <Image src={ArrowCircleRight} alt="Round right caret" />
      </div>
    </button>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between align-items-center absolute container max-w-[90%]">
      <div>
        <Image src={Logo} alt="Galactech Web Solutions logo" className="w-20 md:w-40 h-12 md:h-24" />
      </div>
      <LetsTalkButton />
    </div>
  );
};

export default Header;
