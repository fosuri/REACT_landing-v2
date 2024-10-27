import React from "react";
import tickets from "../../assets/Data/tickets.json";
import "./TicketsSection.css";

export default function TicketsSection({ scrollToSection, refs }) {
  return (
    <div class="tickets-section one-screen-section section-space">
      <h2>PILETID JA HINNAD</h2>
      <p class="subtitle">
        Vaatama sellel, mis pileti te valisite, te saate täieliku ekskursiooni
        programmi
      </p>
      <div class="tickets">
        {tickets.map((ticket, index) => {
          const splitDesc = ticket.description.split(", ");
          const newPrice = ticket.price - 201;
          return (
            <div class="ticket">
              <div class="ticket-head">
                <p>{ticket.type}</p>
                <p>
                  <sup>{ticket.price}€</sup>
                  <strong>{newPrice}€</strong>
                </p>
              </div>
              <hr />
              <ul>
                {splitDesc.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>

              <a
                href="/"
                className="button green-button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.formRef);
                }}
              >
                Vali
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
