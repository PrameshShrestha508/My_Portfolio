import React, { useContext, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const initialValues = { name: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const checkValidate = () => {
    setFormErrors(validate(formValues));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:4000/contact/", {
          username: formValues.name,
          email: formValues.email,
          message: formValues.textarea,
        })
        .then((res) => toast("message sent successfully"))
        // .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setFormValues(initialValues);
    }
  };
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (values.name.length <= 2) {
      errors.name = "Name must be more than 2 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    return errors;
  };

  return (
    <>
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <ToastContainer />
          <form method="POST">
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e, "name")}
              onBlur={checkValidate}
              value={formValues.name}
              className="user"
              placeholder="Name"
            />
            <span style={{ color: "red" }}>{formErrors.name}</span>
            <input
              type="email"
              name="email"
              className="user"
              onChange={(e) => handleChange(e, "email")}
              onBlur={checkValidate}
              value={formValues.email}
              placeholder="Email"
            />
            <span style={{ color: "red" }}>{formErrors.email}</span>
            <textarea
              name="textarea"
              className="user"
              onChange={(e) => handleChange(e, "textarea")}
              onBlur={checkValidate}
              value={formValues.textarea}
              placeholder="Message"
            />
            {formErrors.textarea}
            <input
              type="submit"
              onClick={handleSubmit}
              value="Send"
              className="button"
            />
            {/* <span>{"Thanks for Contacting me"}</span> */}
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
