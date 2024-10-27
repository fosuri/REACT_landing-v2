import React from 'react'

import "./WhySection.css";
import why from "../../assets/Data/why.json";

export default function WhySection() {
  return (
    <div class="why-section section-space">
      <h2>
        <span class="red-text">MIKS </span>TULLA MEIEGA?
      </h2>

      {why.map((item, index) => {
        const splitTitle = item.title.split(" ");
        return (
          <div
            class={`why-item ${
              index % 2 === 0
                ? "why-container"
                : "why-container why-container-reverse"
            }`}
          >
            <div class="why-info">
              <h3>
                {splitTitle[0]}
                <br />
                {splitTitle[1]}
              </h3>
              <p>{item.description}</p>
            </div>

            <div class="why-image">
              <img src={require(`../../assets/images/${item.image}`)} alt={item.alt} />
            </div>
          </div>
        );
      })}


    </div>
  );
}
