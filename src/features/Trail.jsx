import Button from "./Button";
import style from "./Trail.module.scss";

function Trail() {
  return (
    <div className={style.trailContainer}>
      <div className={style.trailConLeft}>
        <h1>Ready to clear the path to perfect communication?</h1>

        <div className={style.trailList}>
          <span>
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check-circle">
                <path
                  id="Icon"
                  d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                  stroke="#175CD3"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>{" "}
            30 days free trial
          </span>
          <span>
            {" "}
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check-circle">
                <path
                  id="Icon"
                  d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                  stroke="#175CD3"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>{" "}
            Cancel at any time
          </span>
          <span>
            {" "}
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check-circle">
                <path
                  id="Icon"
                  d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                  stroke="#175CD3"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>{" "}
            Access to all features
          </span>
          <span>
            {" "}
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check-circle">
                <path
                  id="Icon"
                  d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                  stroke="#175CD3"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>{" "}
            Peronalized onboarding
          </span>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <Button type="btnPrimary">Talk to sales</Button>
          <Button type="btnSecondary">Start your free trail</Button>
        </div>
      </div>
      <div className={style.trailImage}>
        <img src="\src\assets\3_2 screen mockup.png" alt="trail image" />
      </div>
    </div>
  );
}

export default Trail;
