import React from 'react';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 text-center lg:text-right">
        <p className="text-slate-600 ">
          Created with ❤️ by{' '}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rabah-ali-shah-774706202/"
            className='underline'
          >
            Rabah Ali Shah
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
