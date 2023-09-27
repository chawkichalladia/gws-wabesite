import clsx from 'clsx';
import Image from 'next/image';

import DevelopmentImage from '../../public/development-image.png';
import DocumentCloudIcon from '../../public/document-cloud.svg';
import NewBuildImage from '../../public/new-build-image.png';
import SquareNetworkIcon from '../../public/square-network.svg';

import LinearUpArrow from './LinearUpArrow';

import { poppins } from '@/utils/fonts';

const Services = () => {
  return (
    <div className="container">
      <div className="container flex flex-col items-center gap-4">
        <LinearUpArrow />
        <div className="rounded-full w-[54px] h-[54px] icon-container flex justify-center items-center">
          <Image src={DocumentCloudIcon} alt="Cloud document icon" />
        </div>
        <span className={clsx(poppins.className, 'font-bold text-base md:text-2xl uppercase')}>services</span>
      </div>
      <div className="container flex justify-center text-center py-11 md:py-20">
        <span className={clsx(poppins.className, 'font-bold text-2xl md:text-5xl capitalize')}>
          we build everything from scratch
        </span>
      </div>
      <div className="container grid grid-cols-1 gap-20">
        <div className="container">
          <div className="container flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg border-blue-secondary border flex justify-center items-center">
              <Image src={SquareNetworkIcon} alt="Square network icon" />
            </div>
            <span className={clsx(poppins.className, 'pl-3 text-base md:text-2xl font-bold capitalize')}>
              new builds
            </span>
          </div>
          <div className="container flex flex-col items-center justify-center">
            <p className="pt-11 pb-20">
              We offer custom web development services to deliver functional and new websites of any size, type, shape,
              and complexity.
            </p>
            <Image src={NewBuildImage} alt="New Builds image" />
          </div>
        </div>
        <div className="container">
          <div className="container flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg border-blue-secondary border flex justify-center items-center">
              <Image src={SquareNetworkIcon} alt="Square network icon" />
            </div>
            <span className={clsx(poppins.className, 'pl-3 text-base md:text-2xl font-bold capitalize')}>
              development
            </span>
          </div>
          <div className="container flex flex-col items-center justify-center">
            <p className="pt-11 pb-20">
              We audit, standardize, and migrate your existing site while delivering a wide range of projects and
              functionalities on your existing website.
            </p>
            <Image src={DevelopmentImage} alt="Development image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
