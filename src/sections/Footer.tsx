import { socialMedia, footerLinks } from "../data";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container text-white-400">
      <div className="flex flex-wrap justify-between max-lg:flex-col gap-20">
        <div className="flex flex-col gap-8">
          <a href="#">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="text-base font-montserrat leading-7 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            {socialMedia.map((icon) => (
              <div className="bg-white p-3 rounded-full">
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between flex-wrap gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl font-montserrat font-medium leading-normal">
                {section.title}
              </h4>
              <ul className="mt-6 font-montserrat leading-9">
                {section.links.map((product) => (
                  <li key={product.name}>
                    <a href="#">{product.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:items-center mt-20 font-montserrat">
        <div className="flex-1 flex items-center gap-2">
          <img src={copyrightSign} alt="Copyright Sign" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
