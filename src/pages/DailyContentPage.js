import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Card,
  Icon,
  Button,
  Header,
  Image,
  Modal,
  Segment,
} from "semantic-ui-react";

import "../App.css";
import Slider from "../components/Slider/Slider";

function DailyContent({ setIsLoggedIn }) {
  const history = useHistory();

  let { id } = useParams();
  async function loggedOut() {
    history.push("/");
  }

  async function back() {
    history.push("/AllContent");
  }

  //   console.log(id);
  //   let date = 1;

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
      <Slider />
    </>
  );
}

export default DailyContent;
