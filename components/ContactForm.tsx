"use client";

import { useState } from "react";
import SubmitBtn from "@/components/submit-btn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
        setFormData({ senderName: "", senderEmail: "", message: "" });
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
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
      {success && <p className="text-green-500">Email sent successfully!</p>}
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
            className="input-field"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <SubmitBtn className="w-full" />
      </form>
    </div>
  );
};

export default ContactForm;
