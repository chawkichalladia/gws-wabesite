import EarthBackground from '@/components/EarthBackground';
import Header from '@/components/Header';
import Landing from '@/components/Landing';

const page = () => {
  return (
    <div className='w-full'>
      <Header />
      <EarthBackground />
      <Header />
      <Landing />
    </div>
  );
};

export default page;
