import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const ServicesStyle = styled.div`
  margin: 5rem 0rem;
  /* margin-bottom: 10rem; */
  .services_container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .services_head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .services_subHeading {
      font-size: 1.2rem;
    }
    .services_heading {
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }
  .services_body {
    display: flex;
    align-items: center;
    /* padding: 0rem 2rem; */
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default function ServicesSection() {
  return (
    <ServicesStyle id="services">
      <div className="container services_container">
        <div className="services_head">
          <p className="services_subHeading">What i will do for you</p>
          <h1 className="services_heading">Services</h1>
        </div>
        <div className="services_body">
          <ServiceCard
            heading="🧑‍💻 Web Development"
            listItems={[
              'Node Js',
              'Express Js',
              'Nest JS',
              'Web Sockets',
              'React Js',
              'Mongo DB',
              'MySQL',
            ]}
          />
          <ServiceCard
            heading="🔗 Blockchain Development"
            listItems={[
              'Solidity Smart Contracts',
              'ERC-20 Tokens',
              'ERC-721 NFT',
              'Generative NFTs',
              'Web3 / Moralis',
            ]}
          />
          <ServiceCard
            heading="🛠️ Server Administration"
            listItems={[
              'AWS / GCP  / Vercel',
              'Debian / Ubuntu Server',
              'Docker / Docker Compose',
              'Nginx / Apache',
              'Deploying Appications',
              'Managing Resources',
              'Server Updates',
            ]}
          />
        </div>
      </div>
    </ServicesStyle>
  );
}
