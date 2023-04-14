import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';

// import projects from '../assets/data/projects';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const ProjectsStyled = styled.div`
  /* margin-top: 5rem; */
  margin: 5rem 0rem;
  /* padding-bottom: 10rem; */
  .projects_container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .projects_head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .projects_subHeading {
      font-size: 1.2rem;
    }
    .projects_heading {
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }
  .projects_body {
    display: flex;
    align-items: center;
    /* padding: 0rem 2rem; */
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    /* position: relative; */
  }
  .swiper {
    max-width: 90%;
    padding-top: 70px;
  }
  .swiper:hover .swiper-wrapper .swiper-slide-active img {
    transform: translateY(calc(-95% + 30vh));
    /* object-position: bottom; */
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 12px;
    z-index: 10;
    right: 80px;
    left: auto;
    top: 0;
  }
  .swiper-button-next {
    right: 20px;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.2rem;
  }
`;

export default function ProjectsSection() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // https://raw.githubusercontent.com/Th3Un1qu3M4n/portfolio-data/main/projects.json

  const getProjects = () => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/Th3Un1qu3M4n/portfolio-data/main/projects.json")
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {getProjects()},[]);

  return (
    <>
    {!loading && <ProjectsStyled id="projects">
      <div className="container projects_container">
        <div className="projects_head">
          <p className="projects_subHeading">Some of my projects</p>
          <h1 className="projects_heading">Projects</h1>
        </div>
        <div className="projects_body">
          <Swiper
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={2000}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            navigation
          >
            {projects.map((projectItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectsCard
                    id={projectItem.id}
                    demoImg={projectItem.img}
                    heading={projectItem.name}
                    listItems={projectItem.technology}
                    link={projectItem.link}
                    desc={projectItem.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectsStyled>
  }
  </>
  );
}
