import Image from 'next/image';

import MessagesIcon from '../../public/messages.svg';

const TalkToUs = () => {
  return (
    <div className="container pt-24">
      <div className="container bg-grey-1 rounded-3xl flex flex-col p-4 justify-center items-center gap-4">
        <div className="bg-grey-4 rounded-3xl flex justify-center items-center text-black py-2 px-6">
          Talk to us to learn more about our tried and true, step-by-step website creation procedure.
        </div>
        <div className="bg-grey-1 rounded-3xl talk-btn flex justify-center items-center text-white p-4 gap-2">
          <Image src={MessagesIcon} alt="messages icon" width={24} height={24} />
          <span>Let's Talk</span>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
