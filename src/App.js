import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./page/public/LoginPage";
import HomePage from "./page/public/HomePage";
import ReviewPage from "./page/public/ReviewPage";
import "./style/HomePage.scss"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/reviewPage" element={<ReviewPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
