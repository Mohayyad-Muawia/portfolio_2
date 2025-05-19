"use client";
import ScrollFadeIn from "@/components/motion/FadeIn";
import { send_email } from "@/lib/actions";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isFly, setIsFly] = useState(false);
  const fly = () => {
    setIsFly(true);
    setTimeout(() => {
      setIsFly(false);
    }, 2100);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fly();

    try {
      toast.promise(
        send_email(formData),
        {
          loading: "Sending Email...",
          success: "Email sent successfully!",
          error: "Failed to send email",
        },
        { id: "send-email" }
      );

      // Clear the message after 5 seconds
      clearForm();
    } catch (error) {
      toast.error(`Failed to send email ${error.message}`);
      clearForm();
    }
  };

  return (
    <>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <ScrollFadeIn>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your Email so I can replay to you"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter a message"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <button type="submit" className="main-btn fade-left">
              Send Email
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={isFly ? "fly" : ""}
              />
            </button>
          </ScrollFadeIn>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
