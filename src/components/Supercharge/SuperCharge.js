import blacklist from "../../assets/icon-blacklist.svg";
import text from "../../assets/icon-text.svg";
import preview from "../../assets/icon-preview.svg";
import Items from "./Items";

const SuperCharge = () => {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16">
          We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          <Items
            img={blacklist}
            title="Create Blacklists"
            subtitle="Easily search your snippets by content, category, web address, application, and more."
          />
          <Items
            img={text}
            title="Plain Text Snippets"
            subtitle="Remove unwanted formatting from copied text for a consistent look."
          />
          <Items
            img={preview}
            title="Sneak Preview"
            subtitle="Quick preview of all snippets on your Clipboard for easy access."
          />
        </div>
      </div>
    </section>
  );
};
export default SuperCharge;
