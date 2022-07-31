import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import QuizPage from "./Pages/QuizPage";
import ResultsPage from "./Pages/ResultsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="home" element={<LandingPage />} />
                <Route path="quiz" element={<QuizPage />} />
                <Route path="results" element={<ResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
