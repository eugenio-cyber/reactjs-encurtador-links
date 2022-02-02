import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Links from "./pages/links";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/links" element={<Links />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
