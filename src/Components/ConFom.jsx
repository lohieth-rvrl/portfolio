import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ConForm() {
  const [state, handleSubmit] = useForm("mrgndbwl");
  if (state.succeeded) {
    alert("Thanks for your message! We'll get back to you soon.");
    state.succeeded = false; // Reset the state to prevent repeated alerts on re-render
  }
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="p-md-5 contact-form"
      id="contact-form"
    >
      <div className="row">
        {/* Name Field */}
        <div className="col-md-12 d-flex justify-content-between">
          <div className="col-md-5 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email Field */}
          <div className="col-md-5 form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>
        {/* Subject Field */}
        <div className="col-md-12 mt-3">
          <div className="form-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        {/* Message Field */}
        <div className="col-md-12 mt-3">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              rows="7"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </div>
        {/* Submit Button */}
        <div className="col-md-12 mt-4">
          <div className="form-group d-flex justify-content-center">
            <input
              type="submit"
              value="Send Message"
              className="btn tb py-3 px-5"
              fdprocessedid="a73baa"
              disabled={state.submitting}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ConForm;
