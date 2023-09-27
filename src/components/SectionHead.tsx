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
      <div className="container flex flex-col items-center gap-4">
        <div className={clsx('w-[5px] h-[180px] triangle-gradient', { '-mt-[50%]': negativeMargin })}></div>
        <div className="rounded-full w-[54px] h-[54px] icon-container flex justify-center items-center">
          <Image src={image} alt="Cloud document icon" />
        </div>
        <span className={clsx(poppins.className, 'font-bold text-base md:text-2xl uppercase')}>{label}</span>
      </div>
      <div className="container flex justify-center text-center py-11 md:py-20">
        <span className={clsx(poppins.className, 'font-bold text-2xl md:text-5xl capitalize')}>{title}</span>
      </div>
    </>
  );
};

export default SectionHead;
