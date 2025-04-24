
/* 
'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '',
        website: '', // honeypot
    });

    const [captchaToken, setCaptchaToken] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert('Please verify that you are not a robot.');
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, token: captchaToken }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    company: '',
                    website: '',
                });
                setCaptchaToken(null);
            } else {
                const errorText = await res.text();
                console.error('Server error:', errorText);
                setStatus('error');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="max-w-xl mx-auto pt-32 px-4 py-14">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="company"
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full p-2 border rounded"
                    value={formData.company}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full p-2 border rounded"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                />

                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {status === 'success' && (
                <p className="mt-4 text-green-600">Thank you for your message. We’ll get back to you soon.</p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-red-600">There was an error sending your message. Please try again later.</p>
            )}

            <div className="mt-10 text-sm text-gray-600">
                <p>
                    Email:{' '}
                    <a href="mailto:contact@earthmetaadvisor.com" className="underline">
                        contact@earthmetaadvisor.com
                    </a>
                </p>
                <p>Office Hours: Mon-Fri, 9:00 - 17:00 CET</p>
            </div>
        </div>
    );
}
 */

'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    website: '', // honeypot
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Molimo vas da potvrditi da niste robot.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          company: '',
          website: '',
        });
        setCaptchaToken(null);
      } else {
        const errorText = await res.text();
        console.error('Greška na serveru:', errorText);
        setStatus('error');
      }
    } catch (err) {
      console.error('Greška prilikom slanja:', err);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          Kontaktirajte nas
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              required
              placeholder="Vaše ime"
              className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email adresa"
              className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <input
            name="company"
            type="text"
            placeholder="Kompanija (opcionalno)"
            className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
            value={formData.company}
            onChange={handleChange}
          />
          
          <textarea
            name="message"
            required
            placeholder="Vaša poruka"
            className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />

          {/* Honeypot field - hidden */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />

          {/* reCAPTCHA */}
        {/*   <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            className="my-4"
          /> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Šaljemo...' : 'Pošaljite poruku'}
          </button>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <p className="mt-6 text-green-600 text-center">Hvala na vašoj poruci. Uskoro ćemo vam se javiti.</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-red-600 text-center">Došlo je do greške prilikom slanja vaše poruke. Pokušajte ponovo kasnije.</p>
        )}

        {/* Kontakt Informacije */}
        <div className="mt-12 text-center text-sm text-gray-300">
          <p>
            Email:{' '}
            <a href="mailto:adism72@bih.net.ba" className="underline text-yellow-500">
            adism72@bih.net.ba
            </a>
          </p>
          <p className="mt-2">Telefon: 037 306-177</p>
          <p className="mt-2">Radno vrijeme: Pon-Pet, 9:00 - 17:00 CET</p>
        </div>
      </div>
    </section>
  );
}
