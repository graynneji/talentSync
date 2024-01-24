import style from "./SocialProof.module.scss";

const imagesSocial = [
  "src/assets/Shopify.com svg.svg",
  "src/assets/Marvel svg.svg",
  "src/assets/Coinbase svg.svg",
  "src/assets/Automattic svg.svg",
  "src/assets/Dropbox svg.svg",
  "src/assets/Intercom svg.svg",
];

function SocialProof() {
  return (
    <div className={style.socialProofContainer}>
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div style={{ paddingLeft: "32px", paddingRight: "32px" }}>
        <div className={style.socialImageContainer}>
          {imagesSocial.map((src, index) => (
            <img className={style.avataImage} src={src} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
