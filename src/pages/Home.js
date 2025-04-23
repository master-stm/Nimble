import React from "react";
import Form from "../component/Form";

const HeroSection = () => (
  <section className="body container" style={{ marginTop: "20px" }}>
    <div className="main-body">
      <div>
        <h2 className="join-header">Join our Waitlist</h2>
        <p className="join-p">Nimble is revolutionizing shopping by making it faster and more convenient. Stay tuned for the launch of our innovative app!</p>
        <Form />
      </div>
      <div className="image-container">
        <img src="/images/hero-img.png" className="" width="98%" alt="Hero" />
        <div class="frame-image">
          <img src="/images/capa.svg" alt="" />
          <span>Shop Fast. Shop Smart. Shop Nimble</span>
        </div>
        {/* <img className="frame-image" src="./images/hero-image-frame.svg" alt="Hero Frame" /> */}
      </div>
    </div>
  </section>
);

const Home = () => (
  <main className="main">
    <HeroSection />
  </main>
);

export default Home;
