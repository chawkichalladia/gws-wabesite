import Image from 'next/image';

import Flag from '../../../public/our_expertise/flag.png';
import Lightbulb from '../../../public/our_expertise/lightbulb.png';
import Nodes from '../../../public/our_expertise/nodes.png';
import Person from '../../../public/our_expertise/standing_person.png';

export const OurExpertiseImage1 = () => {
  return (
    <div className="w-full max-w-[1500px] relative aspect-[2360/1799]">
      <Image src={Flag} alt="Flag image" className="absolute w-[13.7%] h-[16.7%] left-[82.5%] top-[23.5%]" />
      <Image src={Lightbulb} alt="Lightbulb image" className="absolute w-[20.9%] h-[26%] left-[29.4%] top-[5%]" />
      <Image
        src={Nodes}
        alt="Linked circles image"
        className="absolute w-[83.7%] h-[11.7%] left-[3.7%] top-[34.7%] z-10"
      />
      <Image
        src={Person}
        alt="Image of a person standing with is hand reached out"
        className="absolute w-[40.4%] h-[87.8%] left-[35.3%] top-[12%] z-10"
      />
    </div>
  );
};
