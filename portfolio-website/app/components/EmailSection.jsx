'use client';
import React, { useState } from 'react';
import StackOverFlowIcon from '../../public/stackoverflow.png';
import Twitter from '../../public/twitter.png';

import Link from 'next/link';
import Image from 'next/image';
import { sendEmail } from '../../utils/send-email';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import {GITHUBSVG, LINKEDINSVG, STACKOVERFLOWSVG} from '../../public/svgs/tech-skills-svgs';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setIsloading] = useState(false);

  const onSubmit = async (formData, event) => {
    reset();
    const response = await sendEmail(formData, setIsloading);
    if (!response.ok) {
      return toast.error('Something went wrong! Please try again later.');
    }
    toastRunner();
  };
  const toastRunner = () => {
    return toast.success(
      'Thank you for reaching me out, I will get back to you shortly'
    );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {' '}
          If you are looking for a skilled professional who can solve your
          problem using web based solution, my inbox is always open. Whether you
          have any query or just want to say hi, I&apos;ll try my best to get
          back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/rabahalishah">
           <GITHUBSVG alt="github logo"/>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/rabah-ali-shah-774706202/"
          >
          <LINKEDINSVG alt="linkedin Logo"/>
          </Link>
          <Link
            target="_blank"
            href="https://stackoverflow.com/users/14969280/rabah-ali-shah"
          >
            <Image
              src={StackOverFlowIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
            {/* <STACKOVERFLOWSVG/> */}
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/smrabahalishah"
          >
            <Image src={Twitter} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@gmail.com"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                {...register('subject', { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                {...register('message', { required: true })}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#af67f9] to-[#e48d87] hover:bg-gradient-to-r hover:from-[#a04af6] hover:to-[#ed7d75] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {loading ? 'Sending....' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
