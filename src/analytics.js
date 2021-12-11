import ReactGA from "react-ga";

const emptyFunc = (...args) => {
  console.log(
    "%c%s",
    "background: #FFBC6F; color: #1F1407",
    `ga method called with args: ${JSON.stringify(args)}`
  );
};

const ga =
  !process.env.REACT_APP_GA_TRACKING_ID ||
  process.env.REACT_APP_GA_TRACKING_ID.length < 1
    ? Object.keys(ReactGA).reduce((accum, current) => {
        accum[current] = emptyFunc;
        return accum;
      }, {})
    : ReactGA;

ga.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
  debug: process.env.REACT_APP_BUILD_ENV === "development",
});

export default ga;
