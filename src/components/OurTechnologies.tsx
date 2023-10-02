import clsx from 'clsx';

import { poppins } from '@/utils/fonts';

const TECHNOLOGIES = [
  'React',
  'TypeScript',
  'JavScript',
  'Node.js',
  'MUI',
  'Antd',
  'Redux',
  'Zustand',
  'React-Query',
  'Nextjs',
  'Express',
  'AWS',
  'AWS Amplify',
  'AWS Lambda',
  'AWS Dynamodb',
  'AWS EventBridge',
  'Micro services',
  'Test Driven Development',
  'CSS',
];

const OurTechnologies = () => {
  return (
    <div className="w-full pb-40">
      <div className="w-full flex justify-center text-center py-20">
        <h2 className={clsx(poppins.className, 'text-2xl lg:text-5xl font-bold')}>
          Technologies we use
        </h2>
      </div>
      <div className="flex gap-5 -ml-[5%] w-[112%] overflow-hidden">
        {TECHNOLOGIES.map((technology) => (
          <div
            key={technology}
            className="technology-tag bg-contain bg-clip-text text-[transparent] whitespace-nowrap text-base lg:text-2xl font-bold border-2 border-blue-primary rounded-full py-2 px-6"
          >
            {technology}
          </div>
        ))}
      </div>
      <div className="flex gap-5 pt-6 -ml-[5%] w-[112%] overflow-hidden">
        {TECHNOLOGIES.map((technology) => (
          <div
            key={technology}
            className="technology-tag bg-contain bg-clip-text text-[transparent] whitespace-nowrap text-base lg:text-2xl font-bold border-2 border-blue-primary rounded-full py-2 px-6"
          >
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTechnologies;
