import Image from 'next/image';

import MessagesIcon from '../../public/messages.svg';

const TalkToUs = () => {
  return (
    <div className="w-full pt-24">
      <div className="w-full bg-grey-1 rounded-3xl lg:rounded-full flex flex-col lg:flex-row p-4 justify-center items-center gap-4">
        <div className="bg-grey-4 rounded-3xl lg:rounded-full flex justify-center items-center text-black py-2 px-6 md:py-4 md:flex-auto md:text-2xl text-justify">
          Have a new project in mind, let us explain our tried and true, step-by-step web app creation process.
        </div>
        <div className="bg-grey-1 rounded-3xl lg:rounded-full talk-btn flex justify-center items-center text-white p-4 md:px-6 gap-2 md:gap-4 w-full lg:w-auto whitespace-nowrap" >
          <Image src={MessagesIcon} alt="messages icon" width={24} height={24} />
          <span>Let's Talk</span>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
