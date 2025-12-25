import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './Language';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import WaiteTarotPage from "./pages/Waite-tarot";
import MoonTarotPage from "./pages/Moon-tarot";
import CeccoliTarotPage from "./pages/Ceccoli-tarot";
import ManaraTarotPage from "./pages/Manara-tarot";
import AfterTarotPage from "./pages/After-tarot";
import MajorArcana from "./pages/Major-arcana";
import Cups from "./pages/Cups";
import Pentacles from "./pages/Pentacles";
import Swords from "./pages/Swords";
import Wands from "./pages/Wands";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <LanguageProvider>
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/waite" element={<WaiteTarotPage/>} />
                        <Route path="/moon" element={<MoonTarotPage/>} />
                        <Route path="/ceccoli" element={<CeccoliTarotPage/>} />
                        <Route path="/manara" element={<ManaraTarotPage/>} />
                        <Route path="/after" element={<AfterTarotPage/>} />
                        <Route path="/major-arcana" element={<MajorArcana/>} />
                        <Route path="/cups" element={<Cups />} />
                        <Route path="/pentacles" element={<Pentacles />} />
                        <Route path="/swords" element={<Swords />} />
                        <Route path="/wands" element={<Wands />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
        </LanguageProvider>
    );
}
