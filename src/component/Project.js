import { MdOutlineSend } from 'react-icons/md';
import React from 'react';
import Myproject from './Myproject';
import artmint from './images/artmint.png';
import nmu from './images/nmu voting.png';
import MonieWave from './images/MonieWave.png';
import easyLaunch from './images/easyLaunch.png';
import oddHaven from './images/oddshaven.png';
import Fllow from './images/fllow.png';

const project = [
  {
    name: 'Fllow',
    id: 1,
    img: Fllow,
    lang1: 'Next JS',
    lang2: 'Javascript',
    lang3: 'Web3',
    lang4: 'Convex',
    desc: 'Fllow is an e-commerce and link in bio platform designed for creators to sell their digital products, online courses, memberships, and create email lists. With Fllow, no coding is required, making it super easy to use for beginners. You really dont need any coding experience to get started. We think even a caveman could do it.',
    liveDemo: 'https://www.fllow.store/',
    github: 'https://github.com/V-Blaze/Fllow-FE',
  },
  {
    name: 'ArtMint',
    id: 2,
    img: artmint,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'ArtMint is an Art store, where unique digital art and collectibles await.',
    liveDemo: 'https://www.xartmint.com/',
  },
  {
    name: 'MonieWave',
    id: 3,
    img: MonieWave,
    lang1: 'Ruby on rails',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'Experience free hassle-free cross-border money transfers with MonieWave. Our innovative fintech platform is dedicated to making it simple for residents of Europe to send money swiftly and securely to Nigeria, and say goodbye to complications and hidden fees, MonieWave is your trustworthy partner for seamless remittances.',
    liveDemo: 'https://ratehive.netlify.app/',
    github: 'https://github.com/ifeanyi305/Ratehive_Frontend',
  },
  {
    name: 'Easy Launch',
    id: 4,
    img: easyLaunch,
    lang1: 'Web3 Blockchain',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'Easy Launch is a cutting-edge web3 blockchain platform that provides an all-in-one solution for users seeking to launch their own cryptocurrency. With a robust and secure architecture, Easy Launch enables users to create and manage their own digital assets and smart contracts, as well as conduct seamless and secure transactions on the blockchain.',
    liveDemo: 'https://easylaunch.onrender.com/',
    github: 'https://github.com/ifeanyi305/initial_coin_offering',
  },
  {
    name: 'OddsHaven',
    id: 5,
    img: oddHaven,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'OddsHaven is a community-based crypto casino that offers its players the best online casino experience possible! At OddsHaven.GG, we are convinced that blockchain will change the online crypto-gambling industry forever! Jump in and check it out for yourself! Have fun and earn crypto Built with',
    liveDemo: 'https://oddshaven.netlify.app/',
    github: 'https://github.com/ifeanyi305/beacon',
  },
  {
    name: 'NMU online voting',
    id: 6,
    img: nmu,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'Nmu online voting allows vote their desired candidate to be awarded at the NMU Pageantry and Awards Night. Each vote cost ₦100 only, and voters are allowed to vote multiple times in any volume',
    liveDemo: 'https://nmupaa.org/',
  },
];

const Project = () => (
  <div id="project">
    <h1 className="project-title">
      <MdOutlineSend />
      <b>My Projects</b>
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
