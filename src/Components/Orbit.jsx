import React from 'react'
import loki from "/img/lohieth1.jpg";
import "../css/orbit.css"

export default function Orbit() {
  return (
    <div class="orbit d-flex justify-content-center">
    <div class="center-image">
      <img src={loki} alt=""/>
    </div>
    <ul>
      <li>
        <div><img src={loki} alt=""/></div>
      </li><li>
        <div><img src={loki} alt=""/></div>
      </li><li>
        <div><img src={loki} alt=""/></div>
      </li>
    </ul>
  </div>
  )
}
