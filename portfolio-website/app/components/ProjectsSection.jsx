'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
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
  SOCKETIO,
  DAISYUI,
  CLARIFAI,
} from '../../public/svgs/tech-skills-svgs';

const techStacks = {
  xylexaPortal: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
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
      name: 'Figma',
      svg: <FigmaSVG />,
    },
    {
      name: 'Material-UI',
      svg: <MaterialUI />,
    },
  ],
  chatSphere: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
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
    // {
    //   name: 'Socket.io',
    //   svg: <SOCKETIO />,
    // },

    {
      name: 'Tailwind-CSS',
      svg: <TailwindSVG />,
    },

    {
      name: 'Daisy UI',
      svg: <DAISYUI />,
    },
  ],
  natoursAPI: [
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
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
  ],
  gpt3: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
    },
    {
      name: 'Tailwind-CSS',
      svg: <TailwindSVG />,
    },
  ],
  mernEssentials: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
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
  ],
  faceFind: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
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
      name: 'Clarifai API',
      svg: <CLARIFAI />,
    },
  ],
  portfolioWebsite: [
    {
      name: 'React',
      svg: <ReactSVG />,
    },
    {
      name: 'JavaScript',
      svg: <JavascriptSVG />,
    },
    {
      name: 'Next.js',
      svg: <NextSVG />,
    },
    {
      name: 'Tailwind-CSS',
      svg: <TailwindSVG />,
    },
  ],
};

const projectsData = [
  {
    id: 1,
    title: (
      <p>
        Xylexa Portal <span className='text-gray-200 font-normal text-sm'>(Ongoing)</span>
      </p>
    ),
    // description: '',
    description: (
      <div>
        <div className="mb-4">
          Xylexa Portal is an innovative team management web portal designed to
          streamline project management, collaboration, and performance....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://github.com/rabahalishah/Xylexa_Portal"
            >
              {' '}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['xylexaPortal'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/XYLEXAPORTAL.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/Xylexa_Portal',
    previewUrl: '',
  },
  {
    id: 2,
    title: 'Chat Sphere',
    description: (
      <div>
        <div className="mb-4">
          The Real-Time Chat Web Application is a feature-rich platform designed
          to facilitate seamless communication and interaction between....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://github.com/rabahalishah/chat_sphere"
            >
              {' '}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['chatSphere'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/CHATSPHERE.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/chat_sphere',
    previewUrl: '',
  },
  {
    id: 3,
    title: 'Natours REST APIs',
    description: (
      <div>
        <div className="mb-4">
          NatoursAPI is a robust backend RESTful API developed specifically for
          facilitating seamless tour bookings. Leveraging Node.js....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://github.com/rabahalishah/Natrous_API"
            >
              {' '}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['natoursAPI'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/NATOURSAPI.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/Natrous_API',
    previewUrl: '',
  },
  {
    id: 4,
    title: 'GPT3',
    description: (
      <div>
        <div className="mb-4">
          GPT is a full responsive UI web application built with React and React
          Router DOM. This Web Application includes blog tab, drop down....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/GPT3">
              {' '}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['gpt3'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/GPT3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/GPT3',
    previewUrl: '',
  },
  {
    id: 5,
    title: 'MERN Essentials Template',
    description: (
      <div>
        <div className="mb-4">
          MERN Essentials is a comprehensive full-stack starter template
          developed using the MERN (MongoDB, Express.js, React, Node.js)....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://github.com/rabahalishah/MERN_Essentials"
            >
              {' '}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['mernEssentials'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/MERNESSENTIALS.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/MERN_Essentials',
    previewUrl: '',
  },
  {
    id: 6,
    title: 'Face Find',
    description: (
      <div>
        <div className="mb-4">
          FaceFind is a full stack web application that utilizes a powerful face
          detection model of Clarifai API to detect human faces from....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/FaceFind">
              {' '}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['faceFind'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/FACEFIND.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rabahalishah/FaceFind',
    previewUrl: '',
  },
  {
    id: 7,
    title: 'Personal Portfolio',
    description: (
      <div>
        <div className="mb-4">
          The Personal Portfolio Website project is a showcase of my skills,
          accomplishments, and experiences, designed to serve as a digital.....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/FaceFind">
              {' '}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks['portfolioWebsite'].map((logo, index) => {
            return (
              <div
                data-tooltip-id={logo.name}
                data-tooltip-content={logo.name}
                className="mb-2"
                key={index}
              >
                <Tooltip id={logo.name} />
                {logo.svg}
              </div>
            );
          })}
        </div>
      </div>
    ),
    image: '/images/projects/PORTFOLIO.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-24 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      {filteredProjects.length === 0 && (
        <div>Currently, No projects to display for this section.</div>
      )}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              Url={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
