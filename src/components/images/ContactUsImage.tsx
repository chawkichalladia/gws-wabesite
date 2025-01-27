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
        src={GoldStarImage}
        alt="A gold star from a review"
        className={clsx('absolute w-[7.788%] h-[6.655%] left-[49.107%] top-[19.343%] z-10 opacity-0', {
          ['contact-first-star']: open,
        })}
      />
      <Image
        src={GoldStarImage}
        alt="A gold star from a review"
        className={clsx('absolute w-[7.788%] h-[6.655%] left-[58.879%] top-[19.343%] z-10 opacity-0', {
          ['contact-second-star']: open,
        })}
      />
      <Image
        src={GoldStarImage}
        alt="A gold star from a review"
        className={clsx('absolute w-[7.788%] h-[6.655%] left-[68.651%] top-[19.343%] z-10 opacity-0', {
          ['contact-third-star']: open,
        })}
      />
      <Image
        src={GoldStarImage}
        alt="A gold star from a review"
        className={clsx('absolute w-[7.788%] h-[6.655%] left-[78.423%] top-[19.343%] z-10 opacity-0', {
          ['contact-fourth-star']: open,
        })}
      />
      <Image
        src={GreyStarImage}
        alt="A grey star from a review"
        className={clsx('absolute w-[7.788%] h-[6.655%] left-[88.194%] top-[19.343%] opacity-0', {
          ['contact-fifth-star']: open,
        })}
      />
      <Image
        src={MessageImage}
        alt="Message"
        className={clsx('absolute w-0 h-0 right-0 bottom-0', {
          ['contact-image-message']: open,
        })}
      />
    </div>
  );
};
