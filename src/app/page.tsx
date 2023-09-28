import Coding from '@/components/Coding';
import EarthBackground from '@/components/EarthBackground';
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
    <div className='w-full'>
      <EarthBackground />
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
