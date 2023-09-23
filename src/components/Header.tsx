import Image from "next/image";

import Logo from "../../public/logo.png";
import ArrowCircleRight from "../../public/arrow-circle-right.svg";

const Header = () => {
  return (
    <div className={"flex justify-between align-items-center"}>
      <div>
        <Image
          src={Logo}
          alt="Galactech Web Solutions logo"
          width={150}
          height={95}
        />
      </div>
      <button className="bg-white px-6 py-4 text-xl rounded-full flex align-items-center gap-2.5 self-center">
        <div>Let&lsquo;s talk</div>
        <div className="flex align-items-center">
          <Image src={ArrowCircleRight} alt="Round right caret" />
        </div>
      </button>
    </div>
  );
};

export default Header;
