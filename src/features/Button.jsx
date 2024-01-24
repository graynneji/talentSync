/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./Buttons.module.scss";

function Button({ children, type }) {
  //   const buttonClass = `${styles.button} ${styles[type]}`;
  return (
    <>
      <button className={style[type]}>{children}</button>
    </>
  );
}

export default Button;
