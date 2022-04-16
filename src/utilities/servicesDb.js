import serviceImgFour from "../Images/services/services-5.jpg";
import serviceImgThree from "../Images/services/services-four.jpg";
import serviceImgTwo from "../Images/services/services-three.jpg";
import serviceImgOne from "../Images/services/services-two.jpg";

const servicesDb = [
  {
    image: serviceImgOne,
    name: "Tax Return Consultation",
    text: "In this 1-hour virtual meeting, we’ll review prior year returns, discuss changes in the current year and complete an initial tax interview—all of these elements will impact your tax return, so it’s best to get clarity on those now. The retainer for this consultation goes towards the fee for your return, which varies by situation.",
    time: "1 hour",
    price: "$75 ratainer",
  },
  {
    image: serviceImgTwo,
    name: "Tax Return Planning",
    text: "Let’s take a look at data from all your income sources to determine and discuss federal and state estimated taxes (yes, you have to pay them!). I may make suggestions for changes in employment withholding and estimated payments in your plan. This process requires two meetings, each scheduled separately.",
    time: "1 hour",
    price: "$75",
  },
  {
    image: serviceImgFour,
    name: "Tax Problem Resolution",
    text: "In this 2-hour meeting, we’ll go over your data to determine the appropriate course of action for IRS or state tax letters, like CP2000, correspondence and office audits, installment agreements, or evaluation for offers in compromise. The retainer for this initial meeting will go towards the fee for your resolution, which varies by situation.",
    time: "2 hour",
    price: "$400 retainer",
  },
  {
    image: serviceImgThree,
    name: "Not sure which one is right for you?",
    text: "Whether you’re looking for help with your individual / business return, sales tax, calculating estimated tax payments or an IRS audit, let’s hop on a 20-minute call to discuss what your most beneficial way forward looks like. These are limited openings in my schedule to help you figure out your next move.",
    time: "20 minutes",
    price: "free",
  },
];

export default servicesDb;
