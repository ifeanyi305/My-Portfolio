import { MdOutlineSend } from 'react-icons/md';
import React from 'react';
import Myproject from './Myproject';
import crypto from './images/crypto-tradeoff.png';
import bookstore from './images/space-travellers.png';
import MonieWave from './images/MonieWave.png';
import easyLaunch from './images/easyLaunch.png';
import oddHaven from './images/oddshaven.png';
import Dccexchange from './images/Dccexchange.png';

const project = [
  {
    name: 'MonieWave',
    id: 1,
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
    name: 'OddsHaven',
    id: 3,
    img: oddHaven,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'OddsHaven is a community-based crypto casino that offers its players the best online casino experience possible! At OddsHaven.GG, we are convinced that blockchain will change the online crypto-gambling industry forever! Jump in and check it out for yourself! Have fun and earn crypto Built with',
    liveDemo: 'https://oddshaven.netlify.app/',
    github: 'https://github.com/ifeanyi305/beacon',
  },
  {
    name: 'Dcc Exchange',
    id: 4,
    img: Dccexchange,
    lang1: 'React',
    lang2: 'Javascript',
    lang4: 'Css',
    desc: 'Dcc Exchange offers a swift transactions, top-notch security, and a diverse range of crypto currencies',
    liveDemo: 'https://dccexchange.netlify.app/',
    github: 'https://github.com/DCC-exchange/client/tree/main',
  },
  {
    name: 'Crypto Tradeoff',
    id: 5,
    img: crypto,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'Crypto tradeoff is a crypto exchange website that displays list of crypto currency exchange websites based on their rank.',
    liveDemo: 'https://crypto-trade-off.netlify.app/',
    github: 'https://github.com/ifeanyi305/crypto-website',
  },
  {
    name: 'Bookstore',
    id: 6,
    img: bookstore,
    lang1: 'React',
    lang2: 'Redux',
    lang4: 'CSS',
    desc: 'Welcome to our bookstore! We are a one-stop destination for all your reading needs. Our selection includes a wide range of genres, from fiction to non-fiction, and everything in between. We have a carefully curated selection of the latest bestsellers, as well as classic titles and hidden gems that you may have never heard of before.',
    liveDemo: 'https://ifeanyi305book-store.netlify.app/',
    github: 'https://github.com/ifeanyi305/Book-store',
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
