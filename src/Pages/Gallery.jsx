import React from "react";
import "./Gallery.css";
import imag1 from "../assets/1-1.png";
import imag2 from "../assets/2-2.png";
import imag3 from "../assets/3-3.png";
import imag4 from "../assets/4-4.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { FaLongArrowAltRight } from 'react-icons/fa';


const Gallery = () => {
  const data = [
    {
      imgg: image1,
      img2: imag1,
      name: "FENNEX",
      type:"FOX",
      title: "India",
    },
    {
      imgg: image2,
      img2: imag2,
      name: "HUMPBACK",
      type:"WHALE",
      title: "South Africa",
    },
    {
      imgg: image3,
      img2: imag3,
      name: "COMMON BROWN",
      type:"BABOON",
      title: "South Africa",
    },
    {
      imgg: image4,
      img2: imag4,
      name: "SPOOTED",
      type:"DEER",
      title: "Amazon",
    },
  ];

  return (
    <section className="gallery">
      <div className="container">
        {Array.isArray(data) &&
          data.map((d, index) => (
            <div className="card" key={index} >
              <img src={d.imgg} alt="" />
              <img src={d.img2} alt="" className="imgg"/>
              <div className="gradient-overlay"></div>
              <div className="focus">
            </div>
            <div className="text">
              <h1>{d.name}</h1>
              <h3>{d.type}</h3>
              <h2>{d.title}</h2>
            </div>
            <div className="more">
              <span>know more <FaLongArrowAltRight className="icon" /></span>
              </div>
            </div>

            
          ))}
      </div>
    </section>
  );
};

export default Gallery;
