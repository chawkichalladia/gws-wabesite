import clsx from 'clsx';
import Image from 'next/image';
import { useContext } from 'react';

import GirlWithLaptopAndPopupImage from '../../../public/contact_us/girl_with_laptop_and_popup.png';
import GoldStarImage from '../../../public/contact_us/gold_star.png';
import GreyStarImage from '../../../public/contact_us/grey_star.png';
import MessageImage from '../../../public/contact_us/message.png';

import { GlobalContext } from '@/context';

export const ContactUsImage = () => {
  const { open } = useContext(GlobalContext);

  return (
    <div className="w-full max-w-[402px] relative aspect-[2016/2254]">
      <Image
        src={GirlWithLaptopAndPopupImage}
        alt="A girl carrying a laptop and leaning on a popup"
        className={clsx('absolute w-0 h-0 left-0 bottom-0', { ['contact-image-person']: open })}
      />
      <Image
        src={GreyStarImage}
        alt="A grey star from a review"
        className="absolute w-[7.788%] h-[6.655%] left-[88.194%] top-[19.343%]"
      />
      <Image
        src={MessageImage}
        alt="Message"
        className="absolute w-[36.012%] h-[23.824%] left-[63.393%] top-[56.921%]"
      />
    </div>
  );
};
