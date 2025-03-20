import axios from 'axios';
import { clsx } from 'clsx';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

import { ContactContext } from '@/context';

type InputNames = 'name' | 'email' | 'subject' | 'message';

export const ContactForm = () => {
  const { setIsSuccess } = useContext(ContactContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<InputNames>();

  const setters: Record<InputNames, React.Dispatch<React.SetStateAction<string>>> = {
    name: setName,
    email: setEmail,
    message: setMessage,
    subject: setSubject,
  };

  const handleChange = (inputName: InputNames) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    setters[inputName](value);
  };

  const clearInputs = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await axios.post('https://api.galactechwebsolutions.com/contact', { name, email, subject, message });

      setIsSuccess?.(true);
      clearInputs();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

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
              value={name}
              onChange={handleChange('name')}
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
              value={email}
              onChange={handleChange('email')}
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
              value={subject}
              onChange={handleChange('subject')}
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
              value={message}
              placeholder="Message"
              onChange={handleChange('message')}
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
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={clsx(
            { ['text-white bg-blue-primary']: !loading, ['bg-grey-4 flex justify-center']: loading },
            'w-full rounded-lg outline-none border-none h-10 font-medium text-xl shadow-[0_4px_31px_0_rgba(0,62,221,0.3)]'
          )}
        >
          {loading ? <RotatingLines width="34px" strokeColor='#36aeff' /> : 'Submit'}
        </button>
      </div>
    </div>
  );
};
