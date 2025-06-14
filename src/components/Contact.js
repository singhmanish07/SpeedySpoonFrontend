import contactImage from "../images/contact-us.png";
import { mapLogo, ContactLogo, mailLogo } from "../images/SvgIcon";

const Contact = () => {
  return (
    <section>
      <div>
        <div className="topSection flex flex-col md:flex-row justify-around items-center px-6 md:px-16 bg-blue-100">
          <div className="textSec text-center md:text-left">
            <h2 className="text-2xl md:text-6xl font-bold text-primary">
              Contact Us
            </h2>
            <p className="text-base md:text-lg font-semibold text-secondary m-4">
              We are ready to help you 24/7. <br />
              Ask your query via any medium
            </p>
          </div>
          <div className="imageSec">
            <img src={contactImage} alt="Contact Image" className="h-60" />
          </div>
        </div>

        <div className="downSection mx-6 md:mx-40 mt-10">
          <div className="container text-xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
            <h1>Get In Touch</h1>
          </div>
          <div className="address my-6">
            <div className="flex justify-start items-center gap-4 my-2">
              <div className="text-blue-700">{mapLogo}</div>
              <h2 className="text-lg md:text-xl font-semibold text-fuchsia-500">
                Address
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-secondary">
              Madan Mohan Malviya University of Technology Gorkhpur <br /> Uttar
              Pradesh-273010
            </p>
          </div>
          <div className="phone my-6">
            <div className="flex justify-start items-center gap-4 my-2">
              <div className="text-blue-700">{ContactLogo}</div>
              <h2 className="text-lg md:text-xl font-semibold text-fuchsia-500">
                Phone
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-secondary">
               +91 6393196190
            </p>
          </div>
          <div className="TelePhone my-6">
            <div className="flex justify-start items-center gap-4 my-2">
              <div className="text-blue-700">{ContactLogo}</div>
              <h2 className="text-lg md:text-xl font-semibold text-fuchsia-500">
                Tele-Phone
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-secondary">
               +91 1234567890
            </p>
          </div>
          <div className="Email my-6">
            <div className="flex justify-start items-center gap-4 my-2">
              <div className="text-blue-700">{mailLogo}</div>
              <h2 className="text-lg md:text-xl font-semibold text-fuchsia-500">
                Email
              </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-secondary">
               info@speedyspoon.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
