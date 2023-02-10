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
            Ifeanyi Oti is a software engineer who specializes
            in using Javascript, React, Redux, and Rails to build
            software solutions for small businesses.

            <p>
              Before entering the tech industry, he honed
              his problem-solving skills as a fabricator welder. These
              experiences equipped him with a unique skill set that allows
              him to bring a practical and hands-on approach to software development.
            </p>

            <p>
              As a software engineer with a background in fabricator
              welding, he brings a unique combination of technical
              expertise and hands-on experience to any project. His
              technical skills in software development, paired with his
              experience solving complex problems in a hands-on
              environment, allow him to approach software
              engineering with a practical, solution-oriented mindset.
            </p>

            <p>
              He is currently completing coursework at Microverse,
              Microverse is a remote software development program
              that uses pair programming and project building to
              teach development. He has spent the last several
              months completely immersed in remote development,
              building everything from landing pages to Rails APIs,
              and he has learned the important skills of communication
              and teamwork.
              He also learned in this experience to resolve conflicts as
              a person and with the team in a peaceful manner which helped
              him increase his teamwork skills.
            </p>
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
              <li>Languages: JavaScript, HTML, CSS, Ruby</li>
              <li>
                Frameworks &
                Libraries: React, Redux, Rails,
                Bootstrap, Tailwind
              </li>
              <li>Databases: PSQL</li>
              <li>Management & Deployment: Git, GitHub, Netlify, Postman, Terminal</li>
              <li>Tools & Methods: RSpec, Jest, TDD, Dev Tools, Gitflow</li>
            </ul>
            He's passionate about learning new technologies as well as building things.
            Always looking for new opportunities.
            If you'd like to get in contact about
            potential job opportunities,
            please reach out via email
            (otijoseph305@gmail.com).
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
