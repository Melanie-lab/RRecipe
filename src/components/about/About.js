import React from "react";
import strawberries from "./strawberries.jpeg";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Finding zero waste recipes can be tricky. This webpage offers a platform
        for different consumers. Some of you might not be able to attend weekly
        markets or to go to a zero waste shop. It is not always possible to have
        zero waste but reducing the amount of plastic helps as well.{" "}
      </p>
      <p>
        {" "}
        On this webpage you can find different zero waster or reduced waste
        recipes according to your shopping habits. Take a look around and maybe
        you would like to contribute with your own recipe to our recipe stock.
      </p>
      <img src={strawberries} alt="strawberry_image" />
    </div>
  );
};

export default About;
