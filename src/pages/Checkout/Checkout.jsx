import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiClock, HiCreditCard } from "react-icons/hi";
import { useParams } from "react-router-dom";
import auth from "../../Authentication/Firebase/Firebase.init";
import Loading from "../../components/Loading/Loading";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import useServices from "../../Hooks/useServices";
import "./Checkout.css";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState([]);
  const [services, loadData] = useServices();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: user.email } });

  const onSubmit = (data) => {
    setFormData(data);
  };

  console.log(services);

  const params = useParams();

  const service = services.find((service) => service?.id === params.id);

  return (
    <>
      <PageHeadImg text={`Book - ${service?.name}`} />
      {loadData ? (
        <Loading />
      ) : (
        <section className="checkout">
          <div className="container">
            <div
              className={`checkout-container ${
                formData.name ? "av-form-data" : ""
              }`}
            >
              <div className="book-details">
                <strong className="book-details-self-name">
                  Larry Brandon
                </strong>
                <h2>{service?.name}</h2>
                <div className="book-details-info">
                  <div>
                    <HiClock className="icon" />
                    <strong>{service?.time}</strong>
                  </div>
                  <div>
                    <BsFillCameraVideoFill className="icon" />
                    <strong>Conferencing details upon confirmation.</strong>
                  </div>
                  <div>
                    <HiCreditCard className="icon" />
                    <strong>{service?.price}</strong>
                  </div>
                </div>
                <div className="book-details-text">
                  <p>{service?.text}</p>
                </div>
                <p className="book-thank-you">Thank you for work with me.</p>
              </div>
              <div className="book-form">
                {formData.name ? (
                  <h1 className="book-message">
                    Thank you {formData.name} for booking. I will contact with
                    you shortly. Till then enjoy your time.
                  </h1>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <strong className="book-details-self-name">
                      Good Choice
                    </strong>
                    <h2>Fill this form for booking</h2>
                    <div className="book-form-input-control">
                      <input
                        {...register("name", {
                          required: "Please give your name",
                          minLength: {
                            value: 4,
                            message: "Minimum length is four",
                          },
                        })}
                        type="text"
                        placeholder="Enter your name"
                      />
                      <p className="book-form-error-message">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="book-form-input-control">
                      <input
                        {...register("email", {
                          required: "Please provide a valid email address",
                        })}
                        type="email"
                        placeholder="Enter your email"
                      />
                      <p className="book-form-error-message">
                        {errors.email?.message}
                      </p>
                    </div>

                    <div className="book-form-input-control">
                      <input
                        {...register("phoneNumber", {
                          required: "Please provide your phone number",
                        })}
                        type="number"
                        placeholder="Enter your phone number"
                      />
                      <p className="book-form-error-message">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                    <div className="book-form-input-control">
                      <input
                        {...register("address", {
                          required: "Please provide your address",
                        })}
                        type="text"
                        placeholder="Enter your address"
                      />
                      <p className="book-form-error-message">
                        {errors.address?.message}
                      </p>
                    </div>
                    <input type="submit" className="btn" value="Book Now" />
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Checkout;
