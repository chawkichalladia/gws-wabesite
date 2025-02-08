import { clsx } from 'clsx';

import { poppins } from '@/utils/fonts';

const TECHNOLOGIES = [
  'React',
  'JavScript',
  'AWS Amplify',
  'Material UI',
  'Nextjs',
  'Express',
  'AWS',
  'Test Driven Development',
  'CSS',
  "Redux",
  "React Router",
  "Gatsby",
  "styled-components",
  "Ant Design",
  "React Query",
  "GraphQL",
  "Apollo Client",
  "Webpack",
  "Babel",
  "ESLint",
  "Jest",
  "React Testing Library",
  "TypeScript",
  "Sass",
  "Node.js",
  'AWS Lambda',
  "Axios",
  "Firebase",
  "Socket.io",
  "pm2",
  "Parcel",
  'AWS EventBridge',
  "React Native",
  "Three.js",
  "D3.js",
  "Framer Motion",
  "Tailwind CSS",
  "Zustand",
  "MobX",
  "Emotion",
  "Redux Saga",
  "React Hook Form",
  "Formik",
  "NextAuth.js",
  "Chakra UI",
  "React Spring",
  "Recoil",
  "React Helmet",
  "Immer",
  "React DevTools",
  'AWS Dynamodb',
  "Playwright",
  "Cypress",
  "Vite",
  "Snowpack",
  "Electron",
  "React Query Infinite",
  "Storybook"
];

const OurTechnologies = () => {
  return (
    <div className="w-full pb-40">
      <div className="w-full flex justify-center text-center py-20">
        <h2 className={clsx(poppins.className, 'text-2xl lg:text-5xl font-bold')}>Technologies we use</h2>
      </div>
      <div className="-ml-[5%] w-[112%] overflow-hidden">
        <div className="flex gap-6 w-max technologies-first-row">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((technology) => (
            <div
              key={technology}
              className="technology-tag bg-contain bg-clip-text text-[transparent] whitespace-nowrap text-base lg:text-2xl font-bold border-2 border-blue-primary rounded-full py-2 px-6"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 -ml-[5%] w-[112%] overflow-hidden">
        <div className="flex gap-6 w-max technologies-second-row">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((technology) => (
            <div
              key={technology}
              className="technology-tag bg-contain bg-clip-text text-[transparent] whitespace-nowrap text-base lg:text-2xl font-bold border-2 border-blue-primary rounded-full py-2 px-6"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTechnologies;
