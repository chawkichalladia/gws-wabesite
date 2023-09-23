import clsx from 'clsx';
import Image from 'next/image';

import DiamondImg from '../../public/diamond.svg';

import { orion_pax, poppins } from '@/utils/fonts';

const EarthBackground = () => {
  return (
    <div className="container -ml-[5%] h-screen absolute -z-10 earth-bg bg-center bg-no-repeat bg-cover md:bg-contain flex items-center justify-center text-center flex-col gap-y-7">
      <h3 className={clsx(orion_pax.className, 'text-base md:text-2xl capitalize')}>custom web-based solutions</h3>
      <h1 className={clsx(poppins.className, 'text-2xl md:text-5xl font-bold uppercase')}>
        <div className="flex justify-center">
          <Image src={DiamondImg} alt="Diamond svg" />
          <span>we design</span>
          <Image src={DiamondImg} alt="Diamond svg" />
        </div>
        <div className="flex justify-center">
          <Image src={DiamondImg} alt="Diamond svg" />
          <span>we code</span>
          <Image src={DiamondImg} alt="Diamond svg" />
        </div>
        <div className="flex justify-center">
          <Image src={DiamondImg} alt="Diamond svg" />
          <span>we implement</span>
          <Image src={DiamondImg} alt="Diamond svg" />
        </div>
      </h1>
      <p className="text-grey-4 text-sm px-3">
        We are a web development company that helps businesses develop functional and reliable web solutions.
      </p>
      <button className={clsx(poppins.className, 'py-2 md:py-4 w-48 md:w-60 bg-blue-primary rounded-lg')}>
        Get in touch
      </button>
      <div className='pt-14'>
        <h3 className={clsx(orion_pax.className, 'text-base md:text-2xl capitalize')}>it all Starts with an idea</h3>
      </div>
    </div>
  );
};

export default EarthBackground;
