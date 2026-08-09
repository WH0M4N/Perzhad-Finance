import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home/HomePage";
import ServicesPage from "../pages/Services/ServicesPage";
import AboutPage from "../pages/About/AboutPage";
import ArticlesPage from "../pages/Article/ArticlesPage";
import ConsultationPage from "../pages/Consultation/ConsultationPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/articles" element={<ArticlesPage />} />

          <Route path="/consultation" element={<ConsultationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
