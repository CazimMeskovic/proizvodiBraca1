/* // app/contact/page.js
export default function ContactPage() {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-4">We'd love to hear from you! Reach out today.</p>
            <form className="mt-8 space-y-4 max-w-xl mx-auto">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border" />
                <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border"></textarea>
                <button type="submit" className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg">Submit</button>
            </form>
        </section>
    );
}
 */
// app/contact/page.tsx

/* import ContactSection from '@/components/ContactSection'; */
import ContactSection from '../components/ContactSection';

export const metadata = {
    title: 'Contact – EarthMeta Advisor',
    description: 'Get in touch with EarthMeta Advisor for more information or questions regarding metaverse city consulting packages.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-muted text-foreground">
            <ContactSection />
        </main>
    );
}