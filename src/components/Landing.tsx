import clsx from 'clsx';
import Image from 'next/image';

import DiamondImg from '../../public/diamond.svg';

import { orion_pax, poppins } from '@/utils/fonts';

const Landing = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center text-center flex-col gap-y-7">
        <h3 className={clsx(orion_pax.className, 'lg:text-2xl capitalize')}>custom web-based solutions</h3>
        <h1
          className={clsx(
            poppins.className,
            'text-2xl lg:text-5xl font-bold uppercase flex flex-col lg:flex-row lg:gap-2'
          )}
        >
          <div className="flex justify-center lg:gap-2">
            <Image src={DiamondImg} alt="Diamond svg" className="lg:hidden" />
            <span>we design</span>
            <Image src={DiamondImg} alt="Diamond svg" />
          </div>
          <div className="flex justify-center lg:gap-2">
            <Image src={DiamondImg} alt="Diamond svg" className="lg:hidden" />
            <span>we code</span>
            <Image src={DiamondImg} alt="Diamond svg" />
          </div>
          <div className="flex justify-center lg:gap-2">
            <Image src={DiamondImg} alt="Diamond svg" className="lg:hidden" />
            <span>we implement</span>
            <Image src={DiamondImg} alt="Diamond svg" className="lg:hidden" />
          </div>
        </h1>
        <p className="text-sm lg:text-xl px-3 lg:pb-10">
          We are a web development company that helps businesses develop functional and reliable web solutions.
        </p>
        <button className={clsx(poppins.className, 'py-2 lg:py-4 w-48 lg:w-60 bg-blue-primary rounded-lg')}>
          Get in touch
        </button>
      </div>
      <div className="pt-28 lg:pt-40">
        <h3 className={clsx(orion_pax.className, 'lg:text-2xl capitalize')}>it all Starts with an idea</h3>
      </div>
    </div>
  );
};

export default Landing;
