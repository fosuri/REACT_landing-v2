import React from "react";
import banner from "../../assets/images/first_screen.png";
import "./Footer.css";
import data from "../../assets/Data/footer.json";

export default function Footer() {
  return (
    <footer>
      <div
        className="footer-image"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <p>PERSPECTIVE.TOURS</p>
      </div>

      <div class="footer-info">
        {data.map((section) => {
          return (
            <div className="footer-container" key={section.Section}>
              <h4 id={section.Section.toLowerCase()}>{section.Section}</h4>
              {section.info.map((item) => (
                <div className="footer-line" key={item.id}>
                  <img
                    src={
                      require(`../../assets/images/icons/${item.icon}`)
                    }
                    alt={item.alt}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>


      <p className="goup" onClick={() => window.scrollTo(0, 0)}>
        ÜLES(↑)
      </p>

      <hr />
    </footer>
  );
}
