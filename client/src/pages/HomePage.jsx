import Header from '../components/Header.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import MainContent from '../components/MainContent.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Footer from '../components/Footer.jsx';
import SubContentSection from '../components/SubContentSection.jsx';
import Profile from '../components/Profile.jsx';

const HomePage = () => {
    return (
        <div style={{ minHeighteight: "100%" }} className='position-relative'>
            <Header />
            <ScrollToTop />
            <div className="container custom-container">
                <HeroSection />
                <MainContent />
                <Profile />
                <SubContentSection />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;