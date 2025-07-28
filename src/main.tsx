import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import Counter from "./counter";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} index path="/"></Route>
      <Route element={<Counter />} index path="/counter"></Route>
    </Routes>
  </BrowserRouter>
);
