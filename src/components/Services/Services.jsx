import React from "react";
import servicesDb from "../../utilities/servicesDb";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container services-items">
        {servicesDb.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
