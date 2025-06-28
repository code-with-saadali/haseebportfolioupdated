"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(null), 5000);
    }, 1500);
  };

  const animatedLink = (href: string, label: string, external = false) => (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative group hover:text-white transition-colors duration-200 inline-block"
    >
      {label}
      <span className="block h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );

  return (
    <footer className="bg-black text-white px-5 lg:px-10 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Brand Section */}
        <div className="w-full lg:w-[30%]">
          <div className="mb-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-block transition duration-300 hover:opacity-80 hover:scale-105"
            >
              INFINITE
            </Link>
            <p className="mt-2 text-neutral-400 max-w-xs">
              Creating innovative solutions for tomorrow&apos;s challenges
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-neutral-900 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transform transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-white text-black hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Subscribe"}
                </button>
              </div>

              {subscriptionStatus === "success" && (
                <p className="text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
              {subscriptionStatus === "error" && (
                <p className="text-red-400 text-sm">
                  Subscription failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-[60%]">
          <div>
            <h3 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-3 font-medium">
              {["Home", "About", "Projects", "News", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  {animatedLink(`/${item.toLowerCase()}`, item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              Resources
            </h3>
            <ul className="space-y-3 font-medium">
              {["Blog", "Documentation", "Support", "API Status", "Guides"].map((item) => (
                <li key={item}>
                  {animatedLink(`/${item.toLowerCase().replace(" ", "-")}`, item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h3>
            <ul className="space-y-3 font-medium">
              {[
                { name: "Instagram", url: "https://instagram.com" },
                { name: "LinkedIn", url: "https://linkedin.com" },
                { name: "Threads", url: "https://threads.net" },
                { name: "X.com", url: "https://x.com" },
              ].map((item) => (
                <li key={item.name}>
                  {animatedLink(item.url, item.name, true)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-neutral-800 mt-14 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Infinite. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {animatedLink("/privacy", "Privacy Policy")}
            {animatedLink("/terms", "Terms & Conditions")}
            {animatedLink("/sitemap", "Sitemap")}
            {animatedLink("https://ena.com", "Made by ena", true)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
