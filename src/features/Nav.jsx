import Button from "./Button";
import style from "./Nav.module.scss";

function Nav() {
  return (
    <nav>
      <div className={style.navigation}>
        <div>
          <img src="" alt="" />
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
