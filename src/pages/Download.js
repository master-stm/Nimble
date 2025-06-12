import React, { useEffect } from "react";
import StoreButton from '../component/StoreButton';
import appStoreBadge from '../images/Apple.svg';
import playStoreBadge from '../images/Playstore.svg';

const Download = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/iphone|ipod|ipad/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/us/app/get-nimble-app/id6745023982";
    } else if (/android/.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.nimble.snap.pay";
    } else {
      console.log("Desktop browser detected. No redirection.");
    }
  }, [])

  return <section className="body container" style={{ marginTop: "20px" }}>
    <div className="main-body">
      <div>
        <h2 className="join-header">Download Our App</h2>

        <div className="footer-col footer-download">

          <StoreButton
            logo={appStoreBadge}
            line1="Download on"
            line2="App Store"
            link="https://apps.apple.com/us/app/get-nimble-app/id6745023982"
          />

          <StoreButton
            logo={playStoreBadge}
            line1="Download on"
            line2="Google Play"
            link="https://play.google.com/store/apps/details?id=com.nimble.snap.pay"
          />
        </div>
      </div>
      <div className="image-container">
        <img src="/images/hero-img.png" className="" width="98%" alt="Hero" />
        <div class="frame-image">
          <img src="/images/capa.svg" alt="" />
          <span>Shop Fast. Shop Smart. Shop Nimble</span>
        </div>
      </div>
    </div>
  </section>
};

const DownloadPage = () => (
  <main className="main">
    <Download />
  </main>
);

export default DownloadPage;
