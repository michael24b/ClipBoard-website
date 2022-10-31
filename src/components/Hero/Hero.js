import logo from "../../assets/logo.svg";
import About from "./About";
const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container mb-40 pt-16">
        <img src={logo} alt="" className="mx-auto my-16" />

        <About
          title="A history of everything you copy"
          subtitle="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        />
      </div>
    </section>
  );
};

export default Hero;
