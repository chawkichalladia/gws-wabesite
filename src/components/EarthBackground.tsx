import Image from 'next/image';

import EarthBackgroundImage from '../../public/earth-bg.png';

const EarthBackground = () => {
  return <div className="container h-screen absolute -z-10 earth-bg bg-center bg-no-repeat bg-cover md:bg-contain"></div>;
};

export default EarthBackground;
