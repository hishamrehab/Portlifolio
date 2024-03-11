import React from "react";
import "./Main.css";
import Card from "./Card";

import blog from "../../images/blog-4.jpg";
import logo from "../../images/logo.png";
import gallery from "../../images/gallery-3 (1).jpg";
import work from "../../images/work-2.jpg";
import heroPanner from "../../images/hero-banner (1).png";
const Main = () => {
  return (
    <main>
      {/* =================================================== */}
      <h2>MainSkills</h2>
      <section className="flex left-section">
        <div>Html</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React Js</div>
        <div>ReduxToolkit</div>
        <div>Bootstrap</div>
        <div>Tailwand Css</div>
        <div>MUI</div>

        <div>Scss</div>
        <div>Responsiveness</div>
        <div>Adaptive Design</div>
      </section>

      {/* { imgUrl, title, subTitle, githubLink, liveDemo } */}
      {/* ================================================= */}
      <section className="flex right-section">
        <Card
          imgUrl={blog}
          title="Ecommerce Website"
          subTitle="Utilizing React , CSS  , Bootstrap , Tailwind , Material-UI (MUI)  ,Axios , Axios , •Redux Toolkit , SCSS and Swiper and deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/EcommerceWebsiteWithReduxToolkit"
          liveDemo="https://ecommerce-react--reduxtoolkit.web.app/"
        />

        <Card
          imgUrl={gallery}
          title="Tours Website"
          subTitle="Utilizing Seamlessly integrated React Router, Material-UI (MUI) ,MUI Icons and Axios to optimize navigation and streamline API data retrieval for an exceptional user experience.deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/Tours-Website-React-js"
          liveDemo="https://tours-website-react-js.vercel.app/"
        />

        <Card
          imgUrl={logo}
          title="YouTube Clone"
          subTitle="Utilizing Seamlessly integrated React Router, Material-UI (MUI) ,MUI Icons and Axios to optimize navigation and streamline API data retrieval for an exceptional user experience.deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/YouTube"
          liveDemo="https://you-tube-nzf7.vercel.app/"
        />

        <Card
          imgUrl={work}
          title="Cars Store"
          subTitle=" Utilizing HTML, CSS, JavaScript, Bootstrap, Font Awesome, AOS, and Tailwind CSS , Jquery , FirebaseSeam (MUIdata retrievalce) and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/carsStore"
          liveDemo="https://cars-store-omega.vercel.app/"
        />

        <Card
          imgUrl={heroPanner}
          title="Education Website"
          subTitle=" Utilizing HTML, CSS, JavaScript, Bootstrap, Font Awesome, AOS, and Tailwind CSS , Jquery , FirebaseSeam (MUIdata retrievalce) and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Education-Website"
          liveDemo="https://education-website-black.vercel.app/"
        />
      </section>
    </main>
  );
};

export default Main;
