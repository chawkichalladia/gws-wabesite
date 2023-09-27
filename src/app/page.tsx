import Coding from '@/components/Coding';
import EarthBackground from '@/components/EarthBackground';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Services from '@/components/Services';

const page = () => {
  return (
    <div className='w-full'>
      <EarthBackground />
      <Header />
      <Landing />
      <Services />
      <Coding />
    </div>
  );
};

export default page;
