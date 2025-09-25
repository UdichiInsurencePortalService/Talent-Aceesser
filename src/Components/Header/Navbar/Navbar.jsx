import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import imgage from "../../../../src/images/LOGO3.png";
import AssessmentTypes from "../../Pages/AssessmentTypes/AssessmentTypes";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Mock FontAwesome icons for this demo (replace with actual FontAwesome imports)
const PhoneIcon = () => <span>📞</span>;
const EnvelopeIcon = () => <span>✉️</span>;

// Topbar Component
const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar-inner">
          {/* Left Links */}
          <ul className="top-links">
            <li>
              <PhoneIcon className="icon" />
              <Link to="/contact">08069640455</Link>
            </li>
          </ul>

          {/* Right Contact */}
          <ul className="top-contact">
            <li>
              <a href="#" role="button">
                Assessment Taker Resources
              </a>
            </li>
            <li>
              <a href="#" role="button">
                Client Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Handle dropdown toggle on mobile
  const handleDropdownClick = (e, menuName) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setOpenMenu(openMenu === menuName ? null : menuName);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setMobileMenu(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
        setOpenMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style jsx>{`
        /* Global Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Topbar Styles */
        .topbar-wrapper {
          background: #163f69;
          color: #fff;
          font-size: 0.95rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 300;
          display: block !important;
          visibility: visible !important;
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 45px;
          flex-wrap: wrap;
        }

        .top-links,
        .top-contact {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 25px;
          margin: 0;
          padding: 8px 0;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
        }

        .top-links li,
        .top-contact li {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .top-links li a,
        .top-contact li a {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .top-links li a:hover,
        .top-contact li a:hover {
          color: #ffd700;
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .icon {
          color: #ffd700;
          font-size: 14px;
        }

        /* Navbar Base */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 12px 24px;
          position: sticky;
          top: 0;
          z-index: 200;
          border-bottom: 1px solid #eee;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #163f69;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .logo:hover {
          color: #0d6efd;
          transform: scale(1.05);
        }

        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          font-size: 16px;
          gap: 24px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          padding: 8px 4px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links li a:hover {
          color: #163f69;
        }

        .nav-links li a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #163f69;
          transition: all 0.3s ease;
        }

        .nav-links li a:hover::after {
          width: 100%;
          left: 0;
        }

        /* Buttons */
        .button {
          background-color: white;
          padding: 10px 18px;
          border-radius: 8px;
          border: 2px solid #163f69;
          font-weight: 600;
          color: #163f69;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .button:hover {
          background-color: #163f69;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(22, 63, 105, 0.3);
        }

        .button-2 {
          background-color: #ff4d4d;
          padding: 10px 18px;
          border-radius: 8px;
          border: 2px solid #ff4d4d;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .button-2:hover {
          background-color: #163f69;
          border-color: #163f69;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(22, 63, 105, 0.3);
        }

        .main {
          display: flex;
          gap: 12px;
          margin-left: 20px;
          align-items: center;
        }

        /* Dropdown & Mega Menu */
        .dropdown {
          position: relative;
        }

        .mega-menu,
        .mega-menu2,
        .mega-menu3 {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          display: flex;
          justify-content: space-between;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          z-index: 150;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .dropdown:hover .mega-menu,
        .dropdown:hover .mega-menu2,
        .dropdown:hover .mega-menu3 {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mega-menu {
          width: 800px;
        }
        .mega-menu2 {
          width: 500px;
        }
        .mega-menu3 {
          width: 220px;
        }

        .mega-column {
          flex: 1;
          padding: 0 12px;
        }

        .mega-column h4 {
          margin-bottom: 12px;
          font-size: 16px;
          color: #163f69;
          font-weight: 700;
          border-bottom: 2px solid #f0f8ff;
          padding-bottom: 8px;
        }

        .mega-column a {
          display: block;
          text-decoration: none;
          color: #555;
          padding: 8px 0;
          font-size: 14px;
          transition: all 0.3s ease;
          border-radius: 4px;
          margin-bottom: 2px;
        }

        .mega-column a:hover {
          color: #163f69;
          background-color: #f8f9fa;
          padding-left: 8px;
        }

        .menu-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: transform 0.3s ease;
        }

        .menu-image:hover {
          transform: scale(1.02);
        }

        /* Mobile Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
          padding: 8px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .hamburger:hover {
          background-color: #f8f9fa;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background: #163f69;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background: #163f69;
        }

        /* Tablet Responsive (769px - 992px) */
        @media (max-width: 992px) and (min-width: 769px) {
          .topbar-wrapper {
            display: none !important;
          }

          .navbar {
            padding: 14px 20px;
          }
        }

        /* Mobile Responsive (481px - 768px) */
        @media (max-width: 768px) {
          .topbar-wrapper {
            display: none !important;
          }

          .navbar {
            padding: 14px 16px;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            flex-direction: column;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s ease;
            padding: 0;
            border-bottom: 1px solid #eee;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            gap: 0;
          }

          .nav-links.show {
            max-height: 700px;
            padding: 20px 0;
          }

          .nav-links li {
            text-align: center;
            width: 100%;
            padding: 12px 20px;
            border-bottom: 1px solid #f5f5f5;
          }

          .nav-links li:last-child {
            border-bottom: none;
          }

          .nav-links li a::after {
            display: none;
          }

          .main {
            flex-direction: column;
            margin: 16px 0 0 0;
            width: 100%;
            padding: 0 20px;
          }

          .button,
          .button-2 {
            width: 100%;
            margin: 6px 0;
            padding: 14px 18px;
            font-size: 16px;
          }

          .hamburger {
            display: flex;
          }

          /* Mobile Mega menus */
          .mega-menu,
          .mega-menu2,
          .mega-menu3 {
            position: static;
            width: 100%;
            flex-direction: column;
            box-shadow: none;
            border-radius: 0;
            padding: 16px 20px;
            background: #f8f9fa;
            border: none;
            border-top: 1px solid #dee2e6;
            opacity: 1;
            visibility: visible;
            transform: none;
            margin-top: 8px;
          }

          .mega-column {
            padding: 12px 0;
            border-bottom: 1px solid #dee2e6;
          }

          .mega-column:last-child {
            border-bottom: none;
          }

          .mega-column h4 {
            font-size: 15px;
            margin-bottom: 8px;
            text-align: left;
          }

          .mega-column a {
            padding: 8px 12px;
            text-align: left;
            font-size: 14px;
          }

          .menu-image {
            max-width: 200px;
            margin: 0 auto 12px auto;
          }
        }

        /* Small Mobile Styles (320px - 480px) */
        @media (max-width: 480px) {
          .topbar-wrapper {
            display: none !important;
          }

          .container {
            padding: 0 12px;
          }

          .navbar {
            padding: 12px 16px;
          }

          .logo {
            font-size: 20px;
          }

          .nav-links li {
            padding: 10px 16px;
          }

          .main {
            padding: 0 16px;
          }

          .button,
          .button-2 {
            padding: 12px 16px;
            font-size: 14px;
          }

          .mega-menu,
          .mega-menu2,
          .mega-menu3 {
            padding: 12px 16px;
          }
        }

        /* Extra Small Mobile (< 320px) */
        @media (max-width: 319px) {
          .topbar-wrapper {
            display: none !important;
          }

          .logo {
            font-size: 18px;
          }
        }

        /* Large Screen Optimizations */
        @media (min-width: 1400px) {
          .container {
            padding: 0 40px;
          }

          .navbar {
            padding: 12px 48px;
          }

          .mega-menu {
            width: 900px;
          }
          .mega-menu2 {
            width: 600px;
          }
        }

        /* Accessibility Improvements */
        .nav-links li a:focus,
        .button:focus,
        .button-2:focus,
        .hamburger:focus,
        .top-links li a:focus,
        .top-contact li a:focus {
          outline: 2px solid #163f69;
          outline-offset: 2px;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Animation for mobile menu items */
        @media (max-width: 768px) {
          .nav-links.show li {
            animation: slideInFromTop 0.4s ease forwards;
            opacity: 0;
            transform: translateY(-20px);
          }

          .nav-links.show li:nth-child(1) {
            animation-delay: 0.1s;
          }
          .nav-links.show li:nth-child(2) {
            animation-delay: 0.2s;
          }
          .nav-links.show li:nth-child(3) {
            animation-delay: 0.3s;
          }
          .nav-links.show li:nth-child(4) {
            animation-delay: 0.4s;
          }
          .nav-links.show li:nth-child(5) {
            animation-delay: 0.5s;
          }
          .nav-links.show li:nth-child(6) {
            animation-delay: 0.6s;
          }
          .nav-links.show .main {
            animation-delay: 0.7s;
          }

          @keyframes slideInFromTop {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* Enhanced hover effects for desktop */
        @media (min-width: 993px) {
          .top-links li a:hover,
          .top-contact li a:hover {
            box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
          }
        }

        /* Loading animation for mega menus */
        .mega-menu.loading,
        .mega-menu2.loading,
        .mega-menu3.loading {
          opacity: 0.7;
        }

        /* Print styles */
        @media print {
          .topbar-wrapper,
          .hamburger {
            display: none !important;
          }

          .navbar {
            box-shadow: none;
            border-bottom: 2px solid #000;
          }
        }
      `}</style>

      <Topbar />
      <nav className="navbar">
        {/* <div className="logo">Talent Aceeser</div> */}
        <Link to="/">
          <img
            src={imgage}
            alt="Talent Aceeser"
            loading="lazy"
            style={{ maxWidth: "200px", height: "100px", cursor: "pointer" }}
          />
        </Link>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${mobileMenu ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenu(!mobileMenu);
            setOpenMenu(null);
          }}
          aria-label="Toggle mobile menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${mobileMenu ? "show" : ""}`}>
          {/* Platform Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 992 && setOpenMenu("platform")
            }
            onMouseLeave={() => window.innerWidth > 992 && setOpenMenu(null)}
          >
            <a
              href="#"
              onClick={(e) => handleDropdownClick(e, "platform")}
              aria-expanded={openMenu === "platform"}
            >
              Platform ▾
            </a>

            {openMenu === "platform" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <Link to="/AssessmentTypes">Assessment Types</Link>
                  <Link to={"/Skills"}>Skills</Link>
                  <Link to={"/Cognitive"}>Cognitive</Link>
                  <Link to={"/Behavioral"}>Behavioral</Link>
                  <Link to={"/PopularAssessments"}>popular Assessments</Link>

                  {/* <a href="#">Popular Assessments</a> */}
                </div>
                <div className="mega-column">
                  <Link to="/QuestionStyles">Question Styles</Link>
                  <Link to={"/Simulation"}>Simulation</Link>
                  <Link to={"/QuestionStyles#multiple-choice"}>Multiple Choice</Link>
                  <Link to={"/QuestionStyles#Free-Response"}>Free Response</Link>
                  <Link to={"/Video"}>Video</Link>
                </div>
                <div className="mega-column">
                  <h4>Other Features</h4> 
                  <Link to={"/Customization"}>Customization</Link>
                  {/* <a href="#">Customization</a> */}
                  <a href="#">Reporting</a>
                  <a href="#">Proctoring</a>
                  <a href="#">Security & Compliance</a>
                </div>
                <div className="mega-column">
                  <h4>Platform Overview</h4>
                  <img
                    src="https://via.placeholder.com/200x120?text=Platform+Overview"
                    alt="Platform overview dashboard"
                    className="menu-image"
                  />
                  <a href="#">Learn More →</a>
                </div>
              </div>
            )}
          </li>

          {/* Industries Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 992 && setOpenMenu("industries")
            }
            onMouseLeave={() => window.innerWidth > 992 && setOpenMenu(null)}
          >
            <a
              href="#"
              onClick={(e) => handleDropdownClick(e, "industries")}
              aria-expanded={openMenu === "industries"}
            >
              Industries ▾
            </a>
            {openMenu === "industries" && (
              <div className="mega-menu2">
                <div className="mega-column">
                  <a href="#">Manufacturing</a>
                  <a href="#">Healthcare</a>
                  <a href="#">Construction</a>
                  <a href="#">Financial Services</a>
                  <a href="#">Education</a>
                  <a href="#">Call Centers</a>
                  <a href="#">Retail</a>
                </div>
                <div className="mega-column">
                  <a href="#">Government</a>
                  <a href="#">Engineering</a>
                  <a href="#">Utilities/Energy</a>
                  <a href="#">Transportation</a>
                  <a href="#">Staffing</a>
                  <a href="#">Hospitality</a>
                  <a href="#">Legal Services</a>
                </div>
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              window.innerWidth > 992 && setOpenMenu("resources")
            }
            onMouseLeave={() => window.innerWidth > 992 && setOpenMenu(null)}
          >
            <a
              href="#"
              onClick={(e) => handleDropdownClick(e, "resources")}
              aria-expanded={openMenu === "resources"}
            >
              Resources ▾
            </a>
            {openMenu === "resources" && (
              <div className="mega-menu3">
                <div className="mega-column">
                  <a href="#">Blog</a>
                  <a href="#">Case Studies</a>
                  <a href="#">Webinars</a>
                  <a href="#">ROI Calculator</a>
                  <a href="#">Assessment Resources</a>
                </div>
              </div>
            )}
          </li>

          <li>
            <a href="#">Assessment Library</a>
          </li>
          <li>
            <a href="#">Integrations</a>
          </li>
          <li>
            <a href="#">Subscription Options</a>
          </li>

          {/* Buttons */}
          <div className="main">
            <button className="button">Take Your Test</button>
            <button className="button-2">Get a Demo</button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
