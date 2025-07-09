import React from 'react';

const contactInfo = [
  {
    label: "Email",
    value: "dasariselvam321@gmail.com",
    link: "mailto:dasariselvam321@gmail.com"
  },
  {
    label: "Phone",
    value: "+49 157 736 33099"
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/selvamdasari55",
    link: "https://www.linkedin.com/in/selvamdasari55/"
  }
];

const addresses = [
  {
    label: "Current Address",
    lines: [
      "Neckar Straße 36",
      "72160 Horb am Neckar",
      "Deutschland"
    ]
  },
  {
    label: "Permanent Address",
    lines: [
      "Westerndorfer Straße 47K",
      "83024 Rosenheim",
      "Deutschland"
    ]
  },
  {
    label: "Home Address",
    lines: [
      "Chithrangi Kota Street, 1-190-16/B",
      "Naryanavanam - 517581",
      "Andhra Pradesh, India"
    ]
  }
];

export default function Contact() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact & Address Info */}
        <div className="space-y-10">
          <section className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="w-28 font-medium">{item.label}:</span>
                  {item.link ? (
                    <a href={item.link} className="text-blue-400 hover:underline break-words">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Addresses</h2>
            <div className="space-y-6">
              {addresses.map((addr, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-lg">{addr.label}</h4>
                  <address className="not-italic text-gray-300 leading-6 ml-2">
                    {addr.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium">Subject</label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Subject"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Your message"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
