import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactUs = () => {
  const label = "text-[17px]";
  const input = "input focus:outline-none w-full";

  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) errors.subject = "Subject is required";
    if (!values.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      emailjs
        .send("service_6bg8wxw", "template_idi3m9d", formValues, "OnFvf0nGGwNmXVnuA")
        .then(
          (result) => {
            console.log("Message sent:", result.text);
            setFormValues(initialState); // Reset the form to initial state
          },
          (error) => {
            console.log("Error sending message:", error.text);
          }
        );
    }
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="main-title text-center my-5 text-2xl text-teal-700 font-bold"
        data-title="contact us"
      >
        Let's Work Together
      </motion.h2>

      <form onSubmit={handleSubmit} className="lg:w-4/6 w-[90%]">
        <motion.div
          className="my-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="name" className={label}>
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`${input}`}
            placeholder="Enter your name"
          />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        </motion.div>

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="email" className={label}>
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`${input}`}
            placeholder="Enter your email"
          />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </motion.div>

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="subject" className={label}>
            Enter Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className={`${input}`}
            placeholder="Enter your subject"
          />
          {errors.subject && <div className="text-red-500 text-sm">{errors.subject}</div>}
        </motion.div>

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <label htmlFor="message" className={label}>
            Enter Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className={`${input} w-full resize-none textarea h-32`}
            placeholder="Enter your message"
            rows={3}
          />
          {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
        </motion.div>

        <motion.button
          type="submit"
          className="cursor-pointer px-3 py-5 block text-lg rounded-xl bg-teal-600 text-white w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Submit
        </motion.button>
      </form>
    </>
  );
};

export default ContactUs;
