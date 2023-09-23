import { Open_Sans, Poppins } from 'next/font/google';
import local from 'next/font/local';

export const open_Sans = Open_Sans({ subsets: ['latin'] });
export const poppins = Poppins({ weight: '400', subsets: ['latin'] });
export const orion_pax = local({
  src: [
    { path: '../../public/orion-pax/orion_pax.otf', weight: '400', style: 'normal' },
    { path: '../../public/orion-pax/orion_pax_italic.otf', weight: '400', style: 'italic' },
    { path: '../../public/orion-pax/orion_pax_bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/orion-pax/orion_pax_bold_italic.otf', weight: '700', style: 'italic' },
  ],
});
