import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DentalHubPage from './pages/DentalHubPage';
import DentalTreatmentPage from './pages/DentalTreatmentPage';
import SkinHubPage from './pages/SkinHubPage';
import SkinTreatmentPage from './pages/SkinTreatmentPage';
import HairHubPage from './pages/HairHubPage';
import HairTreatmentPage from './pages/HairTreatmentPage';
import ApproachPage from './pages/ApproachPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import JournalPage from './pages/JournalPage';
import JournalArticlePage from './pages/JournalArticlePage';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#121016] flex flex-col font-sans selection:bg-[#3B1457] selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Dental Routes */}
          <Route path="/dental" element={<DentalHubPage />} />
          <Route path="/dental/:slug" element={<DentalTreatmentPage />} />
          
          {/* Skin Routes */}
          <Route path="/skin" element={<SkinHubPage />} />
          <Route path="/skin/:slug" element={<SkinTreatmentPage />} />
          
          {/* Hair Routes */}
          <Route path="/hair" element={<HairHubPage />} />
          <Route path="/hair/:slug" element={<HairTreatmentPage />} />
          
          {/* Meta & Info Routes */}
          <Route path="/our-approach" element={<ApproachPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookingPage />} />
          
          {/* Journal Routes */}
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalArticlePage />} />

          {/* Catch-all fallback redirecting to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
