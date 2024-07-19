import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactUs = () => {


  const label = "text-[17px]";
  const input = "input focus:outline-none  w-full  ";
  const initMessage = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [message, setMessage] = useState(initMessage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bg8wxw",
        "template_idi3m9d",
        e.target,
        "OnFvf0nGGwNmXVnuA"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
        },
        (error) => {
          console.log("Error sending message:", error.text);
        }
      );

    setMessage(initMessage);
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

      <div className="  ">
        <form
          className="lg:w-4/6 w-[90%]"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="my-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="username" className={label}>
              Your Name:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className={`${input}  `}
              name="name"
              onChange={handleChange}
            />
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
              placeholder="Enter your email"
              className= {`${input}  `}
              name="email"
              onChange={handleChange}
            />
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
              placeholder="Enter your subject"
              className= {`${input}  `}
              name="subject"
              onChange={handleChange}
            />
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
              className=
              {`${input}  w-full resize-none textarea h-32 `}
              
              placeholder="Enter your message"
              id="message"
              rows={3}
              onChange={handleChange}
              name="message"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="cursor-pointer px-3 py-5  block text-lg rounded-xl bg-teal-600 text-white w-24 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Submit
          </motion.button>
        </form>

        {/* Second part */}
        <motion.div
          className="lg:w-2/6 lg:py-10 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
          {/* Additional contact information can be added here */}
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
