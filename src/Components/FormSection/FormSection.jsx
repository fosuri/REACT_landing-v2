import React from "react";
import tickets from "../../assets/Data/tickets.json";
import "./FormSection.css";

export default function FormSection() {
  return (
    <div class="form-section one-screen-section section-space">
      <h2>
        BRONEERI REIS <span class="red-text">KOHE!</span>
      </h2>

      <p class="subtitle">
        Valige piletitüüp ja sisestage oma kontaktandmed. Me võtame teiega
        ühendust ja anname kõik üksikasjad.
      </p>

      <form class="open-form">
        <div class="input-div">
          <select name="ticket" id="ticket" required>
            <option value="" disabled selected hidden>
              VALI OMA PILET
            </option>
            {tickets.map((ticket, index) => {
              return <option value={index}>{ticket.type}</option>;
            })}
          </select>
        </div>

        <div class="two-col">
          <div class="input-div">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="TEIE EES - JA PEREKONNANIMI"
              required
            />
          </div>

          <div class="input-div">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="TEIE E-POST"
              required
            />
          </div>
        </div>

        <div class="input-div" id="phone">
          <select name="phonecode" id="phonecode">
            <option value="372">+372</option>
            <option value="371">+371</option>
            <option value="370">+370</option>
          </select>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            placeholder="9999 9999"
            required
          />
        </div>

        <input type="submit" value="BRONEERI" class="button" />
      </form>

      <p class="privacy-policy">
        Nupule «Broneeri reis» vajutades nõustute 
        <a href="/">privaatsuspoliitikaga</a>
      </p>
    </div>
  );
}
