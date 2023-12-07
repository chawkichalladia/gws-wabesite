import Image from 'next/image';

import CircleImage from '../../../public/development/circle.png';
import LeftBoxImage from '../../../public/development/left_box.png';
import RightBoxImage from '../../../public/development/right_box.png';
import SittingManImage from '../../../public/development/sitting_man.png';
import XImage from '../../../public/development/x.png';

export const DevelopmentImage = () => {
  return (
    <div className="w-full max-w-[462px] relative aspect-[462/438]">
      <Image src={XImage} alt="X icon image" className="absolute w-[4.76%] h-[5.25%] left-[49.78%] top-[1.83%]" />
      <Image src={LeftBoxImage} alt="TV image" className="absolute w-[40.91%] h-[34.25%] left-0 top-[10.73%] z-10" />
      <Image
        src={SittingManImage}
        alt="A man sitting with a laptop on his lap"
        className="absolute w-[49.35%] h-[81.51%] left-[19.48%] top-[13.39%]"
      />
      <Image
        src={RightBoxImage}
        alt="Abstract image of a TV"
        className="absolute w-[29.87%] h-[21.46%] right-0 top-[39.04%]"
      />
      <Image
        src={CircleImage}
        alt="Circle icon image"
        className="absolute w-[3.68%] h-[3.88%] left-[83.77%] top-[64.61%]"
      />
    </div>
  );
};
