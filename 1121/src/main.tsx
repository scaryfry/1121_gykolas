import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllPizza from "./pages/AllPizza";
import OnePizza from "./pages/OnePizza";
import EditPizza from "./pages/EditPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePizza from "./pages/CreatePizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<AllPizza/>}></Route>
         <Route path="/:id" element={<OnePizza/>}></Route>
         <Route path="/edit-page/:id" element={<EditPizza/>}></Route>
         <Route path="/create-page" element={<CreatePizza/>}></Route>
         <Route path="*" element = {<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);