import React from "react";
import axios from "axios";

export default function Relatives() {
  async function getAllRelatives() {
    try {
      const allRelatives = await axios.get(
        "http://localhost:8080/api/relatives"
      );
      for(let p of allRelatives.data){
    //   const firstP = allRelatives.data[0];

      const newPTag = document.createElement("p");
      newPTag.innerHTML = p.firstName + " " + p.lastName;

      const parent = document.querySelector("#mother");

      parent.appendChild(newPTag);}
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
