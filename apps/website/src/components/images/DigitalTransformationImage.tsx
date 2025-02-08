import { clsx } from 'clsx';
import Image from 'next/image';

import BigCircle from '../../../public/digital_transformation/big_circle.png';
import BigSphere from '../../../public/digital_transformation/big_sphere.png';
import Person from '../../../public/digital_transformation/person.png';
import Planet from '../../../public/digital_transformation/planet.png';
import Rocket from '../../../public/digital_transformation/rocket.png';
import SmallCircle from '../../../public/digital_transformation/small_circle.png';

import { useViewPortIntersectionObserver } from '@/hooks';

export const DigitalTransformationImage = () => {
  const { intersected, ref } = useViewPortIntersectionObserver({ threshold: 0.6 });

  return (
    <div className="w-full max-w-[1500px] relative aspect-[2924/2162]" ref={ref}>
      <Image
        src={BigCircle}
        alt="Circle image"
        className={clsx('absolute w-[2.29%] h-[3.23%] left-[62.31%] top-0 opacity-0', {
          ['digital-transformation-big-circle']: intersected,
        })}
      />
      <Image
        src={BigCircle}
        alt="Circle image"
        className={clsx('absolute w-[2.29%] h-[3.23%] left-[72.77%] top-[13.44%] opacity-0', {
          ['digital-transformation-big-circle']: intersected,
        })}
      />
      <Image
        src={SmallCircle}
        alt="Circle image"
        className={clsx('absolute w-[1.06%] h-[1.43%] left-[9.33%] top-[22.32%] z-10 opacity-0', {
          ['digital-transformation-small-circle']: intersected,
        })}
      />
      <Image
        src={SmallCircle}
        alt="Circle image"
        className={clsx('absolute w-[1.06%] h-[1.43%] left-[26.37%] top-[18.39%] z-10 opacity-0', {
          ['digital-transformation-small-circle']: intersected,
        })}
      />
      <Image
        src={SmallCircle}
        alt="Circle image"
        className={clsx('absolute w-[1.06%] h-[1.43%] left-[38.34%] top-[69.54%] z-10 opacity-0', {
          ['digital-transformation-small-circle']: intersected,
        })}
      />
      <Image
        src={SmallCircle}
        alt="Circle image"
        className={clsx('absolute w-[1.06%] h-[1.43%] left-[71.85%] top-[56.79%] z-10 opacity-0', {
          ['digital-transformation-small-circle']: intersected,
        })}
      />
      <Image
        src={BigSphere}
        alt="Circle image"
        className={clsx('absolute w-[27.33%] h-[36.88%] left-[72.64%] top-[15.52%] z-10  opacity-0', {
          ['digital-transformation-sphere']: intersected,
        })}
      />
      <Image
        src={Rocket}
        alt="Rocket image"
        className={clsx('absolute w-[35.47%] h-[35.35%] left-0 top-[26.85%] z-10 opacity-0', {
          ['digital-transformation-rocket']: intersected,
        })}
      />
      <Image
        src={Person}
        alt="Image of a person in a flying position with VR headset on"
        className={clsx('absolute w-[73.77%] h-[93.07%] left-[17.61%] bottom-0 z-10 opacity-0', {
          ['digital-transformation-person']: intersected,
        })}
      />
      <Image
        src={Planet}
        alt="Image of a planet with rings (looks like Saturn)"
        className={clsx('absolute w-[8.21%] h-[8.09%] left-[38.27%] top-[53.51%] z-10 opacity-0', {
          ['digital-transformation-planet']: intersected,
        })}
      />
    </div>
  );
};
