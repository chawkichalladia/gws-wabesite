import Image from 'next/image';

import EarthBackgroundImage from '../../public/earth-bg.png';

const EarthBackground = () => {
  return <div className="container w-full h-screen absolute -z-10 earth-bg bg-center bg-no-repeat bg-contain"></div>;
};

export default EarthBackground;
