import clsx from 'clsx';
import Image from 'next/image';

import DocumentCloudIcon from '../../public/document-cloud.svg';
import SquareNetworkIcon from '../../public/square-network.svg';

import SectionHead from './SectionHead';
import { DevelopmentImage, NewBuildImage } from './images';

import { poppins } from '@/utils/fonts';

const Services = () => {
  return (
    <div className="w-full">
      <SectionHead image={DocumentCloudIcon} label="services" title="we build everything from scratch" negativeMargin />
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-20">
        <div className="w-full">
          <div className="w-full flex items-center justify-center pt-11 md:pt-20">
            <div className="w-12 h-12 rounded-lg border-blue-secondary border flex justify-center items-center">
              <Image src={SquareNetworkIcon} alt="Square network icon" />
            </div>
            <span className={clsx(poppins.className, 'pl-3 lg:text-2xl font-bold capitalize')}>new builds</span>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="pt-11 pb-20">
              We offer custom web development services to deliver functional and new websites of any size, type, shape,
              and complexity.
            </p>
            <NewBuildImage />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-center md:pt-20">
            <div className="w-12 h-12 rounded-lg border-blue-secondary border flex justify-center items-center">
              <Image src={SquareNetworkIcon} alt="Square network icon" />
            </div>
            <span className={clsx(poppins.className, 'pl-3 lg:text-2xl font-bold capitalize')}>development</span>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="pt-11 pb-20">
              We audit, standardize, and migrate your existing site while delivering a wide range of projects and
              functionalities on your existing website.
            </p>
            <DevelopmentImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
