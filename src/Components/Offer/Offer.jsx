import React, { useState } from "react";
import HiddenForm from "../HiddenForm/HiddenForm";
import images from "../../assets/Data/offer.json";
import "./Offer.css";

export default function Offer({ scrollToSection, refs }) {
  const [formVisible, setFormVisible] = useState(false);

  const openForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="one-screen-section offer section-space" id="offer">
      <h2>
        <span className="red-text">KUUM </span>PAKKUMINE
      </h2>
      <div className="offer-content">
        <div className="offer-info">
          <h3>KEENIA</h3>
          <p className="offer-description">
            Suunduge seikluste ja imelise looduse maailma meie
            ekskursioonireisiga Keeniasse! Alates hämmastavatest savannidest ja
            iidsetest hõimudest kuni piiramatute India ookeani randadeni — teid
            ootab unustamatu reis, mis on täis erksaid elamusi.
          </p>
          <div className="offer-details">
            <p>Rühm: KUNI 12 inimest</p>
            <p> Reisi aeg: 22. - 29. MAI</p>
          </div>
          <a
            className="button"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.whyRef);
            }}
          >
            MIKS MEIE?
          </a>
        </div>

        <div className="offer-image-slider">
          <div className="slider-items">
            {images.map((item) => (
              <img
                key={item.image}
                src={require(`../../assets/images/${item.image}`)}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="link-button-container">
        <button type="button" className="link-button" onClick={openForm}>
          Kas soovite saada uudiskirju teiste pakkumiste kohta?
        </button>
      </div>

      {/* Отображение компонента HiddenForm при formVisible === true */}
      {formVisible && <HiddenForm closeForm={closeForm} />}
    </div>
  );
}
