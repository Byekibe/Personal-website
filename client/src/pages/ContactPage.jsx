import Header from "../components/Header";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
    return (
        <>
            <Header />
            <h1 className="text-center my-3 font-monospace">Drop a message</h1>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;