import React from "react";
import "./FirstScreen.css";
import image from "../../assets/images/first_screen.png";

export default function FirstScreen({ scrollToSection, refs }) {
  return (
    <div
      class="first-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div class="first-screen-content">
        <h1>TUUR KEENIASSE</h1>
        <p>
          <strong>
            Avastage põnevaid seiklusi ja ainulaadset loodust meie Keenia
            ekskursioonil!
          </strong>
        </p>
        <a
          className="button"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(refs.offerRef);
          }}
        >
          UURI LÄHEMALT
        </a>
      </div>
    </div>
  );
}
