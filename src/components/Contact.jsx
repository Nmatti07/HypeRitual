import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwXx8VS2eFSuvCvrfi1nk0qK_5m-Mei74hN2-1d2WOn07HuUQCvB5wxrdUjtG-bAlZv/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white/5 backdrop-blur-lg p-8 rounded-2xl"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20"
          placeholder="Your Name"
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20"
          placeholder="Email"
          required
        />

        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20"
          placeholder="Phone Number"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20 h-32"
          placeholder="Message"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-xl transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully 🚀
          </p>
        )}
      </form>
    </section>
  );
}