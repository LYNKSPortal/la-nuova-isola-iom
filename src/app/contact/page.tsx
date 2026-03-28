import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact La Nuova Isola | Italian Restaurant Isle of Man",
  description: "Contact La Nuova Isola Italian restaurant in the Isle of Man. Find our location, phone number, email, and opening hours.",
  keywords: ["contact Italian restaurant", "La Nuova Isola contact", "Isle of Man restaurant", "restaurant location", "Italian dining contact"],
  openGraph: {
    title: "Contact La Nuova Isola",
    description: "Contact La Nuova Isola Italian restaurant in the Isle of Man.",
    url: "https://lanuovaisola.im/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
