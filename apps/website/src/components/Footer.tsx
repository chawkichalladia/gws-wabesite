import clsx from 'clsx';
import Image from 'next/image';

import Logo from '../../public/logo.png';

import { poppins } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer className="w-full absolute -ml-[5%]">
      <div className="bg-blue-alternative w-full flex justify-center items-center flex-col p-9 lg:px-24 gap-10">
        <div>
          <Image src={Logo} alt="Galactech Web Solutions logo" className="w-20 md:w-40 h-12 md:h-24" />
        </div>
        <div className="w-full flex flex-col xl:flex-row xl:justify-around gap-8">
          <div className="flex flex-col gap-1 items-center xl:items-start text-center">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Email</span>
            <span className='text-lg'>contact@galactechwebsolution.com</span>
          </div>
          <div className="flex flex-col gap-1 items-center xl:items-start text-center">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Phone</span>
            <span className='text-lg'>+216 26 561 334</span>
          </div>
          <div className="flex flex-col gap-1 items-center xl:items-start text-center">
            <span className={clsx(poppins.className, 'capitalize font-bold')}>Address</span>
            <span className='text-lg'>08 Rue Bizerte Ain Zaghouan Tunis - Tunisia</span>
          </div>
        </div>
        <hr className='border-grey-1 w-full' />
        <div className="container text-center text-xs xl:text-sm">Galactech Web Solutions © All rights reserved - 2025.</div>
      </div>
    </footer>
  );
};

export default Footer;
