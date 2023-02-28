"use strict";(self.webpackChunkahmedev_me=self.webpackChunkahmedev_me||[]).push([[337],{2875:function(n,e,i){i.r(e),i.d(e,{default:function(){return V}});var r,t=i(2791),o=i(9439),a=i(168),s=i(5751),d=i(6856),c=i(5667),l=i(184),m=s.ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      cursor: pointer;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      color: var(--gray-1);\n      font-weight: bold;\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1.2rem;\n    top: 1.2rem;\n    width: 3rem;\n    background-color: var(--gray-2);\n    border-radius: 0.5rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n  }\n  .CloseNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    --right: 1rem;\n    padding: 0;\n\n    .hidden-item {\n      transform: translateX(calc(100% + var(--right)));\n    }\n    .mobile-menu-icon {\n      display: inline-block;\n    }\n    .navItems {\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 100%;\n      max-width: 200px;\n      border-radius: 1rem;\n      position: absolute;\n      right: var(--right);\n      top: 1rem;\n      .CloseNavIcon {\n        display: block;\n        width: 1.5rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 0.5rem;\n        cursor: pointer;\n        a {\n          border-radius: 1rem;\n          /* cursor: pointer; */\n          &:hover {\n            background-color: var(--gray-2);\n          }\n        }\n      }\n    }\n  }\n"])));function h(){var n=(0,t.useState)(!1),e=(0,o.Z)(n,2),i=e[0],r=e[1];return(0,l.jsxs)(m,{onClick:function(){return r(!i)},role:"button",onKeyDown:function(){return r(!i)},tabIndex:0,children:[(0,l.jsx)("div",{className:"mobile-menu-icon",children:(0,l.jsx)(d.xXU,{})}),(0,l.jsxs)("ul",{className:i?"navItems":"navItems hidden-item",children:[(0,l.jsx)("div",{className:"CloseNavIcon",onClick:function(){return r(!i)},role:"button",onKeyDown:function(){return r(!i)},tabIndex:0,children:(0,l.jsx)(d.FU5,{})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-100,duration:500,children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-100,duration:500,children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{activeClass:"active",to:"services",spy:!0,smooth:!0,offset:-100,duration:500,children:"Services"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-100,duration:1e3,children:"Projects"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-100,duration:500,children:"Contact"})})]})]})}var p,g=i(3504),x=i(6871),u=i(2568),b=i(2741),f=i(6355),v=i(3959),j=i(614),y=s.ZP.div(p||(p=(0,a.Z)(["\n  margin: 5rem 0rem;\n  min-height: calc(100vh - 5rem);\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  .hero_heading {\n    /* margin-top: 10vh; */\n    font-size: 2rem;\n    margin-bottom: -2rem;\n    position: relative;\n    span {\n      display: block;\n      width: 100%;\n    }\n    .hero_name {\n      font-size: 4rem;\n      text-shadow: -1px 2px;\n    }\n  }\n\n  .hero_image {\n    max-width: 700px;\n    width: 100%;\n    height: 600px;\n    margin: auto;\n    .hero-img {\n      width: 100%;\n      margin: 0 auto;\n      box-shadow: -2px 2px 35px 5px;\n      transition: all 1s ease-in-out;\n      /* position: relative; */\n      &:hover {\n        box-shadow: -2px 2px 65px 10px;\n      }\n    }\n  }\n  .hero_info {\n    position: absolute;\n    max-width: 650px;\n    width: 100%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin-top: -5rem;\n    font-size: 2rem;\n    background-color: rgba(0, 0, 0, 0.6);\n    padding: 2rem;\n    p {\n      font-weight: bolder;\n    }\n  }\n  .social-icons {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    /* margin-bottom: -2rem; */\n    a {\n      margin: 1rem;\n      width: 2rem;\n      .social-img:hover path {\n        color: white;\n      }\n    }\n  }\n  @media only screen and (max-width: 786px) {\n    min-height: 80vh;\n    .hero_heading {\n      font-size: 1.5rem;\n      margin-bottom: -1rem;\n      .hero_name {\n        font-size: 2rem;\n        text-shadow: -1px 1px 2px;\n      }\n    }\n    .hero_image {\n      max-width: 90vw;\n      width: 100%;\n      height: 100vw;\n      margin: auto;\n      .hero-img {\n        width: 100%;\n        margin: 0 auto;\n      }\n    }\n    .hero_info {\n      width: 80%;\n      margin-top: -2rem;\n      font-size: 1rem;\n      padding: 0.2rem;\n      /* background-color: transparent; */\n      box-shadow: -2px 2px 15px 5px #111111;\n      p {\n        font-weight: bolder;\n      }\n    }\n  }\n"])));function w(){return(0,l.jsx)(v.ZP,{height:50,once:!0,placeholder:(0,l.jsx)(j.Z,{}),children:(0,l.jsx)(y,{id:"home",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("h1",{className:"hero_heading",children:[(0,l.jsx)("span",{children:"Hi, This is"}),(0,l.jsx)("span",{className:"hero_name",children:"Muhammad Ahmed"})]}),(0,l.jsx)("div",{className:"hero_image",children:(0,l.jsx)("img",{src:u,alt:"hero-img",className:"hero-img",loading:"lazy"})}),(0,l.jsx)("div",{className:"hero_info",children:(0,l.jsx)(b.Z,{loop:1/0,wrapper:"p",steps:["Web Developer",2e3,"Blockchain Developer",2e3,"Linux Server Administrator",1e3]})}),(0,l.jsxs)("div",{className:"social-icons",children:[(0,l.jsx)("a",{href:"https://github.com/th3un1qu3m4n",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(f.hJX,{className:"social-img"})}),(0,l.jsx)("a",{href:"https://www.linkedin.com/in/th3un1qu3m4n/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(f.ltd,{className:"social-img"})})]})]})})})}var _,k,N=i(5134),S=s.ZP.div(_||(_=(0,a.Z)(["\n  margin: 5rem 0rem;\n  /* height: 100vh; */\n  .about_container {\n    /* margin-top: 1rem; */\n    display: flex;\n    /* width: 100%; */\n    padding: 1rem;\n    .about_left {\n      flex: 1.2;\n      text-align: justify;\n      .about_subHeading {\n        font-size: 1.2rem;\n      }\n      .about_heading {\n        font-size: 3rem;\n        font-weight: bold;\n        text-transform: uppercase;\n        margin-bottom: 1rem;\n      }\n      .about_break {\n        width: 18rem;\n        margin-bottom: 1rem;\n      }\n      .about_desc {\n        max-width: 600px;\n      }\n    }\n\n    .about_right {\n      flex: 0.8;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      .about_img_container {\n        width: 55%;\n        height: 25vh;\n        overflow: hidden;\n        object-fit: cover;\n        object-position: top;\n        box-shadow: 30px -25px 2px 0px var(--gray-1);\n        border-radius: 1rem;\n        .about-img {\n          width: 100%;\n          object-fit: cover;\n          object-position: top;\n          transition: all 5s ease-out;\n          &:hover {\n            object-position: bottom;\n          }\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .about_container {\n      flex-direction: column;\n      .about_left {\n        /* margin-top: 2rem; */\n        flex: 1;\n        text-align: left;\n      }\n      .about_right {\n        margin-top: 2rem;\n        flex: 1;\n        .about_img_container {\n          box-shadow: 20px -15px 2px 0px var(--gray-1);\n        }\n      }\n    }\n  }\n"])));function C(){return(0,l.jsx)(S,{id:"about",children:(0,l.jsxs)("div",{className:"container about_container",children:[(0,l.jsxs)("div",{className:"about_left",children:[(0,l.jsx)("p",{className:"about_subHeading",children:"Let me introduce myself"}),(0,l.jsx)("h1",{className:"about_heading",children:"About Me"}),(0,l.jsx)("p",{className:"about_desc",children:"I am a person who's just fond of developing. Currently doing my undergraduate in Computer Science from Comsats University, Islamabad and learning Blockchain Developement along Google Cloud Platform with hands-on practice. I believe in working hard and nonstop learning."})]}),(0,l.jsx)("div",{className:"about_right",children:(0,l.jsx)("div",{className:"about_img_container",children:(0,l.jsx)("img",{src:N,alt:"about-img",className:"about-img"})})})]})})}var Z,I=s.ZP.div(k||(k=(0,a.Z)(["\n  border: 2px solid var(--gray-2);\n  margin: 1rem 1rem;\n  border-radius: 1rem;\n  min-width: 18vw;\n\n  h3 {\n    padding: 1rem;\n    background-color: var(--gray-2);\n    color: var(--gray-1);\n  }\n  ul {\n    padding: 1rem;\n  }\n  li {\n    line-height: 1.6rem;\n    list-style: disc;\n    list-style-position: inside;\n  }\n"])));function z(n){var e=n.heading,i=n.listItems.map((function(n,e){return(0,l.jsx)("li",{children:n},e)}));return(0,l.jsxs)(I,{children:[(0,l.jsx)("div",{className:"scard-head",children:(0,l.jsx)("h3",{children:e})}),(0,l.jsx)("ul",{children:i})]})}var P,M=s.ZP.div(Z||(Z=(0,a.Z)(["\n  margin: 5rem 0rem;\n  /* margin-bottom: 10rem; */\n  .services_container {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  .services_head {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .services_subHeading {\n      font-size: 1.2rem;\n    }\n    .services_heading {\n      font-size: 3rem;\n      font-weight: bold;\n      text-transform: uppercase;\n      margin-bottom: 2rem;\n    }\n  }\n  .services_body {\n    display: flex;\n    align-items: center;\n    /* padding: 0rem 2rem; */\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"])));function A(){return(0,l.jsx)(M,{id:"services",children:(0,l.jsxs)("div",{className:"container services_container",children:[(0,l.jsxs)("div",{className:"services_head",children:[(0,l.jsx)("p",{className:"services_subHeading",children:"What i will do for you"}),(0,l.jsx)("h1",{className:"services_heading",children:"Services"})]}),(0,l.jsxs)("div",{className:"services_body",children:[(0,l.jsx)(z,{heading:"\ud83e\uddd1\u200d\ud83d\udcbb Web Development",listItems:["Node Js","Express Js","Laravel","Mongo DB","MySQL"]}),(0,l.jsx)(z,{heading:"\ud83d\udd17 Blockchain Development",listItems:["Solidity Smart Contracts","ERC-20 Tokens","ERC-721 NFT","Generative NFTs","Web3 / Moralis"]}),(0,l.jsx)(z,{heading:"\ud83d\udee0\ufe0f Server Administration",listItems:["Debian / Ubuntu Server","Nginx / Apache","Deploying Appications","Managing Resources","Server Updates"]})]})]})})}var D=s.ZP.div(P||(P=(0,a.Z)(["\n  border: 2px solid var(--gray-2);\n  margin: 1rem 1rem;\n  border-radius: 2rem;\n  overflow: hidden;\n  display: flex;\n  margin: 0 3%;\n  width: 95%;\n  z-index: 10;\n  .pcard-head {\n    flex: 0.4;\n    height: 100%;\n    max-height: 30vh;\n    img {\n      object-fit: cover;\n      object-position: top;\n      transition: all 3s ease-in-out;\n      /* z-index: 100; */\n      /* &:hover {\n        object-position: bottom;\n      } */\n    }\n  }\n  .pcard-body {\n    flex: 0.6;\n    padding-bottom: 1rem;\n\n    h3 {\n      width: 100%;\n      padding: 1rem;\n      background-color: var(--gray-2);\n      color: var(--gray-1);\n    }\n\n    p {\n      padding: 1rem;\n      display: flex;\n      flex-wrap: wrap;\n      /* justify-content: stretch; */\n      width: 100%;\n      small {\n        padding: 0 0.2rem;\n        opacity: 0.6;\n        flex: 1;\n        flex-wrap: wrap;\n      }\n    }\n    hr {\n      opacity: 0.4;\n    }\n    .p-btn {\n      float: right;\n      display: flex;\n      /* width: 30%; */\n      max-width: 300px;\n      padding: 0.2rem;\n      justify-content: center;\n      align-items: center;\n      border: 1px solid var(--gray-2);\n      background-color: var(--gray-2);\n      border-radius: 2rem;\n      font-size: 1.2rem;\n      font-weight: bold;\n      margin-right: 2rem;\n      .pcard-link {\n        height: 50px;\n        flex: 0.4;\n        margin-right: 0.5rem;\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    .pcard-head {\n      height: 20vh;\n      overflow: hidden;\n    }\n    .pcard-body {\n      /* .p {\n        width: 100%;\n        .small {\n          min-width: 3rem;\n        }\n      } */\n      .p-btn {\n        margin: 0 1rem;\n        font-size: 1rem;\n      }\n    }\n  }\n"])));function U(n){var e=n.demoImg,i=n.heading,r=n.listItems,t=n.desc,o=n.link,a=r.map((function(n,e){return(0,l.jsx)("small",{children:n},e)}));return(0,l.jsxs)(D,{children:[(0,l.jsx)("div",{className:"pcard-head",children:(0,l.jsx)("img",{src:e,alt:""})}),(0,l.jsxs)("div",{className:"pcard-body",children:[(0,l.jsx)("h3",{children:i}),(0,l.jsx)("p",{children:a}),(0,l.jsx)("hr",{}),(0,l.jsx)("p",{children:t}),"#"!==o&&(0,l.jsxs)("a",{href:o,className:"p-btn",children:[(0,l.jsx)(f.hJX,{className:"pcard-link"}),"view on github"]})]})]})}var T,L=i(9207),H=i(4704),J=i(2810),E=i(4049),W=i(438),F=i(2171),q=i(2243),R=i(6046),B=[{id:(0,J.Z)(),name:"\ud83d\ude9a Good Skills Delivery Services",link:"https://ahmedev.me/Good-Skills-Delivery-Frontend",technology:["ReactJS","Leaflet-Maps","OPenStreetMap"],desc:"Landing Page of Courier company based in Dubai, UAE. The frontend was developed using ReactJs along with integration of react-leaflet-map for customers to easily provide the pickup and drop off location.",img:R},{id:(0,J.Z)(),name:"\ud83e\uddd1\u200d\ud83d\udcbb Techome - Ecommerce Store",link:"https://github.com/Th3Un1qu3M4n/techome.pak",technology:["Laravel","Javascript","TinyMCE","MySQL"],desc:"A full fledged ecommerce management system developed in Laravel framwork. Jquery Ajax is also used to load dynamic content without refereshing the pages. TinyMCE is also integerated to allow easy creation of porducts pages. ",img:E},{id:(0,J.Z)(),name:"\ud83c\udf3d Node Farm - Product Listing Website",link:"https://github.com/Th3Un1qu3M4n/NodeFarm",technology:["Node JS","Node fs Module"],desc:"A demo project made in Node Js that uses the file system (fs) module to read products from json file on the system and serves template pages using the data available.",img:q},{id:(0,J.Z)(),name:" \ud83d\udd17 Solidity Smart Contract Deployer",link:"https://github.com/Th3Un1qu3M4n/smart-contract-deployer-python",technology:["Solidity","Python","Web3.py","Ganache-CLI"],desc:"A python program that compiles and deploy the contract on ganache blockchain. Another small program is also developed that help interact with the escrow contract that is deployed using the deployer.",img:F},{id:(0,J.Z)(),name:" \ud83d\udee0\ufe0f Proxmox Server",link:"#",technology:["Proxmox","HASS.io","Motion Eye","Ubuntu Server"],desc:"A proxmox server spinned up locally by repurposing an old PC. Home Assistant Server is also installed that connects to various devices on the local netwowrk. Motion Eye is used to locally record as well as upload CCTV footage to cloud servers.",img:W}];i(4676),i(5965),i(4432),i(5880);H.ZP.use([H.W_,H.tl,H.pt,H.xW]);var G=s.ZP.div(T||(T=(0,a.Z)(["\n  /* margin-top: 5rem; */\n  margin: 5rem 0rem;\n  /* padding-bottom: 10rem; */\n  .projects_container {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  .projects_head {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .projects_subHeading {\n      font-size: 1.2rem;\n    }\n    .projects_heading {\n      font-size: 3rem;\n      font-weight: bold;\n      text-transform: uppercase;\n      margin-bottom: 2rem;\n    }\n  }\n  .projects_body {\n    display: flex;\n    align-items: center;\n    /* padding: 0rem 2rem; */\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 100%;\n    /* position: relative; */\n  }\n  .swiper {\n    max-width: 90%;\n    padding-top: 70px;\n  }\n  .swiper:hover .swiper-wrapper .swiper-slide-active img {\n    transform: translateY(calc(-95% + 30vh));\n    /* object-position: bottom; */\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background-color: var(--deep-dark);\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 12px;\n    z-index: 10;\n    right: 80px;\n    left: auto;\n    top: 0;\n  }\n  .swiper-button-next {\n    right: 20px;\n  }\n  .swiper-button-prev:after,\n  .swiper-button-next:after {\n    font-size: 1.2rem;\n  }\n"])));function X(){return(0,l.jsx)(G,{id:"projects",children:(0,l.jsxs)("div",{className:"container projects_container",children:[(0,l.jsxs)("div",{className:"projects_head",children:[(0,l.jsx)("p",{className:"projects_subHeading",children:"Some of my projects"}),(0,l.jsx)("h1",{className:"projects_heading",children:"Projects"})]}),(0,l.jsx)("div",{className:"projects_body",children:(0,l.jsx)(L.tq,{centeredSlides:!0,spaceBetween:50,slidesPerView:1,loop:!0,speed:2e3,autoplay:{delay:2e3,disableOnInteraction:!0},navigation:!0,children:B.map((function(n,e){return(0,l.jsx)(L.o5,{children:(0,l.jsx)(U,{id:n.id,demoImg:n.img,heading:n.name,listItems:n.technology,link:n.link,desc:n.desc})},e)}))})})]})})}function K(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(w,{}),(0,l.jsx)(C,{}),(0,l.jsx)(A,{}),(0,l.jsx)(X,{})]})}var V=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g.VK,{children:[(0,l.jsx)(h,{}),(0,l.jsx)(x.Z5,{children:(0,l.jsx)(x.AW,{path:"/",exact:!0,element:(0,l.jsx)(K,{})})})]})})}},5134:function(n,e,i){n.exports=i.p+"static/media/about-img.6c4cd0f7e1fb8c8bb6d0.jpg"},6046:function(n,e,i){n.exports=i.p+"static/media/gsDelivery-desktop.a1e53c27c73a4477343b.png"},2568:function(n,e,i){n.exports=i.p+"static/media/hero-img.72ead631021e36e8f9e3.jpg"},2243:function(n,e,i){n.exports=i.p+"static/media/nodeFarm.b4bc7bf4c7b93eabbc57.png"},438:function(n,e,i){n.exports=i.p+"static/media/proxmox-demo.9755a9065d46190b1fa1.jpeg"},2171:function(n,e,i){n.exports=i.p+"static/media/sol_deployer.0b475b686e63dfb7f4b8.jpeg"},4049:function(n,e,i){n.exports=i.p+"static/media/techome-demo.344f287717da366b399c.jpeg"}}]);
//# sourceMappingURL=337.b69768b4.chunk.js.map