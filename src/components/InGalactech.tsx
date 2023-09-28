import clsx from 'clsx';
import Image from 'next/image';

import GalaxyGif from '../../public/galaxy.gif';

import { poppins } from '@/utils/fonts';

const InGalactech = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center pt-28">
        <div className="container flex justify-center text-center">
          <h2 className={clsx(poppins.className, 'uppercase text-2xl md:text-5xl font-bold')}>
            “IN GALACTECH, CREATIVITY HAS NO LIMITS”
          </h2>
        </div>
        <div className="container py-14">
          <Image src={GalaxyGif} alt="galaxy gif" />
        </div>
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
