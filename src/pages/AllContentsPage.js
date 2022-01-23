import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Icon,
  Button,
  Header,
  Image,
  Modal,
  Segment,
} from "semantic-ui-react";
import day from "../data/day";
import "../App";

function AllContents() {
  //   const [modalData, setModalData] = React.useState([]);
  //   const [open, setOpen] = React.useState(false);
  const history = useHistory();
  async function readmore() {
    history.push(`/DailyContent`);
  }

  async function loggedOut() {
    history.push("/");
  }
  let newDate = new Date();
  let date = newDate.getDate();
  let i = newDate.getDay();
  console.log(day[i]);
  return (
    <>
      <div className="navbar">
        <h2 className="ui left floated header">ALL CONTENTS</h2>
        <h2 class="ui right floated header">
          <Button onClick={loggedOut} className="ui button">
            Log Out
          </Button>
        </h2>
      </div>
      <div className="grid-container">
        <Card className="grid-item">
          <Image
            src="https://nypost.com/wp-content/uploads/sites/2/2021/11/astrology-sun-moon-rising-signs-1-copy.jpg?quality=90&strip=all&w=744"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Card Title</Card.Header>
            <Card.Meta>
              <span className="date">
                Date:{date} Day:{day[i]}
              </span>
            </Card.Meta>
            <Card.Description>Card description</Card.Description>
            <Card.Content extra>
              <Button
                //   onClick={readmore}
                onClick={() => {
                  readmore();
                }}
                class="ui button"
              >
                More Content
              </Button>
            </Card.Content>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
export default AllContents;
