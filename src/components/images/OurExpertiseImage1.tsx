import clsx from 'clsx';
import Image from 'next/image';

import Flag from '../../../public/our_expertise/flag.png';
import Lightbulb from '../../../public/our_expertise/lightbulb.png';
import Nodes from '../../../public/our_expertise/nodes.png';
import Person from '../../../public/our_expertise/standing_person.png';

import { useViewPortIntersectionObserver } from '@/hooks';

export const OurExpertiseImage1 = () => {
  const { intersected, ref } = useViewPortIntersectionObserver({ threshold: 0.6 });

  return (
    <div className="w-full max-w-[1500px] relative aspect-[2360/1799]" ref={ref}>
      <Image
        src={Flag}
        alt="Flag image"
        className={clsx('absolute w-[13.7%] h-[16.7%] left-[82.5%] top-[23.5%] opacity-0', { ['our-expertise-first-image-flag']: intersected })}
      />
      <Image
        src={Lightbulb}
        alt="Lightbulb image"
        className={clsx('absolute w-[20.9%] h-[26%] left-[29.4%] top-[5%] opacity-0', { ['our-expertise-first-image-lightbulb']: intersected })}
      />
      <Image
        src={Nodes}
        alt="Linked circles image"
        className={clsx('absolute w-0 h-[11.7%] left-1/2 top-[34.7%] z-10', { ['our-expertise-first-image-nodes']: intersected })}
      />
      <Image
        src={Person}
        alt="Image of a person standing with is hand reached out"
        className={clsx('absolute w-[40.4%] h-0 left-[35.3%] bottom-[0.2%] z-10', { ['our-expertise-first-image-person']: intersected })}
      />
    </div>
  );
};
