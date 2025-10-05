import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Import pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

// your 14 submenu pages imports...
import ERAReceived from "./pages/ERAReceived";
import InProcessClearinghouse from "./pages/InProcessClearinghouse";
import InProcessPayer from "./pages/InProcessPayer";
import Completed from "./pages/Completed";
import Rejected from "./pages/Rejected";
import ERADenied from "./pages/ERADenied";
import NotSubmitted from "./pages/NotSubmitted";
import MissingInformation from "./pages/MissingInformation";
import ARAging from "./pages/ARAging";
import DenialManagement from "./pages/DenialManagement";
import PaymentPerformance from "./pages/PaymentPerformance";
import PaymentCompleted from "./pages/PaymentCompleted";
import PartialPayment from "./pages/PartialPayment";
import Pending from "./pages/Pending";

import "./grid.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes (with sidebar + header layout) */}
        <Route
          path="/*"
          element={
            <div className="app-grid">
              <header className="header">AR Management Tool</header>
              <aside className="sidebar">
                <Sidebar />
              </aside>
              <section className="main-bottom">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/era-received" element={<ERAReceived />} />
                  <Route path="/in-process-clearinghouse" element={<InProcessClearinghouse />} />
                  <Route path="/in-process-payer" element={<InProcessPayer />} />
                  <Route path="/completed" element={<Completed />} />
                  <Route path="/rejected" element={<Rejected />} />
                  <Route path="/era-denied" element={<ERADenied />} />
                  <Route path="/not-submitted" element={<NotSubmitted />} />
                  <Route path="/missing-information" element={<MissingInformation />} />
                  <Route path="/ar-aging" element={<ARAging />} />
                  <Route path="/denial-management" element={<DenialManagement />} />
                  <Route path="/payment-performance" element={<PaymentPerformance />} />
                  <Route path="/payment-completed" element={<PaymentCompleted />} />
                  <Route path="/partial-payment" element={<PartialPayment />} />
                  <Route path="/pending" element={<Pending />} />
                </Routes>
              </section>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
