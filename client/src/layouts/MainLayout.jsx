import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/common/PageTransition";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
