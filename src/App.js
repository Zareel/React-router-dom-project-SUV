import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import SUV from "./pages/SUV";
import SUVDetails from "./pages/SUVDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/admin/Dashboard";
import Income from "./pages/admin/Income";
import Review from "./pages/admin/Review";
import AdminLayout from "./components/AdminLayout";
import SUVs from "./pages/admin/SUV";
import AdminSUVDetails from "./pages/admin/AdminSUVDetails";
import Pricing from "./pages/admin/Pricing";
import Photos from "./pages/admin/Photos";
import SUVinfo from "./pages/admin/SUVinfo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="suv" element={<SUV />} />
        <Route path="suv/:id" element={<SUVDetails />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="review" element={<Review />} />
          <Route path="suv" element={<SUVs />} />

          <Route path="suv/:id" element={<AdminSUVDetails />}>
            <Route index element={<SUVinfo/>} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
