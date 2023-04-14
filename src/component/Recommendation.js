import React from 'react';
import {
  Navigation, Pagination, Mousewheel, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineSend } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ralph from './images/Ralph.jpeg';
import shaddai from './images/shaddai.jpeg';
import esther from './images/Esther.jpeg';
import amine from './images/Amine.jpeg';
import laura from './images/laura2.jpeg';

const Recommendation = () => {
  const recomend = [
    {
      img: esther,
      id: 1,
      name: 'Esther Oti',
      role: 'Project Manager',
      recomend: 'not many people can handle technical trade-offs as Ifeanyi can. He was always very patient, solution-oriented and there was nothing he couldn’t solve He is also very kind and easy to deal with which made our relationship smooth as he allowed me to make suggestions and decisions on my own.What a great professional to have as a partner.',
    },
    {
      img: ralph,
      id: 2,
      name: 'Ekpenisi Raphael',
      role: 'Software Developer',
      recomend: 'Ifeanyi is an exceptional team player with persisting interest in valuable deliveries. He is a balanced software developer with mind-blowing work ethics. A great bond in a team, and his social and technical skills are great to any organisation who by chance is privileged to have him on board.',
    },
    {
      img: amine,
      id: 3,
      name: 'Amine Ouasef',
      role: 'Software Developer',
      recomend: "Oti is a dedicated software developer, being one of my mentees I had the chance to see his deep passion for software development, he always makes sure to use all the resources in his hand to overcome any challenge he faces whether it's a technical bug or a hard concept he would never give up and focus on achieving his goal regardless of the required effort. He is a passionate developer who is devoted to improving himself continuously and I highly recommend him.",
    },
    {
      img: shaddai,
      id: 4,
      name: 'Shaddai Linus',
      role: 'Software Developer',
      recomend: 'Oti Joseph is exactly the sort of software developer any company would love. I met him while struggling with Javascript and React in a software development remote school, he made pair programming so easy and fast, we worked together a lot of times and I must confess, he is an amazing team player. He has a great way of spotting bugs, which was really valuable for me. He is also just a fun person to chat with! If you need to get a job done simply and efficiently, Oti Joseph is definitely the person for you.',
    },
    {
      img: laura,
      id: 5,
      name: 'Laura Amaka Konwea',
      role: 'Software Developer',
      recomend: 'Joseph is a very smart and a creative person. We have worked together on many projects, where I have seen his collaborative skills, his contributions and ideas so I can say for a fact he will be an asset to any company. He has actually being of great help to me, been senior to me at Microverse as well. I will definitely recommend him, as he will give any company the worth they need. ',
    },
  ];
  return (
    <div id="recommendations">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>Testimonials</b>
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        mousewheel
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
        data-aos="fade-up"
      >
        {
          recomend.map((recommended) => (
            <SwiperSlide key={recommended.id}>
              <div className="recomend-con">
                <div className="recomend-img"><img className="wrap-img" src={recommended.img} alt={recommended.name} /></div>
                <h2>{recommended.name}</h2>
                <p>{recommended.role}</p>
                <div className="quote-con">
                  <small>
                    <span>
                      <FaQuoteLeft className="quote" />
                    </span>
                    {recommended.recomend}
                    <span>
                      <FaQuoteRight className="quote" />
                    </span>
                  </small>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Recommendation;
