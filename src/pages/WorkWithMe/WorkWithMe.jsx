import React from "react";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import Services from "../../components/Services/Services";
import "./WorkWithMe.css";

const WorkWithMe = () => {
  return (
    <>
      <PageHeadImg text="Tax preparation & planning services" />
      <div className="container">
        <section className="work-with-me">
          <p>
            If you’re an income earner, you’ve had to deal with tax deadlines.
            And for most of us, there are so many unknowns about how our daily
            choices will affect us come tax season. It’s confusing and
            stressful–sometimes so stressful that you may have considered
            avoiding your taxes altogether. I’m here to alleviate that stress
            and get you back on track. I’ll help you understand your tax return
            and I’ll explain how and why each number matters to your bottom
            line. I can even work with you throughout the year to avoid those
            balance due returns!
          </p>
        </section>
      </div>
      <Services />
      <div className="container">
        <section className="services-list">
          <h2>You might be looking for help with...</h2>
          <div className="service-list-container">
            <div className="service-list-one">
              <ul>
                <li>Individual tax returns</li>
                <li>Sales and trustee tax returns for retail</li>
                <li>Quarterly payroll tax returns</li>
                <li>usiness license tax information</li>
                <li>Calculation of estimated tax payments</li>
              </ul>
            </div>
            <div className="service-list-two">
              <ul>
                <li>Changes in payroll withholding</li>
                <li>Business returns to include C Corporation</li>
                <li>Business license audits</li>
                <li>Back Payroll Taxes</li>
                <li>Sales tax audits</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkWithMe;
