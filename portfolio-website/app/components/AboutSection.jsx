'use client';
import React, { useTransition, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import Image from 'next/image';
import {
  ReactSVG,
  MongoDBSVG,
  JavascriptSVG,
  TypescriptSVG,
  HtmlSVG,
  CssSVG,
  NodeSVG,
  TailwindSVG,
  BootstrapSVG,
  JwtSVG,
  NextSVG,
  ReduxSVG,
  ReduxSagaSVG,
  ExpressJsSVG,
  MongooseSVG,
  JiraSVG,
  GitSVG,
  PostmanSVG,
  FigmaSVG,
  MaterialUI,
} from '../../public/svgs/tech-skills-svgs';

import TabButton from './TabButton';
const SKILLS_DATA = [
  {
    name: 'React',
    svg: <ReactSVG />,
  },
  {
    name: 'Next.js',
    svg: <NextSVG />,
  },
  {
    name: 'Redux',
    svg: <ReduxSVG />,
  },
  // {
  //   name: 'Redux Saga',
  //   svg: <ReduxSagaSVG />,
  // },
  {
    name: 'JavaScript',
    svg: <JavascriptSVG />,
  },
  {
    name: 'TypeScript',
    svg: <TypescriptSVG />,
  },
  {
    name: 'Tailwind-CSS',
    svg: <TailwindSVG />,
  },
  {
    name: 'Material-UI',
    svg: <MaterialUI />,
  },
  {
    name: 'Bootstrap',
    svg: <BootstrapSVG />,
  },
  {
    name: 'HTML5',
    svg: <HtmlSVG />,
  },
  {
    name: 'CSS3',
    svg: <CssSVG />,
  },
  {
    name: 'Node.js',
    svg: <NodeSVG />,
  },

  {
    name: 'Express.js',
    svg: <ExpressJsSVG />,
  },
  {
    name: 'MongoDB',
    svg: <MongoDBSVG />,
  },
  {
    name: 'Mongoose',
    svg: <MongooseSVG />,
  },

  {
    name: 'JWT',
    svg: <JwtSVG />,
  },
  {
    name: 'Git',
    svg: <GitSVG />,
  },
  // {
  //   name: 'Jira',
  //   svg: <JiraSVG />,
  // },
  {
    name: 'Postman',
    svg: <PostmanSVG />,
  },
  {
    name: 'Figma',
    svg: <FigmaSVG />,
  },
];

const CERTIFICATES_DATA = [
  {
    name: 'React - The Complete Guide',
    image: '/images/UDEMY.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=LETSLEARNNOW',
    author: '~Maximilian schwarzmüller',
  },
  {
    name: 'Complete Node.js Bootcamp',
    image: '/images/UDEMY.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=LETSLEARNNOW',
    author: '~Jonas Schmedtmann',
  },
  {
    name: 'The Complete Web Developer Bootcamp - Zero to Mastery',
    image: '/images/UDEMY.png',
    bg: 'bg-[#a633f1]',
    link: 'https://zerotomastery.io/courses/coding-bootcamp/',
    author: '~Andrei Neagoie',
  },
  {
    name: 'The Complete Python Developer - Zero to Mastery',
    image: '/images/UDEMY.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.udemy.com/course/complete-python-developer-zero-to-mastery/?couponCode=LETSLEARNNOW',
    author: '~Andrei Neagoie',
  },
  {
    name: 'Introduction to Linux Operating System',
    image: '/images/freecodecamp.png',
    bg: 'bg-[#090922]',
    link: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
    author: '~Joshua Lacy',
  },
];
const EXPERIENCE_DATA = [
  {
    title: 'React Developer',
    image: '/images/experience/XYLEXA.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.linkedin.com/company/xylexa-inc/mycompany/',
    description: (
      <ul className="space-y-1 list-disc list-outside">
        <li>
          Development of &apos;Xylexa Portal&apos;, a project and team
          management tool under the supervision of Sr. Software Engineers.
        </li>
        <li>
          Initiated the project from concept, handling wireframing, prototyping,
          and UI/UX design in Figma.
        </li>
        <li>
          Responsible for front-end development using React, Tailwind CSS,
          JavaScript, TypeScript, CSS, and HTML.
        </li>
        <i>
          Adhering to international best practices for code quality,
          scalability, and maintainability.
        </i>
        <li>
          Ongoing development, collaborating with cross-functional teams for
          seamless integration.
        </li>
      </ul>
    ),
    startDate: 'Sep 2023',
    EndData: 'Present',
    jobType: 'Part-time',
    location: 'Islamabad, Pakistan',
    company: 'Xylexa, Inc',
  },
  {
    title: 'Sofware Engineer - Intern',
    image: '/images/experience/XYLEXA.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.linkedin.com/company/xylexa-inc/mycompany/',

    description: (
      <ul className="space-y-1 list-disc list-outside">
        <li>
          V3 Development: Collaborate with the development team to work on the
          latest version of XyCAD (V3). Actively involved in creating new
          features, implementing UI components, and ensuring a smooth and
          efficient user interface.
        </li>
        <li>
          Responsive UIs: Leveraged my expertise in React.js and front-end
          development to design and develop responsive user interfaces. This
          involves ensuring that XyCAD is accessible and functional across
          various devices and screen sizes.
        </li>
        <li>
          Front-End Optimization: Taking the initiative to analyze the existing
          codebase of V2 and identify areas that can be optimized. Improving the
          performance and efficiency of the front-end code to enhance the
          overall user experience.
        </li>
        <i>
          Problem-Solving: As working on V3 and optimizing V2, we are
          encountering various challenges and roadblocks. Using problem-solving
          skills and collaborating with team to find innovative solutions and
          implement best practices to address these issues effectively.
        </i>
      </ul>
    ),
    startDate: 'June 2023',
    EndData: 'Sep 2023',
    jobType: 'Internship',
    location: 'Islamabad, Pakistan',
    company: 'Xylexa, Inc',
  },
  {
    title: 'Frontend Developer',
    image: '/images/experience/INTERNSPK.png',
    bg: 'bg-[#a633f1]',
    link: 'https://www.linkedin.com/company/interns-pakistan/',
    description: (
      <ul className=" space-y-1 list-disc list-outside">
        <li>
          Collaborated with mentors to deepen my understanding of HTML, HTML5,
          CSS, CSS3, Flexbox, Bootstrap, and JavaScript, with a focus on ES6
          standards.
        </li>
        <li>
          Successfully completed over 350 challenges, demonstrating proficiency
          and adaptability in applying theoretical knowledge to practical
          scenarios.
        </li>
        <li>
          Participated in five mini projects, contributing to the development of
          responsive and user-friendly web interfaces.
        </li>
        <li>
          Adhering to international best practices for code quality,scalability,
          and maintainability.
        </li>
        <li>
          Applied acquired skills in real-world apprenticeships, gaining
          valuable experience in executing front end development tasks within
          professional settings.
        </li>
      </ul>
    ),
    startDate: 'June 2023',
    EndData: 'July 2023',
    jobType: 'Internship',
    location: 'Remote',
    company: 'Interns Pakistan',
  },
];

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="grid lg:grid-cols-12 lg:w-2/3 grid-cols-3">
        {SKILLS_DATA.map((icon, index) => {
          return (
            <div
              data-tooltip-id={icon.name}
              data-tooltip-content={icon.name}
              className="mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-auto"
              key={index}
            >
              <Tooltip id={icon.name} />
              {icon.svg}
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <div className="">
        {EXPERIENCE_DATA.map((experience, index) => {
          return (
            <div key={index}>
              <div className="mb-4 border-2 border-white rounded-lg p-4">
                <div class="max-w-full rounded-lg shadow lg:flex flex-row">
                  <div>
                    <Image
                      class="rouned-t-lg mx-auto lg:mt-4 lg:mr-4"
                      src={experience.image}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className='w-full'>
                    <div class="p-4">
                      <a target="_blank" href={experience.link}>
                        <div className="lg:flex flex-row justify-between">
                          <div>
                            <h5 class="lg:text-xl lg:text-left sm:text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white">
                              {experience.title}
                            </h5>
                            <p className="lg:text-left text-center">
                              {experience.company}
                            </p>
                          </div>
                          <div>
                            <p className="lg:text-right text-center">
                              {experience.startDate} - {experience.EndData}
                            </p>
                            <div className="text-center lg:text-right mb-4">
                              {experience.location}
                            </div>
                          </div>
                        </div>
                        <div>{experience.description}</div>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p className="lg:text-lg sm:text-xsm">
                  Bachelor of Engineering
                </p>
                <span className="text-gray-300">2020-2024</span>
              </div>
            </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div className="grid grid-cols-1 mb-16">
        <div className="max-h-52 ">
          <div class="max-w-96 rounded-lg shadow bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              class="rouned-t-lg bg-white mx-auto p-4"
              src="/images/NUST.png"
              alt=""
              width={150}
              height={150}
            />
            <div className="rounded-b-lg bg-[#034f8c]">
              <div class="p-2">
                <a target="_blank" href="https://nust.edu.pk/">
                  <h5 class="mb-2 lg:text-xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    National University of Science and Technology
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <div className="flex flex-row justify-between">
                    <p className="lg:text-lg sm:text-xsm">
                      Bachelor of Engineering
                    </p>
                    <span className="text-gray-300">2020-2024</span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div className="grid lg:grid-cols-3 sm:grid-col-1">
        {CERTIFICATES_DATA.map((certificate, index) => {
          return (
            <div key={index}>
              <div className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div class="max-w-96 rounded-lg shadow bg-white">
                  <Image
                    class="rouned-t-lg bg-white mx-auto p-8"
                    src={certificate.image}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className={`rounded-b-lg ${certificate.bg} min-h-24`}>
                    <div class="p-4">
                      <a target="_blank" href={certificate.link}>
                        <h5 class="lg:text-xl text-center sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                          {certificate.name}
                        </h5>
                        <p className="text-center">{certificate.author}</p>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <div className="flex flex-row justify-between">
                <p className="lg:text-lg sm:text-xsm">
                  Bachelor of Engineering
                </p>
                <span className="text-gray-300">2020-2024</span>
              </div>
            </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center ">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-center lg:text-left">
            I am a full Stack web developer with industrial experience in
            developing dynamic, responsive, and user-friendly web UIs with
            high-performance RESTful APIs using MERN stack. Throughout my
            career, I had the opportunity to work on multiple enterprise-level
            projects built with modern technologies such as React.js, Node.js,
            Express.js, and others. I strongly believe in collaborating with
            teams to meet the client&apos;s requirements, and contributing to
            open-source projects is something I truly enjoy.
          </p>
          <div className="flex flex-row justify-center lg:justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              {' '}
              Experience{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          {tab === 'skills' && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === 'skills' ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[0].content}
            </motion.div>
          )}
          {tab === 'experience' && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === 'experience' ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[1].content}
            </motion.div>
          )}
          {tab === 'education' && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === 'education' ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[2].content}
            </motion.div>
          )}
          {tab === 'certifications' && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === 'certifications' ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[3].content}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
