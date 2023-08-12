import React from 'react';
import { MdOutlineSend } from 'react-icons/md';
import Myskills from './Myskills';
import bootstrap from './images/bootstrap.png';
import github from './images/github.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import netlify from './images/netlify.png';
import react from './images/react.png';
import redux from './images/redux.png';
import ruby from './images/ruby.png';
import rubyOnRails from './images/rubyOnRails.png';
import sql from './images/sql.png';
import vscode from './images/vscode.png';
import webpack from './images/webpack.png';

const Skills = () => {
  const mySkills = [
    {
      name: 'bootstrap',
      img: bootstrap,
      id: 1,
    },
    {
      name: 'github',
      img: github,
      id: 2,
    },
    {
      name: 'html',
      img: html,
      id: 3,
    },
    {
      name: 'javascript',
      img: javascript,
      id: 4,
    },
    {
      name: 'netlify',
      img: netlify,
      id: 5,
    },
    {
      name: 'react',
      img: react,
      id: 7,
    },
    {
      name: 'redux',
      img: redux,
      id: 8,
    },
    {
      name: 'ruby',
      img: ruby,
      id: 9,
    },
    {
      name: 'rubyOnRails',
      img: rubyOnRails,
      id: 10,
    },
    {
      name: 'sql',
      img: sql,
      id: 11,
    },
    {
      name: 'vscode',
      img: vscode,
      id: 12,
    },
    {
      name: 'webpack',
      img: webpack,
      id: 13,
    },
  ];

  return (
    <div id="skills">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>My Skills</b>
      </h1>
      <div
        data-aos="fade-up"
      >
        <div className="skill-grid">
          {
            mySkills.map((skill) => (
              <Myskills skill={skill} key={skill.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
