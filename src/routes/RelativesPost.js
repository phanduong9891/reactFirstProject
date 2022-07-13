import axios from 'axios'
import React from 'react'

export default function RelativesPost() {
async function addRelatives(){
    axios.post('http://localhost:8080/api/relatives')
}

  return (
    <div>RelativesPost</div>
  )
}
