import { SKILLS_DATA } from "./skillData";
import { EXPERIENCE_DATA } from "./experienceData";
import { CERTIFICATES_DATA } from "./certificationsData";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
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
    title: "Experience",
    id: "experience",
    content: (
      <div className="">
        {EXPERIENCE_DATA.map((experience, index) => {
          return (
            <div key={index}>
              <div className="mb-4 border-2 border-white rounded-lg p-4">
                <div className="max-w-full rounded-lg shadow lg:flex flex-row">
                  <div>
                    <Image
                      className="rouned-t-lg mx-auto lg:mt-4 lg:mr-4"
                      src={experience.image}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="w-full">
                    <div className="p-4">
                      <a target="_blank" href={experience.link}>
                        <div className="lg:flex flex-row justify-between">
                          <div>
                            <h5 className="lg:text-xl lg:text-left sm:text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white">
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
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 mb-16">
        <div className="max-h-52 ">
          <div className="max-w-96 rounded-lg shadow bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              className="rouned-t-lg bg-white mx-auto p-4"
              src="/images/NUST.png"
              alt=""
              width={150}
              height={150}
            />
            <div className="rounded-b-lg bg-[#034f8c]">
              <div className="p-2">
                <a target="_blank" href="https://nust.edu.pk/">
                  <h5 className="mb-2 lg:text-xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    National University of Science and Technology
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid lg:grid-cols-3 sm:grid-col-1">
        {CERTIFICATES_DATA.map((certificate, index) => {
          return (
            <div key={index}>
              <div className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="max-w-96 rounded-lg shadow bg-white">
                  <Image
                    className="rouned-t-lg bg-white mx-auto p-8"
                    src={certificate.image}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className={`rounded-b-lg ${certificate.bg} min-h-24`}>
                    <div className="p-4">
                      <a target="_blank" href={certificate.link}>
                        <h5 className="lg:text-xl text-center sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                          {certificate.name}
                        </h5>
                        <p className="text-center">{certificate.author}</p>
                      </a>
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
