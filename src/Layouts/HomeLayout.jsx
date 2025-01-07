import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css"

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#1A1A1A] text-white inter">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

     
      <main className="flex-grow w-full max-w-[1420px] mx-auto p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-14">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
