import style from "./SocialProof.module.scss";

const imagesSocial = [
  "/Shopify.com svg.svg",
  "/Marvel svg.svg",
  "/Coinbase svg.svg",
  "/Automattic svg.svg",
  "/Dropbox svg.svg",
  "/Intercom svg.svg",
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
