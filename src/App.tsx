import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResumePage from "./pages/ResumePage";
import Contacts from "./pages/Contacts";

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="flex flex-col min-h-screen font-sans"
        style={{ backgroundColor: "var(--app-background-color)" }}
      >
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20 md:pt-0 px-2 sm:px-4">
          {" "}
          {/* pt-20 to ensure content starts below fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
