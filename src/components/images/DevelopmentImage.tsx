import clsx from 'clsx';
import Image from 'next/image';

import CircleImage from '../../../public/development/circle.png';
import LeftBoxImage from '../../../public/development/left_box.png';
import RightBoxImage from '../../../public/development/right_box.png';
import SittingManImage from '../../../public/development/sitting_man.png';
import XImage from '../../../public/development/x.png';

import { useViewPortIntersectionObserver } from '@/hooks';

export const DevelopmentImage = () => {
  const { intersected, ref } = useViewPortIntersectionObserver({ threshold: 0.6 });

  return (
    <div className="w-full max-w-[462px] relative aspect-[462/438]" ref={ref}>
      <Image
        src={XImage}
        alt="X icon image"
        className={clsx('absolute w-0 h-[5.25%] left-[49.78%] top-[1.83%]', { ['development-x']: intersected })}
      />
      <Image
        src={LeftBoxImage}
        alt="TV image"
        className={clsx("absolute w-[40.91%] h-[34.25%] left-0 top-[10.73%] z-10 opacity-0", { ['development-left-box']: intersected })}
      />
      <Image
        src={SittingManImage}
        alt="A man sitting with a laptop on his lap"
        className={clsx("absolute w-[49.35%] h-[81.51%] left-[19.48%] top-[13.39%] opacity-0 z-10", { ['development-person']: intersected })}
      />
      <Image
        src={RightBoxImage}
        alt="Abstract image of a TV"
        className={clsx("absolute w-[29.87%] h-[21.46%] right-0 top-[39.04%] opacity-0", { ['development-right-box']: intersected })}
      />
      <Image
        src={CircleImage}
        alt="Circle icon image"
        className={clsx("absolute w-[3.68%] h-[3.88%] left-[83.77%] top-[64.61%] opacity-0", { ['development-circle']: intersected })}
      />
    </div>
  );
};
