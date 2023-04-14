import { v4 as uuidv4 } from 'uuid';
import techomeImg from '../images/techome-demo.jpeg';
import proxmoxImg from '../images/proxmox-demo.jpeg';
import solDeployImg from '../images/sol_deployer.jpeg';
import nodeFarmImg from '../images/nodeFarm.png';
import gsdImage from '../images/gsDelivery-desktop.png';

const projects = [
  {
    id: uuidv4(),
    name: '🚚 Good Skills Delivery Services',
    link: 'https://ahmedev.me/Good-Skills-Delivery-Frontend',
    technology: ['ReactJS', 'Leaflet-Maps', 'OPenStreetMap'],
    desc: 'Landing Page of Courier company based in Dubai, UAE. The frontend was developed using ReactJs along with integration of react-leaflet-map for customers to easily provide the pickup and drop off location.',
    img: gsdImage,
  },
  {
    id: uuidv4(),
    name: '🧑‍💻 Techome - Ecommerce Store',
    link: 'https://github.com/Th3Un1qu3M4n/techome.pak',
    technology: ['Laravel', 'Javascript', 'TinyMCE', 'MySQL'],
    desc: 'A full fledged ecommerce management system developed in Laravel framwork. Jquery Ajax is also used to load dynamic content without refereshing the pages. TinyMCE is also integerated to allow easy creation of porducts pages. ',
    img: techomeImg,
  },
  {
    id: uuidv4(),
    name: '🌽 Node Farm - Product Listing Website',
    link: 'https://github.com/Th3Un1qu3M4n/NodeFarm',
    technology: ['Node JS', 'Node fs Module'],
    desc: 'A demo project made in Node Js that uses the file system (fs) module to read products from json file on the system and serves template pages using the data available.',
    img: nodeFarmImg,
  },
  {
    id: uuidv4(),
    name: ' 🔗 Solidity Smart Contract Deployer',
    link: 'https://github.com/Th3Un1qu3M4n/smart-contract-deployer-python',
    technology: ['Solidity', 'Python', 'Web3.py', 'Ganache-CLI'],
    desc: 'A python program that compiles and deploy the contract on ganache blockchain. Another small program is also developed that help interact with the escrow contract that is deployed using the deployer.',
    img: solDeployImg,
  },
  {
    id: uuidv4(),
    name: ' 🛠️ Proxmox Server',
    link: '#',
    technology: ['Proxmox', 'HASS.io', 'Motion Eye', 'Ubuntu Server'],
    desc: 'A proxmox server spinned up locally by repurposing an old PC. Home Assistant Server is also installed that connects to various devices on the local netwowrk. Motion Eye is used to locally record as well as upload CCTV footage to cloud servers.',
    img: proxmoxImg,
  },
];

export default projects;
