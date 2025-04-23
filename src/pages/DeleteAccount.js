import React from "react";
import "../styles/DeleteAccount.css";

const About = () => {
  return (
    <div class="main-other">
      <section class="body container">
        <div class="content-body d-flex justify-content-center align-items-center ht-500">
          <div class="shadow p-4 rounded bg-white">
            <h1 class="center content-header">Delete Your Nimble Account</h1>
            <p class="content-text">We're sorry to see you go. Follow these steps to delete your account and remove all associated data.</p>
            <h3>How to Delete Your Account:</h3>
            <ol class="content-text">
              <li>Send an email to <a href="mailto:support@getnimbleapp.com">support@getnimbleapp.com</a> using the email address linked to your Nimble account.</li>
              <li>Use the subject line: <b>"Delete My Nimble Account"</b></li>
              <li>In the email body, please include:</li>
              <ul class="content-text">
                <li>Your full name</li>
                <li>The reason (optional) you're requesting account deletion</li>
                <li>Confirmation that you'd like all data deleted permanently</li>
              </ul>
            </ol>
            <p>If you have any issues or concerns, feel free to reach out to our support team. We'll be happy to assist you.</p>
             </div>
        </div>
      </section>
    </div>
  );
};

export default About;
