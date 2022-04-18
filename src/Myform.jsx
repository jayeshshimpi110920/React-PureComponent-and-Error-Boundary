import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Component } from "react";

const ariaLabel = { "aria-label": "description" };

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //First Name Required
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "FirstName Cannot be empty";
    } else {
      let len = fields["firstName"].length;
      if (len < 8) {
        formIsValid = false;
        errors["firstName"] = "FirstName Cannot be less than 8 characters";
      }
    }

    // Last Name Required
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "LastName Cannot be empty";
    } else {
      let len = fields["lastName"].length;
      if (len < 8) {
        formIsValid = false;
        errors["lastName"] = "LastName Cannot be less than 8 characters";
      }
    }

    // Address 1 Required
    if (!fields["address1"]) {
      formIsValid = false;
      errors["address1"] = "Address Cannot be empty";
    } else {
      let len = fields["address1"].length;
      if (len < 32) {
        formIsValid = false;
        errors["address1"] = "Address Cannot be less than 32 characters";
      }
    }

    // City Required
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "City Cannot be empty";
    }

    // Zip Required
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Zip-Code Cannot be empty";
    } else {
      let len = fields["zip"].length;
      if (len !== 6) {
        formIsValid = false;
        errors["zip"] = "Must-be Excatly 6 characters";
      }
    }

    // Country Required
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Country Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    if (this.handleValidation() === false) {
      e.preventDefault();
      alert(
        ":( Error While Filling form, Need correction Check Requirement on top of page"
      );
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <Box
        style={{
          border: "1px solid black",
          width: "40%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <h1 style={{ paddingBottom: "10px" }}>Checkout</h1>
        <div
          style={{
            backgroundColor: "red",
            color: "white"
          }}
        >
          <div>{this.state.errors["firstName"]}</div>
          <div> {this.state.errors["lastName"]}</div>
          <div> {this.state.errors["address1"]}</div>
          <div>{this.state.errors["city"]}</div>
          <div> {this.state.errors["zip"]}</div>
          <div> {this.state.errors["country"]}</div>
        </div>
        <h3>Shipping address</h3>
        <br />

        <form>
          <div>
            <Input
              placeholder="First name *"
              inputProps={ariaLabel}
              name="firstName"
              onChange={this.handleChange.bind(this, "firstName")}
              value={this.state.fields["firstName"]}
            />
            &nbsp; &nbsp;&nbsp;{/* // Non breakable space */}
            <Input
              placeholder="Last name *"
              inputProps={ariaLabel}
              name="lastName"
              onChange={this.handleChange.bind(this, "lastName")}
              value={this.state.fields["lastName"]}
            />
            <br />
          </div>
          <Input
            placeholder="Address line 1 *"
            style={{ width: "407px" }}
            name="address1"
            onChange={this.handleChange.bind(this, "address1")}
            value={this.state.fields["address1"]}
          />
          <br />
          <Input
            placeholder="Address line 2"
            style={{ width: "407px" }}
            name="address2"
            onChange={this.handleChange.bind(this, "address2")}
            value={this.state.fields["address2"]}
          />
          <br />
          <Input
            placeholder="City *"
            inputProps={ariaLabel}
            name="city"
            onChange={this.handleChange.bind(this, "city")}
            value={this.state.fields["city"]}
          />
          &nbsp; &nbsp;&nbsp;
          <Input
            placeholder="State/ Province/ Region"
            inputProps={ariaLabel}
            name="state"
            onChange={this.handleChange.bind(this, "state")}
            value={this.state.fields["state"]}
          />
          <br />
          <Input
            placeholder="Zip/ Postal code *"
            inputProps={ariaLabel}
            type="number"
            name="zip"
            onChange={this.handleChange.bind(this, "zip")}
            value={this.state.fields["zip"]}
          />
          &nbsp; &nbsp;&nbsp;
          <Input
            placeholder="Country *"
            inputProps={ariaLabel}
            name="country"
            onChange={this.handleChange.bind(this, "country")}
            value={this.state.fields["country"]}
          />
          <br />
          <FormControlLabel
            control={<Checkbox />}
            label="Use this address for payment details"
          />
          <br />
          <input
            type="submit"
            value="Next"
            onClick={this.contactSubmit.bind(this)}
            className="btn-Next"
          />
        </form>
      </Box>
    );
  }
}
export default Form;
