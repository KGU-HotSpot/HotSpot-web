import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
