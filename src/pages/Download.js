import React, { useEffect } from "react";
import StoreButton from "../component/StoreButton";
import appStoreBadge from '../images/Apple.svg';
import playStoreBadge from '../images/Playstore.svg';

const Download = () => {

  useEffect(() => {
    // Function to detect the platform and redirect
    const redirectUser = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Check if it's an Android device
      if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.nimble.snap.pay";
      }
      // Check if it's an iOS device
      else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        window.location.href = "https://apps.apple.com/us/app/get-nimble-app/id6745023982";
      }
      // Otherwise, stay on this page (for laptops/PCs)
    };

    // Trigger the redirection logic when the component mounts
    redirectUser();
  }, []);

  return (
    <div class="main-other">
      <section class="body container">
        <div class="content-body d-flex justify-content-center align-items-center ht-500">
          <div class="shadow p-4 rounded bg-white">
            <h1 class="center content-header">Download App</h1>
            <div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
