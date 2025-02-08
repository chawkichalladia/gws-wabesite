import clsx from 'clsx';
import Image from 'next/image';

import Desktop from '../../../public/our_expertise/desktop.png';
import Laptop from '../../../public/our_expertise/laptop.png';
import Person from '../../../public/our_expertise/person.png';
import Table from '../../../public/our_expertise/table.png';

import { useViewPortIntersectionObserver } from '@/hooks';

export const OurExpertiseImage2 = () => {
  const { intersected, ref } = useViewPortIntersectionObserver({ threshold: 0.6 });

  return (
    <div className="w-full max-w-[1500px] relative aspect-[1124/419]" ref={ref}>
      <Image
        src={Desktop}
        alt="A desktop computer with other icons"
        className={clsx('absolute w-[20.552%] h-[48.926%] left-1/2 top-full opacity-0 z-20', {
          ['our-expertise-second-image-desktop']: intersected,
        })}
      />
      <Image
        src={Laptop}
        alt="A laptop with software windows open"
        className={clsx('absolute w-[19.929%] h-[42.005%] left-1/2 top-full opacity-0 z-20', {
          ['our-expertise-second-image-laptop']: intersected,
        })}
      />
      <Image
        src={Person}
        alt="A sitting person with a laptop on their lap"
        className={clsx('absolute w-0 h-0 left-1/2 bottom-1/2 z-20', {
          ['our-expertise-second-image-person']: intersected,
        })}
      />
      <Image
        src={Table}
        alt="A white table"
        className={clsx('absolute w-0 h-0 left-1/2 bottom-1/2 z-10', {
          ['our-expertise-second-image-table']: intersected,
        })}
      />
    </div>
  );
};
