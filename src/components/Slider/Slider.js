import React, { useState } from "react";

import {
  Card,
  Icon,
  Header,
  Image,
  Modal,
  Segment,
  Button,
} from "semantic-ui-react";

import "../../App.css";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

import data from "../../data/data";

export default function Slider() {
  let day = 1;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 4) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 4) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(4);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="container-slider">
        <div className={slideIndex === 1 ? "slide active-anim" : "slide"}>
          <Card className="cardbody" fluid="1">
            <Image src={data.chakra[day].image} className="cardbody" />
            <Card.Content textAlign="center">
              <Card.Header>{data.chakra[day].title}</Card.Header>
              <Card.Description>{data.chakra[day].des}</Card.Description>
            </Card.Content>
          </Card>
        </div>
        {/* <div
                className={
                  slideIndex === 2
                    ? "slide active-anim"
                    : "slide"
                }
              >
                <Card className="cardbody" fluid="1">
                  <Image src={im} className="cardbody" />
                  <Card.Content textAlign="center">
                    <Card.Header>{t}</Card.Header>
                    <Card.Description>{obj}</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div
                className={
                  slideIndex === 3
                    ? "slide active-anim"
                    : "slide"
                }
              >
                <Card className="cardbody" fluid="1">
                  <Image src={im} className="cardbody" />
                  <Card.Content textAlign="center">
                    <Card.Header>{t}</Card.Header>
                    <Card.Description>{obj}</Card.Description>
                  </Card.Content>
                </Card>
              </div> */}
        {/* <div
                className={
                  slideIndex === 4
                    ? "slide active-anim"
                    : "slide"
                }
              >
                <Card className="cardbody" fluid="1">
                  <Image src={im} className="cardbody" />
                  <Card.Content textAlign="center">
                    <Card.Header>{t}</Card.Header>
                    <Card.Description>{obj}</Card.Description>
                  </Card.Content>
                </Card>
              </div> */}

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
