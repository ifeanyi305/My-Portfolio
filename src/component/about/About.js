/*eslint-disable*/
import React, { useState } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import myself from '../images/myself.jpg';

const About = () => {
  const [aboutdesc, setaboutdesc] = useState(false);

  const aboutAccordion = () => {
    setaboutdesc(!aboutdesc);
  };
  return (
    <div data-aos="fade-up" id="about">
      <h1>
        <MdOutlineSend />
        <b>About Me</b>
      </h1>
      <div className="about-me">
        <div className="about-desc">
          <p className={!aboutdesc ? 'more' : 'moreOn'}>
            Hello! My names are Ifeanyi Joseph Oti, and I&apos;m a full-stack
            software developer who specializes in using Javascript, React,
            Redux, and Rails to build software solutions for companies.
            I&apos;m currently completing coursework at Microverse, Microverse is
            a remote software development program that uses pair programming
            and project building to teach web development. I&apos;ve spent the
            last several months completely immersed in remote development,
            building everything from landing pages to Rails APIs, and have
            learned the important skills of communication and teamwork
            My experience of being a computer scientist at the diplomat level
            helped me to work with a software and networking company for two
            years as a customer support engineer. I also know that constant
            practice is key to growth and I apply this every day since
            I started learning to code. I also learned in this experience
            to resolve conflicts as a person and with the team in a
            peaceful manner which helped me increase my teamwork skills.
          </p>
          <span
            className="seeMore-desc"
            onClick={aboutAccordion}
          >
            {!aboutdesc ? 'see more' : 'see less'}
          </span>
          <p>
            Tech Stack:
            <ul>
              <li>Languages: JavaScript, HTML, CSS, Ruby, Python, Shell</li>
              <li>
                Frameworks &
                Libraries: React, Next, Redux, Node, Rails,
                Bootstrap, Tailwind, Bulma
              </li>
              <li>Databases: PSQL, MySQL (learning MongoDB and firebase)</li>
              <li>Management & Deployment: Git, GitHub, Jira, Heroku, Netlify, Postman, Terminal</li>
              <li>Tools & Methods: RSpec, Jest, TDD, Dev Tools, Gitflow</li>
            </ul>
            I am passionate about learning
            new technologies as well as building things.
            Always looking for new opportunities.
            If you would like to get in contact about potential
            job opportunities, please reach out via email
            (otijoseph305@gmail.com), and I will respond Promptly!
          </p>
        </div>
        <div>
          <img className="myself" src={myself} alt="About me" height={450} width={450} />
        </div>
      </div>
    </div>
  );
};

export default About;
