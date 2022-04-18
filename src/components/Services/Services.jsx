import React from "react";
import useServices from "../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  console.log(services);

  return (
    <section className="services">
      <div className="container services-items">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
