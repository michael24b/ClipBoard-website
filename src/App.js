import "./App.css";
import Hero from "./components/Hero/Hero";
import { Fragment } from "react";
import Snippets from "./components/Snippets/Snippets";
import Features from "./components/Features/Features";
import Access from "./components/Access/Access";
import SuperCharge from "./components/Supercharge/SuperCharge";
import References from "./components/References/References";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <SuperCharge />
      <References />
      <Footer />
    </Fragment>
  );
}

export default App;
