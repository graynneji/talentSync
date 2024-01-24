import Button from "./Button";
import style from "./Nav.module.scss";

function Nav() {
  return (
    <nav>
      <div className={style.navigation}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {/* <img src="" alt="" /> */}
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
          <span>ClearLink</span>
        </div>

        <ul>
          <li>
            <a href="#" aria-label="Visit the product page">
              Product
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit the solutions page">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit the resources page">
              Resources
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit the pricing page">
              Pricing
            </a>
          </li>
        </ul>

        <div className={style.btnContainer}>
          <Button type="btnPrimary">Talk to sales</Button>
          <Button type="btnSecondary">Sign up for free</Button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
