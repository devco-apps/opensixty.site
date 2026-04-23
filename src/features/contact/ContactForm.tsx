import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState<string | null>(null);

  const handleRecaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      setStatus("reCAPTCHA not available. Please try again in a few seconds.");
      return null;
    }

    try {
      const token = await executeRecaptcha("contact");
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution error:", error);
      setStatus("Failed to execute reCAPTCHA. Please try again.");
      return null;
    }
  }, [executeRecaptcha]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
        Start Your Journey Today
      </p>
      <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-8">
        Feedback Form
      </h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setStatus("Submitting...");
          const token = await handleRecaptchaVerify();

          if (!token) {
            setSubmitting(false);
            return;
          }

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...values, token }),
            });

            const data = await response.json();

            if (data.success) {
              setStatus("Form submitted successfully!");
              resetForm();
            } else {
              setStatus(data.message || "An error occurred.");
            }
          } catch (error) {
            console.error("Form submission error:", error);
            setStatus("An unexpected error occurred. Please try again.");
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name*"
                  className="w-full bg-white p-4 rounded-md border border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name*"
                  className="w-full bg-white p-4 rounded-md border border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
              <div>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone Number*"
                  className="w-full bg-white p-4 rounded-md border border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>
            <div>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email Address*"
                className="w-full bg-white p-4 rounded-md border border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>
            <div>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Message*"
                rows={5}
                className="w-full bg-white p-4 rounded-md border border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>
            {status && (
              <div
                className={`mt-1 text-sm ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white font-bold py-4 px-6 rounded-md hover:bg-gray-900 transition duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
