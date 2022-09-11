import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:scale-105 hover:skew-y-3 drop-shadow-3xl" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
