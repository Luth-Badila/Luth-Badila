import React from "react";
import styles from "./style";

import { Navbar, Hero, Clients, Stats, Business, CTA, CardDeal, Billing, Testimonials, Footer } from "./components";

const App = () => (
  <div className="bg-red w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-red ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-red ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials /> <Clients /> <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
