import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    dispatch(
      fetchUser({
        username: username,
        password: password
      })
    );
  };
  return (
    <div>
      <GridContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px 0",
          textAlign: "center"
        }}
      >
        <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Login</h4>
              <p className={classes.cardCategoryWhite}>Login to Your User</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: username,
                      onChange: e => setUsername(e.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      value: password,
                      onChange: e => setPassword(e.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={handleSubmit} color="primary">
                Login
              </Button>
              <GridItem xs={12} sm={12} md={4}>
                <p>
                  Don`&apos;`t have a user?
                  <NavLink to="/signup" activeClassName="active">
                    {" "}
                    Sign Up!
                  </NavLink>
                </p>
              </GridItem>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
