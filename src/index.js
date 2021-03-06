import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import App from "./App";
import AllTrees from "./components/trees/all_trees";
import Tree from "./components/trees/tree";
import PageNotFound from "./components/general/404";
import HomePage from "./components/general/home_page";
// Import styling
import "./stylesheets/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="trees" element={<AllTrees />}></Route>
        <Route path="trees/:treeId" element={<Tree />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
