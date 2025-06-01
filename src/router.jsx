import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
// import AuthLayout from "./layout/AuthLayout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth" element={<AuthLayout />}>
          <Route path="iniciar-sesion" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route> */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
