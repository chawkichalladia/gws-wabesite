import clsx from 'clsx';
import Image from 'next/image';

import GreyX from '../../public/grey_x.png';

import { ContactUsImage } from './images';

import { poppins } from '@/utils/fonts';

interface ContactProps {
  open: boolean;
  onClose: () => void;
}

const Contact = ({ open, onClose }: ContactProps) => {
  return (
    <div
      className={clsx(
        { ['hidden']: !open },
        'flex w-screen h-screen fixed top-0 left-0 items-center justify-center bg-grey-8 bg-opacity-50 z-50'
      )}
    >
      <div className="flex w-11/12 md:w-2/3 max-w-screen-xl h-4/5 rounded-3xl bg-white relative flex-wrap">
        <div className="absolute right-8 top-5 w-5" onClick={onClose}>
          <Image src={GreyX} alt="Close modal icon" className="w-full aspect-square hover:opacity-70 cursor-pointer" />
        </div>
        <div className="w-full px-5 md:py-10 pt-12">
          <div className="w-full text-center md:text-left">
            <span className={clsx(poppins.className, 'font-semibold text-3xl text-grey-11')}>
              Hey there!!
            </span>
            <br className='md:display-none' />
            <span className={clsx(poppins.className, 'font-semibold text-3xl text-grey-11')}>
              Let's make something together
            </span>
          </div>
          <div className="w-full pt-10 text-center md:text-left">
            <span className={clsx(poppins.className, 'font-normal text-base text-grey-11')}>
              Want to get in touch? We'd love to hear from you.
            </span>
          </div>
        </div>
        <div className="w-1/2 text-left hidden md:block px-5 md:py-10">
          <div className="w-full h-full flex justify-center items-center">
            <ContactUsImage />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg outline-none border-none h-12 mb-4 text-base p-2 text-grey-6 bg-blue-primary bg-opacity-5"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg outline-none border-none h-12 mb-4 text-grey-6 bg-blue-primary bg-opacity-5 text-base p-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg outline-none border-none h-12 mb-4 text-grey-6 bg-blue-primary bg-opacity-5 text-base p-2"
            />
            <textarea
              placeholder="Message"
              className="w-full rounded-lg outline-none border-none h-32 mb-4 text-grey-6 bg-blue-primary bg-opacity-5 resize-none text-base p-2"
            ></textarea>
            <button className="w-full rounded-lg outline-none border-none h-10 font-medium text-xl text-white bg-blue-primary shadow-[0_4px_31px_0_rgba(0,62,221,0.3)]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
