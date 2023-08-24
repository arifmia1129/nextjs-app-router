import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const WithHeaderFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-3xl font-bold">{children}</div>
      <Footer />
    </>
  );
};

export default WithHeaderFooter;
