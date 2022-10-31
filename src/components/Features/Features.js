import laptop from "../../assets/image-computer.png";
import Items from "./Items";

const Features = () => {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <img
              alt=""
              className="md:absolute top-0 right-[50%]"
              src={laptop}
            ></img>
          </div>

          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            <Items
              title="Quick Search"
              subtitle="Easily search your snippets by content, category, web address,
        application, and more."
            />
            <Items
              title="iCloud Sync"
              subtitle="Instantly saves and syncs snippets across all your devices."
            />
            <Items
              title="Completely History"
              subtitle="Retrieve any snippets from the first moment you started using the app."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
