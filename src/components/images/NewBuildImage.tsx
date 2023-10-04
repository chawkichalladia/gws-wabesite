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
    <div className="w-[475px] h-[416px] relative">
      <Image src={SmilingFaceImage} alt='Smiling face drawing' className='absolute top-[69px] left-[11px]'/>
      <Image src={WhiteBallImage} alt='A white ball drawing' className='absolute top-[241px] left-[104px]'/>
      <Image src={GearImage} alt='A gear drawing' className='absolute top-[257px] left-[38px]'/>
      <Image src={ManImage} alt='A man drawing' className='absolute bottom-[9px] left-[130px]'/>
      <Image src={LightBulbImage} alt='Light bulb drawing' className='absolute left-[211px] top-[4px]'/>
      <Image src={MusicNoteImage} alt='Music note drawing' className='absolute left-[322px] top-[27px]'/>
      <Image src={ListImage} alt='List outline drawing' className='absolute left-[326px] top-[64px]'/>
      <Image src={LaughingFaceImage} alt='Laughing face drawing' className='absolute left-[399px] top-[120px]'/>
      <Image src={LaptopImage} alt='Laptop drawing' className='absolute left-[257px] top-[253px]'/>
    </div>
  );
};
