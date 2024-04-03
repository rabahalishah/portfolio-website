'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const blogsData = [
  {
    id: 1,
    type: 'blog',
    title:
      'Hack-Proof Your Node.js APIs: A Practical Guide against Cyber Threats',
    description: (
      <div>
        While building real world applications for clients the security of an
        application is extremely important. There are a lot of developers who do
        not focus on making their application....
        <p>
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://medium.com/@muhammadrabah.ali46/hack-proof-your-node-js-apis-a-practical-guide-against-cyber-threats-7bcac2a56721"
            >
              {' '}
              Read more
            </a>
          </span>
        </p>
      </div>
    ),
    image: '/images/blogs/SECURITY.png',
    tag: ['All', 'Web'],
    blogUrl:
      'https://medium.com/@muhammadrabah.ali46/hack-proof-your-node-js-apis-a-practical-guide-against-cyber-threats-7bcac2a56721',
    previewUrl: '',
  },
  {
    id: 2,
    type: 'blog',
    title:
      'Level Up Your State Handling in React: Why Zustand Helps You Manage State Like a Pro over Redux?',
    description: (
      <div>
        Managing states is one of the most challenging part while building an
        application which every developer have to face. No doubt, by using some
        React hooks....
        <p>
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://medium.com/stackademic/level-up-your-state-handling-in-react-why-zustand-helps-you-manage-state-like-a-pro-over-redux-3db4acac7ada"
            >
              {' '}
              Read more
            </a>
          </span>
        </p>
      </div>
    ),
    image: '/images/blogs/ZUSTAND.png',
    tag: ['All', 'Web'],
    blogUrl:
      'https://medium.com/stackademic/level-up-your-state-handling-in-react-why-zustand-helps-you-manage-state-like-a-pro-over-redux-3db4acac7ada',
    previewUrl: '',
  },
  {
    id: 3,
    type: 'blog',
    title:
      'WebAssembly (WASM): A Secret Guide to Building Highly Optimized and Secured Web Applications',
    description: (
      <div>
        In the world of software development, the technology is evolving
        rapidly. Teams are developing different amazing tools to help the
        developers in developing....
        <p>
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://medium.com/@muhammadrabah.ali46/webassembly-wasm-a-secret-guide-to-building-highly-optimized-and-secured-web-applications-54e364484252"
            >
              {' '}
              Read more
            </a>
          </span>
        </p>
      </div>
    ),
    image: '/images/blogs/WEBASSEMBLY.png',
    tag: ['All', 'Web'],
    blogUrl:
      'https://medium.com/@muhammadrabah.ali46/webassembly-wasm-a-secret-guide-to-building-highly-optimized-and-secured-web-applications-54e364484252',
    previewUrl: '',
  },
  {
    id: 4,
    type: 'blog',
    title:
      'Going Beyond Servers: The Rise and Impact of Serverless Architecture',
    description: (
      <div>
        You have heard a lot of people talking about going serverless. What does
        this architecture really means? Can we build an application without a
        server....
        <p>
          <span className="underline text-blue-600">
            <a
              target="_blank"
              href="https://medium.com/stackademic/going-beyond-servers-the-rise-and-impact-of-serverless-architecture-888c6ad97cbf"
            >
              {' '}
              Read more
            </a>
          </span>
        </p>
      </div>
    ),
    image: '/images/blogs/SERVERLESS.png',
    tag: ['All', 'Web'],
    blogUrl:
      'https://medium.com/stackademic/level-up-your-state-handling-in-react-why-zustand-helps-you-manage-state-like-a-pro-over-redux-3db4acac7ada',
    previewUrl: '',
  },
];

const BlogSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="blog">
      <h2 className="text-center text-4xl font-bold text-white mt-24 mb-8 md:mb-12">
        My Blogs
      </h2>
      {blogsData.length === 0 && <div>Currently, No blogs to display.</div>}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {blogsData.map((blog, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.image}
              Url={blog.blogUrl}
              previewUrl={blog.previewUrl}
              type={blog.type}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BlogSection;
