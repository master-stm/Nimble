import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [showModalError, setShowModalError] = useState(false); // State to control modal visibility
  const [showModalErrorEmail, setShowModalErrorEmail] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://getnimbleapp.com/submit_form.php",
        qs.stringify(formData), // Convert form data to x-www-form-urlencoded format
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        setShowModal(true); // Show modal on success
        setFormData({
          name: '',
          email: '',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      if (error.response && error.response.status === 409) {
        // Handle duplicate email error
        setShowModalErrorEmail(true);
        setFormData({
          name: '',
          email: '',
        });
    } else {
        setShowModalError(true);
        setFormData({
          name: '',
          email: '',
        });
        // console.error("Error submitting form:", error.response || error.message);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false); // Hide modal
    setShowModalError(false); // Hide modal
    setShowModalErrorEmail(false); // Hide modal
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="majesticons--user-line"></span>
          <input type="text" name="name" required placeholder="Enter name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <span className="formkit--email"></span>
          <input type="email" id="emailinput" name="email" required placeholder="Enter email" value={formData.email} onChange={handleChange} />
        </div>
        <button className="form-button" type="submit">
          Join the waitlist
          <span className="gg--arrow-right"></span>
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="text-center">
                <img src="./images/thank-you.svg" width="60%" alt="Thank You" />
              </div>
              <h3 className="join-header text-center">Thank You!!!</h3>
              <p className="join-p text-center">We've added {formData.email} to our waitlist. We'll let you know when the Nimble app is ready.</p>
              <button className="form-button" aria-label="Close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showModalError && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <h3 className="join-header text-center text-danger">Error!!!</h3>
              <p className="join-p text-center"> Something went wrong please try again later</p>
              <button className="form-button" aria-label="Close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showModalErrorEmail && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <h3 className="join-header text-center text-danger">Error!!!</h3>
              <p className="join-p text-center"> {formData.email} already exist in our database</p>
              <button className="form-button" aria-label="Close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
