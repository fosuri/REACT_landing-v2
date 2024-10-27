import React from "react";
import "./WhoSection.css";
import who from "../../assets/Data/who.json";
export default function WhoSection() {
  return (
    <div class="who-setion">
      <h2>
        KES <span class="red-text">ME OLEME?</span>
      </h2>

      <div class="who-container">
        {who.map((item, index) => {
          const splitName = item.name.split(" ");
          return (
            <div class="who-worker">
              <div class="who-info">
                <h3>
                  {splitName[0]}
                  <br />
                  {splitName[1]}
                </h3>
                <p>{item.description}</p>

                <a href="/">{item.inst}</a>
              </div>

              <div
                class="who-image"
                style={{
                  backgroundImage: `url(${require(`../../assets/images/${item.image}`)})`,
                }}
              >
                <a class="who-inst" href="/">
                  {item.inst}
                </a>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
