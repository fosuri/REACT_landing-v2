import React from "react";
import tickets from "../../assets/Data/tickets.json";
import "./FormSection.css";

export default function FormSection({ selectedTicket }) {
  return (
    <div className="form-section one-screen-section section-space">
      <h2>
        BRONEERI REIS <span className="red-text">KOHE!</span>
      </h2>

      <p className="subtitle">
        Valige piletitüüp ja sisestage oma kontaktandmed. Me võtame teiega
        ühendust ja anname kõik üksikasjad.
      </p>

      <form className="open-form">
        <div className="input-div">
          <select name="ticket" id="ticket" required>
            <option value="" disabled hidden>
              VALI OMA PILET
            </option>
            {tickets.map((ticket, index) => (
              <option
                key={index}
                value={index}
                selected={ticket.type === selectedTicket}
              >
                {ticket.type}
              </option>
            ))}
          </select>
        </div>

        <div className="two-col">
          <div className="input-div">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="TEIE EES - JA PEREKONNANIMI"
              required
            />
          </div>

          <div className="input-div">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="TEIE E-POST"
              required
            />
          </div>
        </div>

        <div className="input-div" id="phone">
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

        <input type="submit" value="BRONEERI" className="button" />
      </form>

      <p className="privacy-policy">
        Nupule «Broneeri reis» vajutades nõustute 
        <a href="/">privaatsuspoliitikaga</a>
      </p>
    </div>
  );
}
