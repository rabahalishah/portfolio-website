import { Tooltip } from "react-tooltip";
import { techStacks } from "./techStack";

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: (
      <div>
        <div className="mb-4">
          The Personal Portfolio Website project is a showcase of my skills,
          accomplishments, and experiences, designed to serve as a digital.....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/FaceFind">
              {" "}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["portfolioWebsite"].map((logo, index) => {
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
    image: "/images/projects/PORTFOLIO.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Face Find",
    description: (
      <div>
        <div className="mb-4">
          FaceFind is a full stack web application that utilizes a powerful face
          detection model of Clarifai API to detect human faces from....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/FaceFind">
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["faceFind"].map((logo, index) => {
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
    image: "/images/projects/FACEFIND.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/FaceFind",
    previewUrl: "",
  },
  {
    id: 3,
    title: "MERN Essentials Template",
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
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["mernEssentials"].map((logo, index) => {
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
    image: "/images/projects/MERNESSENTIALS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/MERN_Essentials",
    previewUrl: "",
  },
  {
    id: 4,
    title: "GPT3",
    description: (
      <div>
        <div className="mb-4">
          GPT is a full responsive UI web application built with React and React
          Router DOM. This Web Application includes blog tab, drop down....
          <span className="underline text-blue-600">
            <a target="_blank" href="https://github.com/rabahalishah/GPT3">
              {" "}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["gpt3"].map((logo, index) => {
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
    image: "/images/projects/GPT3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/GPT3",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Natours REST APIs",
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
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["natoursAPI"].map((logo, index) => {
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
    image: "/images/projects/NATOURSAPI.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/Natrous_API",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Chat Sphere",
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
              {" "}
              Read more
            </a>
          </span>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["chatSphere"].map((logo, index) => {
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
    image: "/images/projects/CHATSPHERE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/chat_sphere",
    previewUrl: "",
  },
  {
    id: 7,
    title: (
      <p>
        Xylexa Portal{" "}
        <span className="text-gray-200 font-normal text-sm">(Ongoing)</span>
      </p>
    ),
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
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["xylexaPortal"].map((logo, index) => {
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
    image: "/images/projects/XYLEXAPORTAL.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/Xylexa_Portal",
    previewUrl: "",
  },
  {
    id: 8,
    title: (
      <p>
        secure-local-storage-hook NPM Package{" "}
        <span className="text-gray-200 font-normal text-sm">(Open Source)</span>
      </p>
    ),
    description: (
      <div>
        <div className="mb-4">
          useSecureLocalStorage is a supercharged version of React&apos;s
          useState hook, designed to securely store and persist state....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://www.npmjs.com/package/secure-local-storage-hook"
            >
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["secureLocalStorageHook"].map((logo, index) => {
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
    image: "/images/projects/SECURE_LOCAL_STORAGE_NPM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rabahalishah/useSecureLocalStorage",
    previewUrl: "",
  },

  {
    id: 9,
    title: (
      <p>
        Quick Word Definition - Chrome Extension{" "}
        <span className="text-gray-200 font-normal text-sm">(Open Source)</span>
      </p>
    ),
    description: (
      <div>
        <div className="mb-4">
          A lightweight and handy Chrome extension that helps you find word
          definitions instantly while reading articles, blogs, PDFs, or web
          content. Just right-click on....
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/quick-word-definition/ooadekjgieccaeacicfkcicbmiknlkbo?hl=en-US&utm_source=ext_sidebar"
            >
              {" "}
              Read more
            </a>
          </span>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-4">
          {techStacks["quickWordDefinition"].map((logo, index) => {
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
    image: "/images/projects/QUICK_WORD_DEFINITION_CHROME_EXTENSION.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/rabahalishah/Quick-Word-Definition-Chrome-Extension",
    previewUrl: "",
  },
];
