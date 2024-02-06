import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
