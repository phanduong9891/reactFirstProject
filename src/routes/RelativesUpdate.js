import axios from "axios";
import React from "react";

export default function RelativesUpdate() {

  let data1 = "";
  let data2 = "";
  let data3 = "";
  let data4 = "";
  let data5 = "";

const firstNameChangeHandler = (event) => {data1 = event.target.value;}
const lastNameChangeHandler = (event) => {data2 = event.target.value;}
const phoneChangeHandler = (event) => {data3 = event.target.value;}
const idCardChangeHandler = (event) => {data4 = event.target.value;}
const relationshipChangeHandler = (event) => {data5 = event.target.value;}


  async function updateRelatives() {

    const inputData = {
      firstName: data1,
      lastName: data2,
      phoneNumber: data3,
      idCardNumber: data4,
      relationship: data5,
    };
console.log(inputData);
    await axios
      .put("http://localhost:8080/api/relatives", inputData)
      .then((response) => {
        console.log("Employee data updated successfully", response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  return (
    <div>
      <h1 className="text-center">Update a relative</h1>
      <form>
        <div className="form-group">
          <label for="fName">First Name</label>
          <input
            type="text"
            name=""
            id="fNameText"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={firstNameChangeHandler}
          />

          <label for="lName">Last Name</label>
          <input
            type="text"
            name=""
            id="lNameText"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={lastNameChangeHandler}
          />

          <label for="phoneText">Phone number</label>
          <input
            type="text"
            name=""
            id="phoneText"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={phoneChangeHandler}
          />

          <label for="idCardText">Id Card Number</label>
          <input
            type="text"
            name=""
            id="idCardText"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={idCardChangeHandler}
          />

          <label for="relationshipText">Relationship</label>
          <input
            type="text"
            name=""
            id="relationshipText"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={relationshipChangeHandler}
          />

          <button type="button" class="btn btn-primary" onClick={updateRelatives}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

