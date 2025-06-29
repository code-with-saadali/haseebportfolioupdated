'use client'
import { useState, FormEvent } from "react";

const offices = [
  { value: "", label: "Select Office..." },
  { value: "ny", label: "New York" },
  { value: "la", label: "Los Angeles" },
  { value: "sf", label: "San Francisco" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    office: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${form.name} from ${form.office} office!`);
    // Add actual send logic here
  };

  return (
    <div className="bg-black flex flex-col md:flex-row px-5 lg:px-10 py-10 gap-24 text-white border-t border-[#333333]">
      <div className="flex-1 flex items-start justify-center md:justify-start">
        <h1 className="text-3xl font-semibold tracking-wide">SEND A MESSAGE</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 max-w-md flex flex-col gap-5"
      >
        <input
          className="bg-[#1C1C1C] text-white rounded-xl p-2 border border-[#252525] focus:border-[#333333] outline-none"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#1C1C1C] text-white rounded-xl p-2 border border-[#252525] focus:border-[#333333] outline-none"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          className="bg-[#1C1C1C] text-white rounded-xl p-2 border cursor-pointer border-[#252525] focus:border-[#333333] outline-none"
          name="office"
          value={form.office}
          onChange={handleChange}
          required
        >
          {offices.map((office) => (
            <option
              key={office.value}
              value={office.value}
              disabled={office.value === ""}
            >
              {office.label}
            </option>
          ))}
        </select>
        <textarea
          className="bg-[#1C1C1C] text-white rounded-md p-2 border border-[#252525] focus:border-[#333333] outline-none resize-y min-h-[100px]"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="mt-2 bg-[#333333] hover:bg-[#1C1C1C] transition-colors rounded-xl p-2 cursor-pointer font-semibold text-white"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
