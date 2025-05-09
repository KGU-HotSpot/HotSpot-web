import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import "../../styles/MainPage/MainPage.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection.jsx";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer.jsx";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-page">
      <Banner />
      <MainBanner />
      <SearchBar />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default MainPage;
