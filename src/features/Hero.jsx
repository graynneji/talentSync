import Button from "./Button";
import style from "./Hero.module.scss";
import { StarIcon } from "../constants/Stars";

const imageSources = [
  "/image 21.png",
  "/image 8.png",
  "/image 21.png",
  "/image 100.png",
  "/image 108.png",
  "/image 72.png",
];

const images = [
  "/Avatar.svg",
  "/Avatar-1.svg",
  "/Avatar-2.svg",
  "/Avatar-3.svg",
  "/Avatar-4.svg",
];

function Hero() {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.headerMain}>
          <div>
            <h1>
              Uniting the world,
              <br /> one video call at a time
            </h1>
            <p>
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>
          <div className={style.trialSec}>
            <Button type="btnSecondary">Start your free trial</Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame 10">
                  <g id="Group 2">
                    <path
                      id="Vector"
                      d="M10.1055 17.6576C8.76001 17.6577 7.43546 17.6614 6.11094 17.6564C5.47164 17.654 4.86811 17.5139 4.3315 17.1442C3.56327 16.6149 3.12949 15.8887 3.01861 14.9621C2.98113 14.6488 2.98556 14.3362 2.98539 14.0229C2.98425 11.9455 2.98131 9.86806 2.98695 7.79064C2.9886 7.18281 3.10841 6.59641 3.44285 6.07727C4.00967 5.19738 4.81401 4.70243 5.86856 4.66999C6.59987 4.64749 7.33238 4.66512 8.06434 4.66161C8.37756 4.6601 8.69078 4.64441 9.0039 4.6469C9.16936 4.64822 9.21906 4.58032 9.21747 4.42089C9.21122 3.79354 9.21224 3.16607 9.21681 2.53869C9.22015 2.08077 9.41712 1.79829 9.79064 1.69542C10.222 1.57662 10.6529 1.83667 10.7401 2.27491C10.7644 2.39695 10.7766 2.52328 10.7775 2.64776C10.7815 3.21937 10.7867 3.79116 10.7759 4.3626C10.7721 4.56333 10.8208 4.64295 11.0403 4.64938C12.0371 4.67858 13.0339 4.64762 14.0305 4.66484C15.3009 4.6868 16.3239 5.39259 16.7939 6.57421C16.9078 6.86043 16.9722 7.16212 16.98 7.47028C17.0425 9.92365 16.991 12.3772 16.9749 14.8305C16.9655 16.2594 15.7609 17.4917 14.3282 17.6275C14.0915 17.6499 13.8558 17.6583 13.6189 17.6582C12.4547 17.6579 11.2906 17.6578 10.1055 17.6576ZM5.95679 6.19887C5.14194 6.25783 4.57093 6.84107 4.55078 7.65545C4.53751 8.19192 4.54734 8.72896 4.54713 9.26574C4.54644 11.0225 4.54337 12.7793 4.54632 14.5361C4.54786 15.4586 5.12844 16.0894 6.01631 16.0928C8.66539 16.1031 11.3146 16.1029 13.9636 16.0923C14.8449 16.0887 15.4486 15.4534 15.4496 14.5693C15.4523 12.2967 15.4527 10.024 15.4494 7.75133C15.4481 6.8244 14.8263 6.1986 13.9013 6.19743C11.2661 6.19409 8.63095 6.19711 5.95679 6.19887Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_2"
                      d="M2.04289 9.95246C2.04291 11.4377 2.04309 12.9021 2.04278 14.3665C2.04272 14.6527 2.04173 14.6475 1.75323 14.6545C1.45013 14.6619 1.15185 14.6395 0.875652 14.5071C0.309544 14.2358 0.0295195 13.7576 0.0148384 13.1526C-0.00951087 12.149 0.00137854 11.1444 0.0104841 10.1404C0.0179942 9.31219 0.675786 8.66167 1.50414 8.64184C2.04325 8.62892 2.04324 8.62892 2.04305 9.15752C2.04296 9.41553 2.04294 9.67354 2.04289 9.95246Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_3"
                      d="M17.9575 12.2538C17.9576 11.118 17.9613 10.0031 17.9541 8.88831C17.9529 8.70085 18.0042 8.63472 18.1997 8.63604C18.5028 8.63808 18.7995 8.65679 19.0785 8.78075C19.676 9.04617 19.9738 9.5285 19.9869 10.1637C20.0073 11.1528 20.0016 12.1426 19.9897 13.1319C19.9791 14.0027 19.3085 14.6507 18.4321 14.651C17.8764 14.6513 17.9634 14.7273 17.9589 14.177C17.9537 13.5429 17.9576 12.9088 17.9575 12.2538Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_4"
                      d="M7.18439 10.8826C6.30831 10.6563 5.95708 9.60443 6.49951 8.87652C6.86572 8.38509 7.54175 8.25075 8.11797 8.53854C8.61749 8.78803 8.88209 9.44916 8.71367 10.0269C8.54707 10.5985 7.98614 10.9754 7.38664 10.9173C7.32448 10.9113 7.26312 10.897 7.18439 10.8826Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_5"
                      d="M13.7153 9.94561C13.513 10.8954 12.3155 11.2594 11.5976 10.5618C11.2151 10.19 11.121 9.5618 11.3775 9.03621C11.5806 8.61991 12.1592 8.32903 12.6447 8.39914C13.2114 8.48098 13.6178 8.87095 13.7227 9.41302C13.7568 9.58872 13.757 9.75679 13.7153 9.94561Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_6"
                      d="M7.8998 14.4796C7.77567 14.6078 7.63491 14.6534 7.47486 14.6527C7.15519 14.6514 6.83545 14.6561 6.51585 14.6512C6.18533 14.6462 5.99046 14.4496 5.9922 14.1338C5.9939 13.8244 6.19505 13.6275 6.52577 13.6223C6.83147 13.6174 7.13734 13.6183 7.44307 13.6221C7.95291 13.6284 8.17162 14.0269 7.8998 14.4796Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_7"
                      d="M9.77294 14.6532C9.65486 14.6525 9.55709 14.6565 9.45998 14.6503C9.17661 14.6322 8.98073 14.4296 8.97101 14.1498C8.96179 13.8846 9.16262 13.6401 9.43681 13.6281C9.80504 13.612 10.1753 13.6106 10.5433 13.6301C10.8481 13.6463 11.008 13.8553 10.9992 14.1683C10.9912 14.4517 10.8016 14.6412 10.5037 14.6505C10.2672 14.6579 10.0303 14.6528 9.77294 14.6532Z"
                      fill="#175CD3"
                    />
                    <path
                      id="Vector_8"
                      d="M13.8357 13.7487C14.0108 13.9437 14.0597 14.1501 13.9485 14.3765C13.8386 14.6 13.6396 14.6576 13.4073 14.6539C13.1076 14.6492 12.8078 14.6556 12.5081 14.6515C12.1741 14.6469 11.975 14.4518 11.9756 14.1381C11.9762 13.8311 12.1822 13.6279 12.5105 13.6224C12.8241 13.6172 13.1379 13.6218 13.4516 13.6217C13.5878 13.6217 13.7139 13.6529 13.8357 13.7487Z"
                      fill="#175CD3"
                    />
                  </g>
                </g>
              </svg>
              <span>&nbsp; Discover AI assistant</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div className={style.avataCon}>
              {images.map((src, index) => (
                <img className={style.avataImage} src={src} key={index + 1} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                {Array(5)
                  .fill(StarIcon)
                  .map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}

                <span> &nbsp; 5.0</span>
              </div>
              <p>from 3,000+ reviews</p>
            </div>
          </div>
        </div>

        <div className={style.profileContainer}>
          <div className={style.profilesImage}>
            {imageSources.map((src, index) => (
              <div className={style[`images-${index + 1}`]} key={index}>
                <img src={src} alt={`profile image ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="microphone-01">
                  <path
                    id="Icon"
                    d="M15.8334 8.33332V9.99999C15.8334 13.2217 13.2217 15.8333 10 15.8333M4.16669 8.33332V9.99999C4.16669 13.2217 6.77836 15.8333 10 15.8333M10 15.8333V18.3333M6.66669 18.3333H13.3334M10 12.5C8.61931 12.5 7.50002 11.3807 7.50002 9.99999V4.16666C7.50002 2.78594 8.61931 1.66666 10 1.66666C11.3807 1.66666 12.5 2.78594 12.5 4.16666V9.99999C12.5 11.3807 11.3807 12.5 10 12.5Z"
                    stroke="#175CD3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="video-recorder">
                  <g id="Icon">
                    <path
                      d="M18.3334 7.4428C18.3334 6.93795 18.3334 6.68553 18.2335 6.56864C18.1469 6.46722 18.017 6.4134 17.884 6.42386C17.7308 6.43592 17.5523 6.61441 17.1953 6.97139L14.1667 9.99999L17.1953 13.0286C17.5523 13.3856 17.7308 13.5641 17.884 13.5761C18.017 13.5866 18.1469 13.5328 18.2335 13.4313C18.3334 13.3145 18.3334 13.062 18.3334 12.5572V7.4428Z"
                      stroke="#175CD3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66669 8.16666C1.66669 6.76653 1.66669 6.06646 1.93917 5.53168C2.17885 5.06128 2.56131 4.67882 3.03171 4.43914C3.56649 4.16666 4.26656 4.16666 5.66669 4.16666H10.1667C11.5668 4.16666 12.2669 4.16666 12.8017 4.43914C13.2721 4.67882 13.6545 5.06128 13.8942 5.53168C14.1667 6.06646 14.1667 6.76653 14.1667 8.16666V11.8333C14.1667 13.2335 14.1667 13.9335 13.8942 14.4683C13.6545 14.9387 13.2721 15.3212 12.8017 15.5608C12.2669 15.8333 11.5668 15.8333 10.1667 15.8333H5.66669C4.26656 15.8333 3.56649 15.8333 3.03171 15.5608C2.56131 15.3212 2.17885 14.9387 1.93917 14.4683C1.66669 13.9335 1.66669 13.2335 1.66669 11.8333V8.16666Z"
                      stroke="#175CD3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="monitor-01">
                  <path
                    id="Icon"
                    d="M6.66669 17.5H13.3334M10 14.1667V17.5M5.66669 14.1667H14.3334C15.7335 14.1667 16.4336 14.1667 16.9683 13.8942C17.4387 13.6545 17.8212 13.272 18.0609 12.8016C18.3334 12.2669 18.3334 11.5668 18.3334 10.1667V6.5C18.3334 5.09987 18.3334 4.3998 18.0609 3.86502C17.8212 3.39462 17.4387 3.01217 16.9683 2.77248C16.4336 2.5 15.7335 2.5 14.3334 2.5H5.66669C4.26656 2.5 3.56649 2.5 3.03171 2.77248C2.56131 3.01217 2.17885 3.39462 1.93917 3.86502C1.66669 4.3998 1.66669 5.09987 1.66669 6.5V10.1667C1.66669 11.5668 1.66669 12.2669 1.93917 12.8016C2.17885 13.272 2.56131 13.6545 3.03171 13.8942C3.56649 14.1667 4.26656 14.1667 5.66669 14.1667Z"
                    stroke="#175CD3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="face-smile" clipPath="url(#clip0_2_8994)">
                  <path
                    id="Icon"
                    d="M6.66669 11.6667C6.66669 11.6667 7.91669 13.3333 10 13.3333C12.0834 13.3333 13.3334 11.6667 13.3334 11.6667M12.5 7.49999H12.5084M7.50002 7.49999H7.50835M18.3334 9.99999C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 9.99999C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 9.99999ZM12.9167 7.49999C12.9167 7.73011 12.7301 7.91666 12.5 7.91666C12.2699 7.91666 12.0834 7.73011 12.0834 7.49999C12.0834 7.26987 12.2699 7.08332 12.5 7.08332C12.7301 7.08332 12.9167 7.26987 12.9167 7.49999ZM7.91669 7.49999C7.91669 7.73011 7.73014 7.91666 7.50002 7.91666C7.2699 7.91666 7.08335 7.73011 7.08335 7.49999C7.08335 7.26987 7.2699 7.08332 7.50002 7.08332C7.73014 7.08332 7.91669 7.26987 7.91669 7.49999Z"
                    stroke="#175CD3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_8994">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="message-text-circle-02">
                  <path
                    id="Icon"
                    d="M6.66667 7.91667H10M6.66667 10.8333H12.5M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5Z"
                    stroke="#175CD3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div className={style.iconWrap}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="settings-01" clipPath="url(#clip0_2_8998)">
                  <g id="Icon">
                    <path
                      d="M9.99996 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99999C12.5 8.61928 11.3807 7.49999 9.99996 7.49999C8.61925 7.49999 7.49996 8.61928 7.49996 9.99999C7.49996 11.3807 8.61925 12.5 9.99996 12.5Z"
                      stroke="#175CD3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.606 12.2727C15.5052 12.5012 15.4751 12.7547 15.5197 13.0004C15.5642 13.2462 15.6814 13.473 15.856 13.6515L15.9015 13.697C16.0423 13.8377 16.1541 14.0048 16.2304 14.1887C16.3066 14.3727 16.3458 14.5698 16.3458 14.7689C16.3458 14.968 16.3066 15.1652 16.2304 15.3491C16.1541 15.5331 16.0423 15.7002 15.9015 15.8409C15.7608 15.9818 15.5937 16.0935 15.4097 16.1698C15.2258 16.246 15.0286 16.2853 14.8295 16.2853C14.6304 16.2853 14.4332 16.246 14.2493 16.1698C14.0654 16.0935 13.8983 15.9818 13.7575 15.8409L13.7121 15.7954C13.5335 15.6208 13.3068 15.5036 13.061 15.4591C12.8153 15.4145 12.5618 15.4446 12.3333 15.5454C12.1092 15.6415 11.9181 15.8009 11.7835 16.0042C11.6489 16.2074 11.5767 16.4456 11.5757 16.6894V16.8182C11.5757 17.22 11.4161 17.6054 11.1319 17.8895C10.8478 18.1737 10.4624 18.3333 10.0606 18.3333C9.65872 18.3333 9.27334 18.1737 8.98919 17.8895C8.70505 17.6054 8.54541 17.22 8.54541 16.8182V16.75C8.53955 16.4992 8.45838 16.256 8.31247 16.052C8.16655 15.848 7.96264 15.6926 7.72723 15.6061C7.49874 15.5052 7.24527 15.4751 6.99951 15.5197C6.75376 15.5642 6.52699 15.6814 6.34844 15.8561L6.30299 15.9015C6.16227 16.0424 5.99517 16.1541 5.81123 16.2304C5.6273 16.3066 5.43013 16.3459 5.23102 16.3459C5.03191 16.3459 4.83474 16.3066 4.65081 16.2304C4.46687 16.1541 4.29977 16.0424 4.15905 15.9015C4.01818 15.7608 3.90642 15.5937 3.83017 15.4097C3.75392 15.2258 3.71468 15.0287 3.71468 14.8295C3.71468 14.6304 3.75392 14.4333 3.83017 14.2493C3.90642 14.0654 4.01818 13.8983 4.15905 13.7576L4.2045 13.7121C4.37915 13.5336 4.49631 13.3068 4.54087 13.061C4.58543 12.8153 4.55535 12.5618 4.4545 12.3333C4.35847 12.1093 4.19902 11.9182 3.99577 11.7836C3.79252 11.649 3.55434 11.5767 3.31057 11.5757H3.18178C2.77993 11.5757 2.39455 11.4161 2.1104 11.132C1.82626 10.8478 1.66663 10.4624 1.66663 10.0606C1.66663 9.65875 1.82626 9.27337 2.1104 8.98922C2.39455 8.70508 2.77993 8.54544 3.18178 8.54544H3.24996C3.50071 8.53958 3.7439 8.45841 3.94791 8.3125C4.15192 8.16658 4.30732 7.96267 4.3939 7.72726C4.49474 7.49877 4.52483 7.2453 4.48027 6.99954C4.43571 6.75379 4.31855 6.52702 4.1439 6.34847L4.09844 6.30302C3.95757 6.1623 3.84581 5.9952 3.76957 5.81126C3.69332 5.62733 3.65407 5.43016 3.65407 5.23105C3.65407 5.03194 3.69332 4.83477 3.76957 4.65084C3.84581 4.4669 3.95757 4.2998 4.09844 4.15908C4.23916 4.01821 4.40627 3.90645 4.5902 3.8302C4.77414 3.75395 4.9713 3.71471 5.17041 3.71471C5.36953 3.71471 5.56669 3.75395 5.75063 3.8302C5.93456 3.90645 6.10167 4.01821 6.24238 4.15908L6.28784 4.20454C6.46638 4.37918 6.69315 4.49634 6.93891 4.5409C7.18466 4.58546 7.43813 4.55538 7.66663 4.45454H7.72723C7.9513 4.3585 8.1424 4.19905 8.277 3.9958C8.4116 3.79255 8.48384 3.55437 8.48481 3.3106V3.18181C8.48481 2.77996 8.64444 2.39458 8.92859 2.11043C9.21273 1.82629 9.59812 1.66666 9.99996 1.66666C10.4018 1.66666 10.7872 1.82629 11.0713 2.11043C11.3555 2.39458 11.5151 2.77996 11.5151 3.18181V3.24999C11.5161 3.49377 11.5883 3.73194 11.7229 3.93519C11.8575 4.13844 12.0486 4.2979 12.2727 4.39393C12.5012 4.49477 12.7547 4.52486 13.0004 4.4803C13.2462 4.43574 13.4729 4.31858 13.6515 4.14393L13.6969 4.09847C13.8376 3.9576 14.0048 3.84585 14.1887 3.7696C14.3726 3.69335 14.5698 3.6541 14.7689 3.6541C14.968 3.6541 15.1652 3.69335 15.3491 3.7696C15.533 3.84585 15.7002 3.9576 15.8409 4.09847C15.9817 4.23919 16.0935 4.4063 16.1697 4.59023C16.246 4.77417 16.2852 4.97133 16.2852 5.17044C16.2852 5.36956 16.246 5.56672 16.1697 5.75066C16.0935 5.93459 15.9817 6.1017 15.8409 6.24241L15.7954 6.28787C15.6208 6.46641 15.5036 6.69318 15.459 6.93894C15.4145 7.18469 15.4446 7.43816 15.5454 7.66666V7.72726C15.6414 7.95133 15.8009 8.14243 16.0042 8.27703C16.2074 8.41163 16.4456 8.48387 16.6894 8.48484H16.8181C17.22 8.48484 17.6054 8.64447 17.8895 8.92862C18.1737 9.21276 18.3333 9.59815 18.3333 9.99999C18.3333 10.4018 18.1737 10.7872 17.8895 11.0714C17.6054 11.3555 17.22 11.5151 16.8181 11.5151H16.75C16.5062 11.5161 16.268 11.5883 16.0648 11.723C15.8615 11.8576 15.7021 12.0487 15.606 12.2727Z"
                      stroke="#175CD3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2_8998">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
