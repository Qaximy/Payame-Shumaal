'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

type FormField = 'name' | 'email' | 'subject' | 'message';

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<FormField, string>>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validate = () => {
    let isValid = true;
    const newErrors: Record<FormField, string> = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Thanks! We will contact you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Whether you're planning your dream vacation or just have a question, we’d love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FiMail className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Email Us</p>
                <p className="text-gray-600">PayameShumaal@gamil.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Call Us</p>
                <p className="text-gray-600">+923488134572</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiMapPin className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Visit Us</p>
                <p className="text-gray-600">Blue Area , Islamabad Capital Territory, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693367.128974951!2d73.07115105463278!3d35.80256676390606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e67fb7363c93f7%3A0x89c97c07e5fa64de!2sGilgit-Baltistan!5e0!3m2!1sen!2s!4v1714997201890!5m2!1sen!2s"
    width="100%"
    height="250"
    className="rounded-lg border"
    loading="lazy"
  ></iframe>
</div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Tell us about your travel needs..."
                className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
            >
              Submit Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
