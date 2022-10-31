import logo from "../../assets/logo.svg";
import fb from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import insta from "../../assets/icon-instagram.svg";
const Footer = () => {
  return (
    <section className="bg-gray-50" id="footer">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <img className="scale-50" alt="" src={logo} />
          {/* Container for Menus & Social */}
          <div className="flex flex-col items-center justify-between  mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* Menus */}
            <div className="flex flex-col space-y-4 md:flex-row md:m-5 md:space-x-24 md:space-y-0">
              {/* Menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* Menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              {/* Menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            {/* Social Icons */}

            <div className="flex justify-between w-32 py-1">
              <a href>
                <img alt="" className="duration-200 ficon" src={fb}></img>
              </a>
              <a href>
                <img alt="" className="duration-200 ficon" src={twitter}></img>
              </a>
              <a href>
                <img alt="" className="duration-200 ficon" src={insta}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
