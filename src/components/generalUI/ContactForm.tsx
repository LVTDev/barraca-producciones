"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Example: POST to an API route
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // if (!res.ok) throw new Error("Failed to send");

      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

      setFeedback("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback(`❌ Something went wrong. Please try again. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex font-poppins w-[80%] mx-auto pt-6">
      <div className="w-1/2">
        <h2 className=" font-bold mb-4 text-[#dc493a] text-sm">CONTÁCTANOS</h2>
        <p className="text-3xl font-bold mb-4">CUÉNTANOS TU <br />PROYECTO</p>
        <p className="text font-bold mb-4">
          Nos pondremos en contacto contigo a la brevedad para agendar una cita
          y conocer más detalles sobre tu proyecto
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
        {/* Name */}
        <div>
          <label className="block font-medium">Your Name<span className="ml-1 text-[#dc493a]">*</span></label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border bg-white px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 text-black"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Your Email<span className="ml-1 text-[#dc493a]">*</span></label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border bg-white px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Your Message<span className="ml-1 text-[#dc493a]">*</span></label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border bg-white px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 text-black"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#dc493a] text-white py-2 cursor-pointer w-max px-4 hover:bg-[#9e3024] transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Feedback */}
      {feedback && <p className="mt-4 text-center text-sm">{feedback}</p>}
    </div>
  );
}
