import Faq from "../features/Faq";
import Features from "../features/Features";
import Footer from "../features/Footer";
import Hero from "../features/Hero";
import Nav from "../features/Nav";
import SocialProof from "../features/SocialProof";
import Testimonial from "../features/Testimonial";
import Trail from "../features/Trail";

// import Home from "./Home";
import style from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={style.container}>
      <div className={style.backgdImg}>
        <header className={style.headerContainer}>
          <Nav />
          <Hero />
        </header>
      </div>

      {/* <main className={style.main}> */}
      {/* <Home /> */}

      <SocialProof />

      <Features />
      <Testimonial />
      <Faq />
      <Trail />
      <Footer />
      {/* </main> */}
      <footer style={{ backgroundColor: "black" }}>wrwr</footer>
    </div>
  );
}

export default AppLayout;
