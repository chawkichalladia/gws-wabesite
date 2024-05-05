import Image from 'next/image';

import Desktop from '../../../public/our_expertise/desktop.png';
import Laptop from '../../../public/our_expertise/laptop.png';
import Person from '../../../public/our_expertise/person.png';
import Table from '../../../public/our_expertise/table.png';

export const OurExpertiseImage2 = () => {
  return (
    <div className="w-full max-w-[1500px] relative aspect-[1124/419]">
      <Image src={Desktop} alt="A desktop computer with other icons" className="absolute w-[20.552%] h-[48.926%] left-[73.31%] top-[4.296%] z-20" />
      <Image src={Laptop} alt="A laptop with software windows open" className="absolute w-[19.929%] h-[42.005%] left-[11.744%] top-[10.74%] z-20" />
      <Image
        src={Person}
        alt="A sitting person with a laptop on their lap"
        className="absolute w-[13.79%] h-[80.191%] left-[42.883%] top-[6.683%] z-20"
      />
      <Image
        src={Table}
        alt="A white table"
        className="absolute w-full h-[54.177%] left-0 bottom-0 z-10"
      />
    </div>
  );
};
