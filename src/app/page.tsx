"use client"

import Coding from '@/components/Coding';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InGalactech from '@/components/InGalactech';
import Landing from '@/components/Landing';
import OurExpertise from '@/components/OurExpertise';
import OurTechnologies from '@/components/OurTechnologies';
import OwnYourSpace from '@/components/OwnYourSpace';
import Services from '@/components/Services';
import TalkToUs from '@/components/TalkToUs';

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full -ml-[5%] h-screen absolute -z-10 earth-bg bg-center bg-no-repeat bg-cover md:bg-contain"></div>
      <Header />
      <Landing />
      <Services />
      <Coding />
      <OurExpertise />
      <TalkToUs />
      <InGalactech />
      <OwnYourSpace />
      <OurTechnologies />
      <Footer />
    </div>
  );
};

export default page;
