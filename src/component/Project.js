import { MdOutlineSend } from 'react-icons/md';
import React from 'react';
import Myproject from './Myproject';
import crypto from './images/crypto-tradeoff.png';
import bookstore from './images/space-travellers.png';
import leaderboard from './images/leaderboard.png';
import detector from './images/Task-tracker.png';

const project = [
  {
    name: 'Crypto Tradeoff',
    id: 1,
    img: crypto,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'Css',
    desc: 'Crypto tradeoff is a crypto exchange website that displays list of crypto currency exchange websites based on their rank.',
    liveDemo: 'https://crypto-trade-off.netlify.app/',
    github: 'https://github.com/ifeanyi305/crypto-website',
  },
  {
    name: 'Space Travellers',
    id: 2,
    img: bookstore,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'Css',
    desc: 'Welcome to our bookstore! We are a one-stop destination for all your reading needs. Our selection includes a wide range of genres, from fiction to non-fiction, and everything in between. We have a carefully curated selection of the latest bestsellers, as well as classic titles and hidden gems that you may have never heard of before.',
    liveDemo: 'https://ifeanyi305book-store.netlify.app/',
    github: 'https://github.com/ifeanyi305/Book-store',
  },
  {
    name: 'Leaderboard',
    id: 3,
    img: leaderboard,
    lang1: 'Html',
    lang2: 'Javascript',
    lang4: 'Css',
    desc: 'A leaderboard game is a type of game that displays a ranking of players based on their performance or score within the game.',
    liveDemo: 'https://ifeanyi305-leaderboard.netlify.app/',
    github: 'https://github.com/ifeanyi305/Leaderboard',
  },
  {
    name: 'Task Tracker',
    id: 4,
    img: detector,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'Css',
    desc: 'Task tracker is similar to a todo list but it has special feature of tracking saved todos',
    liveDemo: 'https://task-detector.netlify.app/',
    github: 'https://github.com/ifeanyi305/Task-tracker',
  },
];

const Project = () => (
  <div id="project">
    <h1 className="project-title">
      <MdOutlineSend />
      <b>My Project</b>
    </h1>
    <div className="grid-container">
      {
          project.map((allProject) => (
            <Myproject allProject={allProject} key={allProject.id} />
          ))
        }
    </div>
  </div>
);

export default Project;
