import { Andriod } from "../constants/Andriod";
import { Apple } from "../constants/apple";
import style from "./Footer.module.scss";
const footer = {
  Product: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
  Company: ["About us", "Careers", "Press", "News", "Contact"],
  Resources: ["Blog", "Events", "Help center", "Tutorials", "Support"],
  Legal: ["Terms", "Privacy", "Cookies", "Licences", "Contact"],
};
function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLeftContainer}>
        <div>
          <span>ClearLink.</span>
        </div>
        <p>
          ClearLink is your gateway to effortless, high- quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className={style.uListFooter}>
        {/* <ul className={style.uListFooter}> */}
        <div>
          <ul>
            <span>Product</span>
            {footer["Product"].map((foot) => (
              <li key={foot}>{foot}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <span>Company</span>
            {footer["Company"].map((foot) => (
              <li key={foot}>{foot}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <span>Resources</span>
            {footer["Resources"].map((foot) => (
              <li key={foot}>{foot}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <span>Legal</span>
            {footer["Legal"].map((foot) => (
              <li key={foot}>{foot}</li>
            ))}
          </ul>
        </div>
        <div className={style.download}>
          <p>Get the app</p>
          <div>{Apple}</div>
          <div>{Andriod}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
