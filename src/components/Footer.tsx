import clsx from 'clsx';
import Image from 'next/image';

import Logo from '../../public/logo.png';

import { poppins } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer className="w-full absolute -m-[5%] pt-40">
      <div className="bg-blue-alternative w-full flex justify-center items-center flex-col p-9 md:px-24 gap-10">
        <div>
          <Image src={Logo} alt="Galactech Web Solutions logo" className="w-20 md:w-40 h-12 md:h-24" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Address</span>
            <span>08 Rue Bizerte Ain Zaghouan Tunis - Tunisia</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Email</span>
            <span>contact@galactechwebsolution.com</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Phone</span>
            <span>+216 26 561 334</span>
          </div>
        </div>
        <div className="container text-center text-xs">Galactech Web Solutions © All rights reserved - 2023.</div>
      </div>
    </footer>
  );
};

export default Footer;
