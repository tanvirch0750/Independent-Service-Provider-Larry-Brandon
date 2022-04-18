import React from "react";
import useServices from "../../Hooks/useServices";
import Loading from "../Loading/Loading";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, loadData] = useServices();

  return (
    <section className="services">
      {loadData ? (
        <Loading />
      ) : (
        <div className="container services-items">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
