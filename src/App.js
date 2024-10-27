import React, { useRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import FirstScreen from "./Components/FirstScreen/FirstScreen";
import Offer from "./Components/Offer/Offer";
import WhySection from "./Components/WhySection/WhySection";
import ReviewsSection from "./Components/ReviewsSection/ReviewsSection";
import PartnersSection from "./Components/PartnersSection/PartnersSection";
import TicketsSection from "./Components/TicketsSection/TicketsSection";
import FormSection from "./Components/FormSection/FormSection";
import WhoSection from "./Components/WhoSection/WhoSection";
import Footer from "./Components/Footer/Footer";


function App() {
  const offerRef = useRef(null);
  const whyRef = useRef(null);
  const reviewsRef = useRef(null);
  const partnersRef = useRef(null);
  const ticketsRef = useRef(null);
  const formRef = useRef(null);
  const whoRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refs = {
    offerRef,
    whyRef,
    reviewsRef,
    partnersRef,
    ticketsRef,
    formRef,
    whoRef,
    footerRef,
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} refs={refs} />
      <FirstScreen scrollToSection={scrollToSection} refs={refs} />
      <main>
        <section ref={offerRef}>
          <Offer scrollToSection={scrollToSection} refs={refs} />
        </section>
        <hr />
        <section ref={whyRef}>
          <WhySection />
        </section>
        <hr />
        <section ref={reviewsRef}>
          <ReviewsSection />
        </section>
        <hr />
        <section ref={partnersRef}>
          <PartnersSection />
        </section>
        <hr />
        <section ref={ticketsRef}>
          <TicketsSection
            scrollToSection={scrollToSection}
            refs={{ formRef }}
          />
        </section>
        <hr />
        <section ref={formRef}>
          <FormSection />
        </section>
        <hr />
        <section ref={whoRef}>
          <WhoSection />
        </section>
      </main>
      <section ref={footerRef}>
        <Footer />
      </section>
    </>
  );
}

export default App;
