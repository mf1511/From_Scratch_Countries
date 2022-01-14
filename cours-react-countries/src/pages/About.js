import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>À propos</h1>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque facere
        velit harum quidem quo tempore atque fugiat eveniet corporis. Cupiditate
        possimus exercitationem facere molestias nihil soluta earum aperiam
        numquam hic.
      </p>
      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cumque
        facere quae adipisci necessitatibus dolorum molestiae obcaecati itaque
        quo, perferendis dolor laborum illum vel blanditiis, sint doloremque.
        Dicta, nulla dolor.
      </p>
    </div>
  );
};

export default About;
