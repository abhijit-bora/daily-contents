import React, { useState } from "react";

import { Card, Header, Image, List } from "semantic-ui-react";
import { Player, ControlBar, BigPlayButton } from "video-react";
import day from "../../data/day";
import "../../App.css";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import "../../../node_modules/video-react/dist/video-react.css";
import data from "../../data/data";

export default function Slider() {
  let newDate = new Date();
  let date = newDate.getDate();
  let i = newDate.getDay();
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    console.log(date);
    if (slideIndex !== 3) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 3) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(3);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  if (slideIndex === 1) {
    return (
      <div className="container-slider">
        <div className={slideIndex === 1 ? "slide active-anim" : "slide"}>
          <Card fluid="1">
            <Image src={data.chakra[i].image} className="cardbody" />
            <Card.Content textAlign="center" style={{ height: "100%" }}>
              <Card.Header style={{ height: "80%" }}>
                {data.chakra[i].title}
              </Card.Header>
              <Card.Description>{day[i]}</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    );
  } else if (slideIndex === 2) {
    return (
      <div className="container-slider">
        <div className={slideIndex === 2 ? "slide active-anim" : "slide"}>
          <Card style={{ height: "100%" }} fluid="1" centered={true}>
            <Card.Content textAlign="center">
              <Header as="h1" textAlign="center">
                Affirmations:
              </Header>

              <List as="ul" size="massive" divided textAlign="center">
                {data.chakra[i].des.map((obj) => {
                  return (
                    <List.Item>
                      <List.Content>
                        <List.Header as="s1">{obj}</List.Header>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Card.Content>
          </Card>
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    );
  } else if (slideIndex === 3) {
    return (
      <div className="container-slider">
        <div className={slideIndex === 3 ? "slide active-anim" : "slide"}>
          <Card fluid="1">
            <Player src={`videos/${date}.mp4`}>
              <BigPlayButton position="center" />
              <ControlBar autoHide={false} disableDefaultControls={true} />
            </Player>

            <Card.Content textAlign="center">
              <Card.Header>Daily Concentration</Card.Header>
            </Card.Content>
          </Card>
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  {
    /* <div
                className={
                  slideIndex === 3+
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
              </div> */
  }
}
