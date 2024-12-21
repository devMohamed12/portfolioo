import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactUs = () => {
  const label = "text-[17px]";
  const input = "input focus:outline-none w-full";

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_6bg8wxw", "template_idi3m9d", values, "OnFvf0nGGwNmXVnuA")
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          resetForm();
        },
        (error) => {
          console.log("Error sending message:", error.text);
        }
      );
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

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="lg:w-4/6 w-[90%]">
              <motion.div
                className="my-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className={label}>
                  Your Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`${input}`}
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
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
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`${input}`}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
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
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className={`${input}`}
                  placeholder="Enter your subject"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
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
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className={`${input} w-full resize-none textarea h-32`}
                  placeholder="Enter your message"
                  rows={3}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-3 py-5 block text-lg rounded-xl bg-teal-600 text-white w-24"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactUs;
