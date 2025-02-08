import clsx from 'clsx';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { poppins } from '@/utils/fonts';

interface SectionHeadProps {
  title: string;
  label: string;
  image: StaticImport;
  negativeMargin?: boolean;
}

const SectionHead = ({ image, label, title, negativeMargin = false }: SectionHeadProps) => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <div className={clsx('w-[5px] h-[180px] triangle-gradient', { '-mt-[180px]': negativeMargin })}></div>
        <div className="rounded-full w-[54px] h-[54px] icon-container flex justify-center items-center">
          <Image src={image} alt="Cloud document icon" />
        </div>
        <span className={clsx(poppins.className, 'font-bold lg:text-2xl uppercase')}>{label}</span>
      </div>
      <div className="w-full flex justify-center text-center pt-11 lg:pt-20">
        <span className={clsx(poppins.className, 'font-bold text-2xl lg:text-5xl capitalize')}>{title}</span>
      </div>
    </>
  );
};

export default SectionHead;
