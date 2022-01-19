import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
// import axios from "axios";
import "../App.css";

const LogInPage = ({ setIsLoggedIn }) => {
  const [formDetails, setFormDetails] = useState({ emailId: "", password: "" });
  const history = useHistory();
  async function submitForm() {
    console.log(formDetails);
    history.push("/AllContent");
  }
  //   try {
  //     console.log(formDetails);
  //     await axios
  //       .post("http://localhost:3005/signin", formDetails)
  //       .then((res) => {
  //         console.log(res);

  //         localStorage.setItem("token", res.data.token);
  //         localStorage.setItem("email", res.data.user_.emailId);
  //         window.location.href = "http://localhost:3000/";
  //       })
  //       .catch((err) => {
  //         localStorage.removeItem("todo-app-token");
  //         localStorage.removeItem("todo-app-email");
  //       });
  //   } catch (err) {}
  // }

  return (
    <>
      <Header
        as="h1"
        color="teal"
        textAlign="center"
        style={{ padding: "2vh" }}
      >
        DAILY CONTENT
      </Header>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, emailId: e.target.value })
                }
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, password: e.target.value })
                }
              />

              <Button color="teal" fluid size="large" onClick={submitForm}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default LogInPage;
