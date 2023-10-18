import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog"
import BizeUlasin from "./components/BizeUlasin";

export const Routers = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bize-ulasin" element={<BizeUlasin />} />
      </Routes>
    </Router>
  )

}