import { Fragment } from "react";

const About = (props) => {
  return (
    <Fragment>
      <h3>{props.title}</h3>
      <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        {props.subtitle}
      </p>
      <div className="button-container">
        <a
          href
          className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-700 hover:opacity-80 "
        >
          Download for iOS
        </a>
        <a
          href
          className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-700 hover:opacity-80 "
        >
          Download for Mac
        </a>
      </div>
    </Fragment>
  );
};

export default About;
