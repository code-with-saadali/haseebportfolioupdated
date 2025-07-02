"use client";

import Image from "next/image";

const offices = [
  {
    city: "SAN DIEGO",
    phone: "+1 123 45 657 56",
    email: "INFO-SD@INFINITE.COM",
    address: "Ocean View Blvd, San Diego, CA 92113, USA",
  },
  {
    city: "NEW YORK",
    phone: "+1 723 46 688 31",
    email: "INFO-NY@INFINITE.COM",
    address: "78 Mercer St, New York, NY 10012, USA",
  },
  {
    city: "LONDON",
    phone: "+44 093 4568 844",
    email: "INFO-LD@INFINITE.CO.UK",
    address: "7-11 Lexington St, London W1F 9AF, UK",
  },
  {
    city: "AMSTERDAM",
    phone: "+42 093 8765 811",
    email: "INFO-AM@INFINITE.COM",
    address: "Rozengracht 207, 1016 LZ Amsterdam, NL",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-28">
      {/* Top Text */}
      <div className="px-5 lg:px-10 pt-16 pb-10">
        <p className="uppercase text-sm text-gray-400">Get in touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
          LET’S START THE <br /> CONVERSATION.
        </h2>
      </div>

      {/* Image */}
      <div className="w-full h-[700px] relative">
        <Image
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1920&q=80"
          alt="Runner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Office Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20 py-14">
        {offices.map((office) => (
          <div key={office.city}>
            <h3 className="text-lg font-semibold">{office.city}</h3>
            <p className="text-sm text-gray-300 mt-2">{office.phone}</p>
            <p className="text-sm text-gray-300">{office.email}</p>
            <p className="text-sm text-gray-400 mt-2">{office.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
