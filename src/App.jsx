import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Tarots from "./pages/Tarots";
import WaiteTarotMeaning from "./pages/Waite-tarot";
import CeccoliTarotMeaning from "./pages/Ceccoli-tarot";
import Cups from "./pages/Cups";
import Pentacles from "./pages/Pentacles";
import Swords from "./pages/Swords";
import Wands from "./pages/Wands";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
                <Navbar />
                <main className="flex-grow p-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tarots" element={<Tarots />} />
                        <Route path="/waite" element={<WaiteTarotMeaning/>} />
                        <Route path="/ceccoli" element={<CeccoliTarotMeaning/>} />
                        <Route path="/questions" element={<Questions/>} />
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
    );
}
