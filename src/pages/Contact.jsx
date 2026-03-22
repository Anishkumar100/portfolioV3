// pages/Contact.jsx
import ContactHero from '../sections/contact/ContactHero';
import ContactLayout from '../sections/contact/ContactLayout';
import ReachMeCards from '../sections/contact/ReachMeCards';
import FAQAccordion from "../sections/contact/FAQAccordion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <ContactHero />
      <ContactLayout />
      <ReachMeCards />
      <FAQAccordion />
    </main>
  );
}
