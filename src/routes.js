import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Links from "./pages/links";
import Error from "./pages/error";

export default function RoutesApp() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
