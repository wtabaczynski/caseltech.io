"use client";

import { useState } from "react";
import SubmitBtn from "@/components/submit-btn";
import { motion } from "framer-motion";
import clsx from "clsx";

const MAX_MESSAGE_LENGTH = 5000;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setShowSuccessAnimation(true);
        setFormData({ senderName: "", senderEmail: "", message: "" });

        setTimeout(() => setShowSuccessAnimation(false), 5000);
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg relative">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="senderEmail"
            placeholder="Your e-mail address"
            required
            className="input-field"
            value={formData.senderEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="senderName"
            placeholder="Your name"
            required
            className="input-field"
            value={formData.senderName}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            required
            maxLength={MAX_MESSAGE_LENGTH}
            className="input-field"
            value={formData.message}
            onChange={handleChange}
          />
          {/* Pasek postępu i licznik */}
          <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={clsx(
                  "h-full transition-all duration-300",
                  formData.message.length >= MAX_MESSAGE_LENGTH
                    ? "bg-red-500"
                    : formData.message.length >= MAX_MESSAGE_LENGTH * 0.8
                    ? "bg-yellow-500"
                    : "bg-blue-500"
                )}
                style={{
                  width: `${Math.min(
                    (formData.message.length / MAX_MESSAGE_LENGTH) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
            <p className="text-sm mt-1 text-right text-gray-600">
              {formData.message.length}/{MAX_MESSAGE_LENGTH}
            </p>
          </div>
        </div>
        <SubmitBtn className="w-full" />
      </form>

      {showSuccessAnimation && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-green-500 text-white text-lg font-semibold rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          ✅ Email sent successfully!
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
