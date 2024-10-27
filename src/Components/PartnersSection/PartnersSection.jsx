import React from "react";
import partners from "../../assets/Data/partners.json";
import './PartnersSection.css'

export default function PartnersSection() {
  return (
    <div class="partners-section one-screen-section section-space">
      <h2>MEIE PARTNERID</h2>

      <div class="partners">
        {partners.map((partner, index) => {
          return (
            <div class="partner">
              <img
                src={require(`../../assets/images/logos/${partner.image}`)}
                alt={partner.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
