
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 dark:bg-gray-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato para discutirmos seu projeto ou oportunidades de colaboração
            </p>
          </div>
        </div>
        
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
