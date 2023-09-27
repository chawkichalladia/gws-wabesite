import Coding from '@/components/Coding';
import EarthBackground from '@/components/EarthBackground';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import OurExpertise from '@/components/OurExpertise';
import Services from '@/components/Services';

const page = () => {
  return (
    <div className='w-full'>
      <EarthBackground />
      <Header />
      <Landing />
      <Services />
      <Coding />
      <OurExpertise />
    </div>
  );
};

export default page;
