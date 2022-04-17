import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { HiClock, HiCreditCard, HiVideoCamera } from "react-icons/hi";
import { useParams } from "react-router-dom";
import auth from "../../Authentication/Firebase/Firebase.init";
import servicesDb from "../../utilities/servicesDb";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: user.email } });

  const onSubmit = (data) => {
    setFormData(data);
  };

  const params = useParams();
  const service = servicesDb.find((service) => service.id === +params.id);

  return (
    <section className="checkout">
      <div className="container">
        <div className="checkout-container">
          <div className="book-details">
            <strong>Larry Brandon</strong>
            <h2>{service?.name}</h2>
            <div className="book-details-info">
              <p>
                <HiClock />
                <strong>{service.time}</strong>
              </p>
              <p>
                <HiVideoCamera />
                <strong>
                  Web conferencing details provided upon confirmation.
                </strong>
              </p>
              <p>
                <HiCreditCard />
                <strong>{service.price}</strong>
              </p>
            </div>
            <div className="book-details-text">
              <p>{service.text}</p>
            </div>
          </div>
          <div className="book-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="book-form-input-control">
                <input
                  {...register("name", {
                    required: "Please give your name",
                    minLength: { value: 4, message: "Minimum length is four" },
                  })}
                  type="text"
                  placeholder="Enter your name"
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="book-form-input-control">
                <input
                  {...register("email", {
                    required: "Please provide a valid email address",
                  })}
                  type="email"
                  placeholder="Enter your email"
                />
                <p>{errors.email?.message}</p>
              </div>

              <div className="book-form-input-control">
                <input
                  {...register("phoneNumber", {
                    required: "Please provide your phone number",
                  })}
                  type="number"
                  placeholder="Enter your phone number"
                />
                <p>{errors.phoneNumber?.message}</p>
              </div>
              <div className="book-form-input-control">
                <input
                  {...register("address", {
                    required: "Please provide your address",
                  })}
                  type="text"
                  placeholder="Enter your address"
                />
                <p>{errors.address?.message}</p>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
