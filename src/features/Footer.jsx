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
        <div style={{ display: "flex", gap: "10px" }}>
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
                fill="#1570EF"
              />
              <path
                id="Vector_2"
                d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
                fill="#53B1FD"
              />
            </g>
          </svg>
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
