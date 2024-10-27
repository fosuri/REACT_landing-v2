import React from "react";
import "./HiddenForm.css";

export default function HiddenForm({ closeForm }) {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    closeForm();
  };

  return (
    <div className="hidden-form-overlay" onClick={closeForm}>
      <div className="hidden-form-container" onClick={handleContainerClick}>
        <svg
          onClick={closeForm}
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#1d1d1d"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>

        <h3>Kas soovite saada uudiskirju teiste pakkumiste kohta?</h3>
        <form action="" className="hidden-form" onSubmit={handleSubmit}>
          <div className="input-div">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Sisestage e-posti aadress"
              required
            />
          </div>
          <button type="submit" className="button" >
            TELLIMA
          </button>
        </form>
      </div>
    </div>
  );
}
