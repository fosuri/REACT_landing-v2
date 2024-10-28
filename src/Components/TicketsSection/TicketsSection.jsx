import React from "react";
import tickets from "../../assets/Data/tickets.json";
import "./TicketsSection.css";

export default function TicketsSection({
  scrollToSection,
  refs,
  setSelectedTicket,
}) {
  return (
    <div className="tickets-section one-screen-section section-space">
      <h2>PILETID JA HINNAD</h2>
      <p className="subtitle">
        Vaatamata sellele, mis pileti te valisite, te saate täieliku
        ekskursiooni programmi
      </p>
      <div className="tickets">
        {tickets.map((ticket, index) => {
          const splitDesc = ticket.description.split(", ");
          const newPrice = ticket.price - 201;
          return (
            <div className="ticket" key={index}>
              <div className="ticket-head">
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
                  setSelectedTicket(ticket.type); // устанавливаем выбранный билет
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
