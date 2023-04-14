import { MdOutlineSend } from 'react-icons/md';
import React from 'react';
import Myproject from './Myproject';
import crypto from './images/crypto-tradeoff.png';
import bookstore from './images/space-travellers.png';
import Travellers from './images/travellers.png';
import easyLaunch from './images/easyLaunch.png';
import budget from './images/budget.png';
import leaderboard from './images/leaderboard.png';

const project = [
  {
    name: 'Travellers hub',
    id: 1,
    img: Travellers,
    lang1: 'Ruby on rails',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'A Fullstack application that allows users to see traveling packages and book based on their preference. rank.',
    liveDemo: 'https://travelers-hub-front.onrender.com/',
    github: 'https://github.com/ifeanyi305/travelers_hub_front-end',
  },
  {
    name: 'Easy Launch',
    id: 2,
    img: easyLaunch,
    lang1: 'Web3 Blockchain',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'Easy Launch is a cutting-edge web3 blockchain platform that provides an all-in-one solution for users seeking to launch their own cryptocurrency. With a robust and secure architecture, Easy Launch enables users to create and manage their own digital assets and smart contracts, as well as conduct seamless and secure transactions on the blockchain.',
    liveDemo: 'https://easylaunch.onrender.com/',
    github: 'https://github.com/ifeanyi305/initial_coin_offering',
  },
  {
    name: 'Budget App',
    id: 3,
    img: budget,
    lang1: 'Ruby on rails',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'Budget App is a mobile web application where you can manage your budget: You have a list of expenses associated with a category, so that you can see how much money you spent and on what.',
    liveDemo: 'https://budget-bp9n.onrender.com/',
    github: 'https://github.com/ifeanyi305/Budget-App',
  },
  {
    name: 'Crypto Tradeoff',
    id: 4,
    img: crypto,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'Css',
    desc: 'Crypto tradeoff is a crypto exchange website that displays list of crypto currency exchange websites based on their rank.',
    liveDemo: 'https://crypto-trade-off.netlify.app/',
    github: 'https://github.com/ifeanyi305/crypto-website',
  },
  {
    name: 'Bookstore',
    id: 5,
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
    id: 6,
    img: leaderboard,
    lang1: 'Html',
    lang2: 'Javascript',
    lang4: 'Css',
    desc: 'leaderboard game is a type of game that displays a ranking of players based on their performance or score within the game.',
    liveDemo: 'https://ifeanyi305-leaderboard.netlify.app/',
    github: 'https://github.com/ifeanyi305/Leaderboard',
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
