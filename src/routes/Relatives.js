import React, { useState } from "react";
import axios from "axios";

import "./RelativesStyle.css";
import { click } from "@testing-library/user-event/dist/click";

export default function Relatives() {
  //delete function
  const [relatives, setRelatives] = useState([]);
  async function DeleteRelative(id, e) {
    console.log(id);
    await axios
      .delete(`http://localhost:8080/api/relatives/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // console.log(relatives)

        // setRelatives(relatives.filter((relative) => relative.id !== id));
        // console.log(relatives);
        getAllRelatives();
      });
  }


  //get all function
  async function getAllRelatives() {
    try {
      const allRelatives = await axios.get(
        "http://localhost:8080/api/relatives"
      );
      const tableDiv = document.createElement("div");
      const newTable = document.createElement("table");

      const thId = document.createElement("th");
      const thFirsName = document.createElement("th");
      const thLastName = document.createElement("th");
      const thRelationship = document.createElement("th");
      const thPhone = document.createElement("th");
      const thIdCard = document.createElement("th");
      const thAction = document.createElement("th");
      //haha
      const thUpdate = document.createElement("th")

      thId.innerHTML = "Number";
      thFirsName.innerHTML = "First Name";
      thLastName.innerHTML = "Last Name";
      thRelationship.innerHTML = "Relationship";
      thPhone.innerHTML = "Phone Number";
      thIdCard.innerHTML = "Id Card Number";
      thAction.innerHTML = "Delete";
      //haha
      thUpdate.innerHTML = "Update";

      newTable.appendChild(thId);
      newTable.appendChild(thFirsName);
      newTable.appendChild(thLastName);
      newTable.appendChild(thRelationship);
      newTable.appendChild(thPhone);
      newTable.appendChild(thIdCard);
      newTable.appendChild(thAction);
      //haha
      newTable.appendChild(thUpdate);

      for (let p of allRelatives.data) {
        const newTr = document.createElement("tr");
        const row = newTable.appendChild(newTr);

        const tdId = document.createElement("td");
        const tdFirstName = document.createElement("td");
        const tdLastName = document.createElement("td");
        const tdRelationship = document.createElement("td");
        const tdPhone = document.createElement("td");
        const tdIdCard = document.createElement("td");
        const tdAction = document.createElement("td");
        const delBtn = document.createElement("button");
        delBtn.addEventListener("click", () => DeleteRelative(p.id));
        tdAction.appendChild(delBtn);
        //haha
        const tdUpdate = document.createElement("td");
        const updBtn = document.createElement("button");
        tdUpdate.appendChild(updBtn);

        tdId.innerHTML = p.id;
        tdFirstName.innerHTML = p.firstName;
        tdLastName.innerHTML = p.lastName;
        tdRelationship.innerHTML = p.relationship;
        tdPhone.innerHTML = p.phoneNumber;
        tdIdCard.innerHTML = p.idCardNumber;
        delBtn.innerHTML = "Delete";
        updBtn.innerHTML = "Update";

        row.appendChild(tdId);
        row.appendChild(tdFirstName);
        row.appendChild(tdLastName);
        row.appendChild(tdRelationship);
        row.appendChild(tdPhone);
        row.appendChild(tdIdCard);
        row.appendChild(tdAction);
        row.appendChild(tdUpdate);

        // newPTag.innerHTML = p.firstName + p.lastName;
      }
      const parent = document.querySelector("#table-content");
      parent.innerHTML = "";
      parent.appendChild(newTable);
      // parent.removeChild(newTable);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="mother">
      <button type="button" class="btn btn-secondary rounded-pill mt-2" onClick={getAllRelatives}>
        Show all relatives
      </button>
      <div id="table-content"></div>
      {/* <button type="button" class="btn btn-primary" onClick={addRelatives}>
        Add a relative
      </button> */}
    </div>
  );
}
