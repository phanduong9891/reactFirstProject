import React from "react";
import axios from "axios";
import './RelativesStyle.css'

export default function Relatives() {
  async function getAllRelatives() {
    try {
      const allRelatives = await axios.get(
        "http://localhost:8080/api/relatives"
      );
      const newTable = document.createElement("table");
      
      const thFirsName = document.createElement("th");
      const thLastName = document.createElement("th");
      const thRelationship = document.createElement("th");
      const thPhone = document.createElement("th");
      const thIdCard = document.createElement("th");

      thFirsName.innerHTML = "First Name";
      thLastName.innerHTML = "Last Name";
      thRelationship.innerHTML = "Relationship";
      thPhone.innerHTML = "Phone Number";
      thIdCard.innerHTML = "Id Card Number";

      newTable.appendChild(thFirsName);
      newTable.appendChild(thLastName);
      newTable.appendChild(thRelationship);
      newTable.appendChild(thPhone);
      newTable.appendChild(thIdCard);

      
     
      for (let p of allRelatives.data) {
        const newTr = document.createElement('tr');
      const row = newTable.appendChild(newTr);

      const tdFirstName = document.createElement('td');
      const tdLastName = document.createElement('td');
      const tdRelationship = document.createElement('td');
      const tdPhone = document.createElement('td');
      const tdIdCard = document.createElement('td');

      tdFirstName.innerHTML = p.firstName;
      tdLastName.innerHTML = p.lastName;
      tdRelationship.innerHTML = p.relationship;
      tdPhone.innerHTML = p.phoneNumber;
      tdIdCard.innerHTML = p.idCardNumber;

      row.appendChild(tdFirstName);
      row.appendChild(tdLastName);
      row.appendChild(tdRelationship);
      row.appendChild(tdPhone);
      row.appendChild(tdIdCard);
        
       

        // newPTag.innerHTML = p.firstName + p.lastName;
      }
      const parent = document.querySelector("#mother");
      parent.appendChild(newTable);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="mother">
      <button type="button" class="btn btn-primary" onClick={getAllRelatives}>
        Show all relatives
      </button>
    </div>
  );
}

