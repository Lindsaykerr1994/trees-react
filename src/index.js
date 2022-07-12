import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AllTrees from "./all_trees";
import PageNotFound from "./404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/trees" element={<AllTrees />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
