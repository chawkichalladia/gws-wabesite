import clsx from 'clsx';
import Image from 'next/image';

import GalaxyGif from '../../public/galaxy.jpg';

import { poppins } from '@/utils/fonts';

const InGalactech = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-28">
        <div className="w-full flex justify-center text-center">
          <h2 className={clsx(poppins.className, 'uppercase text-2xl lg:text-5xl font-bold')}>
            “IN GALACTECH, CREATIVITY HAS NO LIMITS”
          </h2>
        </div>
        <Image src={GalaxyGif} alt="galaxy gif" className="py-14 xl:w-[900px] xl:hh-[600px]" />
        <p>
          With our extensive, experienced team that spans across a variety of industries, we apply the latest thinking,
          tools, and technology to whatever we're developing, from traditional web design strategies and creative
          campaigns to website development and management.
        </p>
      </div>
    </>
  );
};

export default InGalactech;
