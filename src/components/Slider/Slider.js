import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Card,
  Icon,
  Header,
  Image,
  Modal,
  Segment,
  Button,
} from "semantic-ui-react";

import "../App.css";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

import Data from "../components/data";

export default function Slider() {
  const history = useHistory();

  let { id } = useParams();
  let im = Data.data[id].image;
  async function loggedOut() {
    history.push("/");
  }
  async function back() {
    history.push("/allcourse");
  }
  let t = Data.data[id].title;
  console.log(id);
  let date = 3;
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
      <div className="navbar">
        <Button
          labelPosition="left"
          icon="left chevron"
          content="Back"
          onClick={back}
        />
        <h2 className="ui left floated header">Today's Content</h2>
        <h2 className="ui right floated header">
          <Button onClick={loggedOut} className="ui button">
            Log Out
          </Button>
        </h2>
      </div>

      <div className="container-slider">
        {Data.data[id].topics.map((obj, index) => {
          if (index < date * 4 && index >= (date - 1) * 4) {
            return (
              <div
                className={
                  slideIndex === index - (date - 1) * 4 + 1
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
            );
          }
        })}
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
