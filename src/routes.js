import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Links from "./pages/Links/index";
import Error from "./pages/Error/index";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
