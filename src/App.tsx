import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardShopLevy from "./pages/DashboardShopLevy";
import DashboardDemandNotice from "./pages/DashboardDemandNotice";
import DashboardCertificates from "./pages/DashboardCertificates";
import CertificateApply from "./pages/CertificateApply";
import CertificatePreview from "./pages/CertificatePreview";
import CertificateVerify from "./pages/CertificateVerify";
import CertificateApplication from "./pages/CertificateApplication";
import DashboardNotifications from "./pages/DashboardNotifications";
import DashboardPayments from "./pages/DashboardPayments";
import DashboardTickets from "./pages/DashboardTickets";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardFAQ from "./pages/DashboardFAQ";
import ShopPortal from "./pages/ShopPortal";
import BusinessPortal from "./pages/BusinessPortal";
import AdminDashboard from "./pages/AdminDashboard";
import AdminApplications from "./pages/AdminApplications";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/logmas">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/shop-levy" element={<DashboardShopLevy />} />
          <Route path="/dashboard/demand-notice" element={<DashboardDemandNotice />} />
          <Route path="/dashboard/certificates" element={<DashboardCertificates />} />
          <Route path="/dashboard/certificates/:type" element={<CertificateApply />} />
          <Route path="/dashboard/certificates/preview/:id" element={<CertificatePreview />} />
          <Route path="/verify/:certNumber" element={<CertificateVerify />} />
          <Route path="/dashboard/apply" element={<CertificateApplication />} />
          <Route path="/dashboard/notifications" element={<DashboardNotifications />} />
          <Route path="/dashboard/payments" element={<DashboardPayments />} />
          <Route path="/dashboard/tickets" element={<DashboardTickets />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/dashboard/faq" element={<DashboardFAQ />} />
          <Route path="/shop-portal" element={<ShopPortal />} />
          <Route path="/business-portal" element={<BusinessPortal />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
