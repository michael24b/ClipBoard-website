import google from "../../assets/logo-google.png";
import ibm from "../../assets/logo-ibm.png";
import microsoft from "../../assets/logo-microsoft.png";
import hp from "../../assets/logo-hp.png";
import vector from "../../assets/logo-vector-graphics.png";
import About from "../Hero/About";
const References = () => {
  return (
    <section id="references">
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0 md:space-x-1">
        <img alt="" src={google} />
        <img alt="" src={ibm} />
        <img alt="" src={microsoft} />
        <img alt="" src={hp} />
        <img alt="" src={vector} />
      </div>
      <div className="section-container  my-20">
        <About
          title="Clipboard for iOS and MacOS"
          subtitle="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
        />
      </div>
    </section>
  );
};

export default References;
