import React from 'react';
import { MdOutlineSend } from 'react-icons/md';

const Education = () => (
  <div id="education">
    <h1 className="project-title">
      <MdOutlineSend />
      <b>Education</b>
    </h1>
    <div className="fold" data-aos="fade-up">
      <p>
        <b>
          Spent 1300+ hours mastering algorithms,
          data structures @
          <span className="microverse"><a href="https://www.microverse.org/">Microverse</a></span>
          , and full-stack development
          while simultaneously developing projects with
          <a className="color" href="https://en.wikipedia.org/wiki/Ruby_(linguagem_de_programa%C3%A7%C3%A3o)" target="_blank" rel="noreferrer">Ruby</a>
          ,
          <a className="color" href="https://en.wikipedia.org/wiki/Ruby_on_Rails" target="_blank" rel="noreferrer">Rails</a>
          ,
          <a className="color" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">JavaScript</a>
          ,
          <a className="color" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">React</a>
          , and
          <a className="color" href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" target="_blank" rel="noreferrer">Redux</a>
          .
        </b>
      </p>
      <p>
        <b>
          Developed skills in remote pair-programming
          using
          {' '}
          <a className="color" href="https://github.com/ifeanyi305" target="_blank" rel="noreferrer">GitHub</a>
          {' '}
          industry-standard gitflow,
          and daily standups to communicate
          and collaborate with international
          remote developers.
        </b>
      </p>
      <p>
        <b>
          Built 59+ projects ranging from simple
          projects to complex full-stack applications.
        </b>
      </p>
    </div>
  </div>
);

export default Education;
