import Image from 'next/image';

import GearImage from '../../../public/new_builds/gear.png';
import LaptopImage from '../../../public/new_builds/laptop.png';
import LaughingFaceImage from '../../../public/new_builds/laughing_face.png';
import LightBulbImage from '../../../public/new_builds/light_bulb.png';
import ListImage from '../../../public/new_builds/list.png';
import ManImage from '../../../public/new_builds/man.png';
import MusicNoteImage from '../../../public/new_builds/music_note.png';
import SmilingFaceImage from '../../../public/new_builds/smiling_face.png';
import WhiteBallImage from '../../../public/new_builds/white_ball.png';

export const NewBuildImage = () => {
  return (
    <div className="w-full max-w-[475px] relative aspect-[475/416]">
      <Image
        src={SmilingFaceImage}
        alt="Smiling face drawing"
        className="absolute top-[16.59%] left-[2.32%] w-[17.68%] h-[20.19%] opacity-0 new-build-smile"
      />
      <Image
        src={WhiteBallImage}
        alt="A white ball drawing"
        className="absolute top-[58%] left-[21.9%] w-[3.58%] h-[4.09%] opacity-0 new-build-white-ball"
      />
      <Image src={GearImage} alt="A gear drawing" className="absolute top-[61.78%] left-[8%] w-[14.32%] h-[15.14%] opacity-0 new-build-gear" />
      <Image
        src={ManImage}
        alt="A man drawing"
        className="absolute bottom-[2.16%] left-[27.39%] w-[28.84%] h-0 new-build-person"
      />
      <Image
        src={LightBulbImage}
        alt="Light bulb drawing"
        className="absolute left-[44.42%] top-[0.96%] w-[17.05%] h-[18.75%] opacity-0 new-build-lightbulb"
      />
      <Image
        src={MusicNoteImage}
        alt="Music note drawing"
        className="absolute left-[67.79%] top-[6.49%] w-[4%] h-[5.05%] opacity-0 new-build-list"
      />
      <Image
        src={ListImage}
        alt="List outline drawing"
        className="absolute left-[68.63%] top-[15.38%] w-0 h-[9.13%] new-build-list"
      />
      <Image
        src={LaughingFaceImage}
        alt="Laughing face drawing"
        className="absolute left-[84%] top-[28.85%] w-[11.16%] h-[12.74%] opacity-0 new-build-laugh"
      />
      <Image
        src={LaptopImage}
        alt="Laptop drawing"
        className="absolute left-[54.1%] top-[60.82%] w-[19.37%] h-[16.11%] opacity-0 new-build-laptop"
      />
    </div>
  );
};
