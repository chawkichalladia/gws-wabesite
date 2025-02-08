import { clsx } from 'clsx';
import React, { useState } from 'react';

type InputNames = 'name' | 'email' | 'subject' | 'message';

export const ContactForm = () => {
  const [activeInput, setActiveInput] = useState<InputNames>();

  return (
    <div className="flex w-full md:w-1/2 justify-center items-center">
      <div className="w-3/4">
        <div
          className={clsx('mb-4 rounded-lg transition-[padding]', {
            ['input-border p-1']: activeInput === 'name',
            ['p-0']: activeInput !== 'name',
          })}
        >
          <div className="bg-white w-full h-full">
            <input
              type="text"
              name="name"
              onFocus={() => {
                setActiveInput('name');
              }}
              onBlur={() => {
                setActiveInput(undefined);
              }}
              placeholder="Enter your name"
              className="w-full outline-0 border-0 h-12 text-base text-grey-6 bg-blue-primary bg-opacity-5 p-2"
            />
          </div>
        </div>
        <div
          className={clsx('mb-4 rounded-lg transition-[padding]', {
            ['input-border p-1']: activeInput === 'email',
            ['p-0']: activeInput !== 'email',
          })}
        >
          <div className="bg-white w-full h-full">
            <input
              type="email"
              name="email"
              onFocus={() => {
                setActiveInput('email');
              }}
              onBlur={() => {
                setActiveInput(undefined);
              }}
              placeholder="Enter your email address"
              className="w-full outline-0 border-0 h-12 text-grey-6 bg-blue-primary bg-opacity-5 text-base p-2"
            />
          </div>
        </div>
        <div
          className={clsx('mb-4 rounded-lg transition-[padding]', {
            ['input-border p-1']: activeInput === 'subject',
            ['p-0']: activeInput !== 'subject',
          })}
        >
          <div className="bg-white w-full h-full">
            <input
              type="text"
              name="subject"
              onFocus={() => {
                setActiveInput('subject');
              }}
              onBlur={() => {
                setActiveInput(undefined);
              }}
              placeholder="Subject"
              className="w-full outline-0 border-0 h-12 text-grey-6 bg-blue-primary bg-opacity-5 text-base p-2"
            />
          </div>
        </div>
        <div
          className={clsx('mb-4 rounded-lg transition-[padding]', {
            ['input-border p-1']: activeInput === 'message',
            ['p-0']: activeInput !== 'message',
          })}
        >
          <div className="bg-white w-full h-full">
            <textarea
              name="message"
              placeholder="Message"
              onFocus={() => {
                setActiveInput('message');
              }}
              onBlur={() => {
                setActiveInput(undefined);
              }}
              className="w-full outline-0 border-0 h-32 text-grey-6 bg-blue-primary bg-opacity-5 resize-none text-base p-2"
            ></textarea>
          </div>
        </div>
        <button className="w-full rounded-lg outline-none border-none h-10 font-medium text-xl text-white bg-blue-primary shadow-[0_4px_31px_0_rgba(0,62,221,0.3)]">
          Submit
        </button>
      </div>
    </div>
  );
};
