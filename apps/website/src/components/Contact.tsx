import { clsx } from 'clsx';
import Image from 'next/image';
import { useContext } from 'react';

import GreyX from '../../public/grey_x.png';

import { ContactForm } from './ContactForm';
import { ContactUsImage } from './images';

import { GlobalContext } from '@/context';
import { poppins } from '@/utils/fonts';

const Contact = () => {
  const { open, toggle } = useContext(GlobalContext);

  return open ? (
    <div
      className={clsx(
        { ['invisible opacity-0']: !open, ['visible opacity-100']: open },
        'flex w-screen h-screen fixed top-0 left-0 items-center justify-center bg-grey-8 bg-opacity-50 z-50  transition-[opacity, visibility] duration-700'
      )}
    >
      <div className="flex w-11/12 md:w-2/3 max-w-screen-xl h-4/5 rounded-3xl bg-white relative flex-wrap">
        <div className="absolute right-8 top-5 w-5" onClick={toggle}>
          <Image src={GreyX} alt="Close modal icon" className="w-full aspect-square hover:opacity-70 cursor-pointer" />
        </div>
        <div className="w-full px-5 md:py-10 pt-12">
          <div className="w-full text-center">
            <div className={clsx(poppins.className, 'font-semibold text-3xl text-grey-11')}>Hey there!!</div>
            <div className={clsx(poppins.className, 'font-semibold text-3xl text-grey-11')}>
              Let's make something together
            </div>
          </div>
          <div className="w-full pt-10 text-center">
            <span className={clsx(poppins.className, 'font-normal text-lg text-grey-11')}>
              Want to get in touch? We'd love to hear from you.
            </span>
          </div>
        </div>
        <div className="w-1/2 text-left hidden md:block px-5 md:py-10">
          <div className="w-full h-full flex justify-center items-center">
            <ContactUsImage />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  ) : null;
};

export default Contact;
