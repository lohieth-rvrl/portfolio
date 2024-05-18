import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ConForm() {
  const [state, handleSubmit] = useForm("mrgndbwl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      class=" p-md-5 contact-form"
      id="contact-form"
    >
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between">
          <div class="col-md-5 form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              fdprocessedid="mpdmc9"
            />
          </div>
          <div class="col-md-5 form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email"
              fdprocessedid="om9v4c"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="col-md-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Subject"
              fdprocessedid="d4gtxq"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              class="ms form-control"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="col-md-12">
          <div class="form-group d-flex justify-content-center">
            <input
              type="submit"
              value="Send Message"
              class="tb btn py-3 px-5"
              fdprocessedid="a73baa"
            />
          </div>
        </div>
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </form>
  );
}
export default ConForm;

// <form action="#" class=" p-md-5 contact-form" id="contact-form">
//   <div class="row">
//     <div class="col-md-12 d-flex justify-content-between">
//       <div class="col-md-5 form-group">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Your Name"
//           fdprocessedid="mpdmc9"
//         />
//       </div>
//       <div class="col-md-5 form-group">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Your Email"
//           fdprocessedid="om9v4c"
//         />
//       </div>
//     </div>
//     <br />
//     <br />
//     <br />
//     <div class="col-md-12">
//       <div class="form-group">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Subject"
//           fdprocessedid="d4gtxq"
//         />
//       </div>
//     </div>
//     <br />
//     <br />
//     <br />
//     <div class="col-md-12">
//       <div class="form-group">
//         <textarea
//           name=""
//           id=""
//           cols="30"
//           rows="7"
//           class="ms form-control"
//           placeholder="Message"
//         ></textarea>
//       </div>
//     </div>
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div class="col-md-12">
//       <div class="form-group d-flex justify-content-center">
//         <input
//           type="submit"
//           value="Send Message"
//           class="tb btn py-3 px-5"
//           fdprocessedid="a73baa"
//         />
//       </div>
//     </div>
//   </div>
// </form>;
