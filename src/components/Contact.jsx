import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "dasariselvam321@gmail.com",
      link: "mailto:dasariselvam321@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Greater Munich area, Germany",
      link: null,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-briefcase",
      label: "Availability",
      value: "Open to full-time roles in Germany & EU",
      link: null,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/selvamdasari55/', color: 'from-blue-600 to-blue-400' },
    { icon: 'fab fa-github',   label: 'GitHub',   url: 'https://github.com/Selvam-DG', color: 'from-gray-700 to-gray-500' },
    { icon: 'fab fa-xing',     label: 'Xing',     url: 'https://www.xing.com/profile/Selvam_DasariGnanaprakash/web_profiles', color: 'from-teal-600 to-teal-400' },
    { icon: 'fab fa-medium',   label: 'Medium',   url: 'https://medium.com/@dasariselvam321', color: 'from-green-600 to-green-400' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();
      if (!result.success) throw new Error('Failed to send');

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Could not send the message. Please email me directly at dasariselvam321@gmail.com' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Open to software engineering roles — happy to talk about a position or a project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-blue-400 hover:underline break-all">{info.value}</a>
                    ) : (
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-5">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-gradient-to-r ${social.color} text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                    <span className="text-sm font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                <i className="fas fa-paper-plane mr-3 text-blue-400"></i>
                Send Me a Message
              </h3>

              {submitSuccess && (
                <div className="mb-6 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400 text-2xl"></i>
                  <p className="text-green-400 font-semibold">Message sent. I'll get back to you soon.</p>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 bg-red-500/20 border border-red-500 rounded-lg p-4">
                  <p className="text-red-400 text-sm">{errors.submit}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                  <input
                    id="name" name="name" type="text"
                    value={formData.name} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email *</label>
                  <input
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    id="subject" name="subject" type="text"
                    value={formData.subject} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border ${errors.subject ? 'border-red-500' : 'border-slate-700'} rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                    placeholder="Role opportunity, project, question…"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message *</label>
                  <textarea
                    id="message" name="message" rows="6"
                    value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="What would you like to discuss?"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}