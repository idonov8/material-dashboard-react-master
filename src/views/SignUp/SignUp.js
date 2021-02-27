import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserUp } from "../../actions/userActions";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
    company: "",
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    postalCode: "",
    aboutMe: ""
  });

  const handleOnChange = e => {
    e.persist();
    setUserData(prevUserData => ({
      ...prevUserData,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = () => {
    dispatch(signUserUp(userdata));
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
              <h4 className={classes.cardTitleWhite}>Sign Up</h4>
              <p className={classes.cardCategoryWhite}>Create a New User!</p>
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
                      name: "username",
                      value: userdata.username,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      name: "password",
                      value: userdata.password,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company"
                    id="company"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "company",
                      value: userdata.company,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "email",
                      value: userdata.email,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "firstName",
                      value: userdata.firstName,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "lastName",
                      value: userdata.lastName,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "city",
                      value: userdata.city,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "country",
                      value: userdata.country,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "postalCode",
                      value: userdata.postalCode,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      name: "aboutMe",
                      value: userdata.aboutMe,
                      onChange: e => handleOnChange(e)
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={handleSubmit} color="primary">
                Sign Up
              </Button>
              <GridItem xs={12} sm={12} md={4}>
                <p>
                  Already have a user?
                  <NavLink to="/login" activeClassName="active">
                    {" "}
                    Log In!
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
