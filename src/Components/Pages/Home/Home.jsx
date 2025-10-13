import React from "react";
import { useState } from "react";
import "./Home.css"; // optional for extra styling
import img from "../../../../src/images/banner.jpg";
import img2 from "../../../../src/images/hrimg.png";
import img3 from "../../../../src/images/resume.png";
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import Udichi from "../../../images/Testimonialimage/udichi-logo.png";
import Teamlease from "../../../images/Testimonialimage/Teamlease.png";
import st from "../../../images/Testimonialimage/st.png";
import sectorskill from "../../../images/Testimonialimage/sectorskill.png";
import pratichi from "../../../images/Testimonialimage/pratichi.png";
import asdp from "../../../images/Testimonialimage/asdp.png";
import amity from "../../../images/Testimonialimage/amity2.png";
// import demo from "../../../images/Testimonialimage/demo.png";

// logo talent aceess
// import imgage from "../../../../src/images/logo2.png";
// import Footer from "../../Header/Footer/Footer";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 2000, // animation speed
      // once: false,     // 👈 false ka matlab: scroll karte hi har baar animation chalega
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.value / 50;
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(interval);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(currentValue);
            return newValues;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  const industries = [
    { title: "Manufacturing", img: img },
    { title: "Federal, State & Local Government", img: img3 },
    { title: "Healthcare", img: img2 },
    { title: "Engineering", img: img },
    { title: "Construction", img: img2 },
    { title: "Utilities/Energy", img: img3 },
    { title: "Financial Services", img: img },
    { title: "Transportation and Logistics", img: img2 },
    { title: "Education", img: img2 },
    { title: "staffing", img: img2 },
    { title: "Call Center", img: img2 },
    { title: "Hospitality", img: img2 },
    { title: "Retail", img: img2 },
    { title: "Legal", img: img2 },
    { title: "Services", img: img2 },
  ];

   const statsData = [
    { id: 1, value: 95, label: 'Reduction in Time to Hire', suffix: '%' },
    { id: 2, value: 80, label: 'Improvement in Quality of Hire', suffix: '%' },
    { id: 3, value: 70, label: 'Cost Savings per Hire', suffix: '%' }
  ];

  const [activeTab, setActiveTab] = useState("library");

  const tabs = [
    {
      id: "library",
      label: "Assessment Library",
      title: "Extensive Test Library",
      content:
        "Use tried-and-true content spanning over 600 subjects and 70,000 questions.",
      button: "Explore Assessment Types",
      image: "/images/library.png",
    },
    {
      id: "custom",
      label: "Customizations",
      title: "Robust Customization",
      content:
        "Mix-and-match questions or create your own to assemble a test specific to your unique job and company requirements.",
      button: "Explore Customizations",
      image: "/images/custom.png",
    },
    {
      id: "anticheat",
      label: "Anti Cheat ",
      title: "Anti-Cheat Tools",
      content:
        "Authenticate accurate results with Telent Aceess anti-cheat tools and AI-assisted proctoring solutions.",
      button: "Anti-Cheat Features",
      image: "/images/anticheat.png",
    },
    {
      id: "experts",
      label: "Assessment Experts",
      title: "Assessment Experts",
      content:
        "Lean on Telent Aceess experts who can assist with test consultation, analysis, and refinement.",
      button: "Explore our experts",
      image: "/images/experts.png",
    },
  ];

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="container-fluid main-section">
        <div className="form-wrapper">
          <div className="container">
            <div className="row align-items-center g-4">
              {/* Left Side - Form */}
              <div className="col-lg-6">
                <div className="form-section">
                  <h2 className="text-center">
                    The Smarter Way to Hire Top Talent
                  </h2>
                  <p className="text-center">
                    Reliable skill tests for quality hiring decisions.
                  </p>

                  <form>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control1"
                          placeholder="First Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control1"
                          placeholder="Last Name *"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <select className="form-select" required>
                          <option value="">Company Size *</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-199">51-199</option>
                          <option value="200-999">200-999</option>
                          <option value="1000+">1000+</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <select className="form-select" required>
                          <option value="">Type *</option>
                          <option value="company">Company/Organization</option>
                          <option value="student">Test Taker/Student</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control1"
                          placeholder="Work Email *"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <div className="form-check d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="newsletter"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="newsletter"
                          >
                            Subscribe to the Newsletter
                          </label>
                        </div>
                      </div>

                      <div className="col-12 butn">
                        <button type="submit" className="btn1">
                          Get a Demo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="col-lg-6">
                <div className="image-section">
                  <img
                    src={img}
                    alt="Form Illustration"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slid-section">
        <div>
          <h2
            style={{
              fontFamily: "popins, sans-serif",
              fontWeight: "500",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Trusted by 1,000s of successful organizations
          </h2>
        </div>
        <div className="mrque">
          <marquee behavior="left" direction="left">
            <img className="marq-img" src={pratichi} alt="" />
            <img className="marq-img" src={asdp} alt="" />
            <img className="marq-img" src={sectorskill} alt="" />
            <img className="marq-img" src={amity} alt="" />
            <img className="marq-img" src={st} alt="" />
            <img className="marq-img" src={Udichi} alt="" />
            <img className="marq-img" src={Teamlease} alt="" />
          </marquee>
        </div>
      </div>{" "}
      {/* 🔹 Added AOS zoom-in on whole section */}
      <div className="container">
        <div>
          <h2
            style={{
              fontFamily: "popins, sans-serif",
              fontWeight: "500",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Hiring is Getting Harder
          </h2>
        </div>
        <div className="row" style={{ margin: "20px" }}>
          <div className="col-md-6 col-12">
            {/* 🔹 Added fade-up effect with slight delay */}
            <div className="card1">
              <img src={img2} alt="img2" className="img-fluid imges" />
              <p>
                HR Teams are overwhelmed by the high volume of applicants per
                role, and qualified talent is hard to identify.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            {/* 🔹 Added fade-up effect with more delay (200ms) */}
            <div className="card1">
              <img src={img3} alt="img3" className="img-fluid imges" />
              <p>
                Resumes and cover letters aren't enough. Hiring managers need
                new tools to assess job fit and future performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pre-section">
        <h1
          style={{
            fontFamily: "popins, sans-serif",
            fontWeight: "500",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Why Pre-Employment Assessments Work
        </h1>
        <div className="row-section">
          {/* Left Column */}
          <div className="col-md-6 col-12 left-column">
            <div className="left-card" style={{ color: "#F9FAFB" }}>
              <div className="card-image">
                <img src={img2} alt="Assessment" />
              </div>
              <div className="card-content">
                <h4
                  style={{
                    fontFamily: "popins, sans-serif",
                    fontWeight: "500",
                    color: "blue",
                  }}
                >
                  Go beyond the resume
                </h4>
                <h2
                  style={{
                    fontFamily: "popins, sans-serif",
                    fontWeight: "600",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Assess hard skills capabilities to find the right candidate
                  for the job.
                </h2>
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Pre-employment tests identify talented candidates before the
                  interview process.
                </p>
                <div className="card-buttons">
                  <button
                    style={{
                      background: "linear-gradient(135deg, #007bff, #00b4d8)",
                      color: "white",
                      fontFamily: '"Poppins", sans-serif',
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px 28px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #00b4d8, #007bff)";
                      e.target.style.boxShadow =
                        "0 6px 15px rgba(0, 123, 255, 0.4)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #007bff, #00b4d8)";
                      e.target.style.boxShadow =
                        "0 4px 10px rgba(0, 123, 255, 0.3)";
                      e.target.style.transform = "translateY(0)";
                    }}
                    onMouseDown={(e) => {
                      e.target.style.transform = "scale(0.97)";
                    }}
                    onMouseUp={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                    }}
                  >
                    Get a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 col-12 right-column">
            <div className="info-card">
              <h3>Test Hard Skills</h3>
              <p>
                Go beyond the resume. Pull from hundreds of subjects and
                thousands of questions to assess skills essential for job
                success.
              </p>
              <a href="#">Learn More →</a>
            </div>

            <div className="info-card">
              <h3>Screen Out Bad Fits</h3>
              <p>
                Leverage objective, data driven information to quickly screen
                out bad-fit applications — so you can focus on quality
                candidates.
              </p>
              <a href="#">Learn More →</a>
            </div>

            <div className="info-card">
              <h3>Customize to Fit Your Job</h3>
              <p>
                Create tests that align with your job roles and goals. Mix and
                match questions, upload, or create from scratch.
              </p>
              <a href="#">Learn More →</a>
            </div>

            <div className="info-card">
              <h3>See Impactful Results</h3>
              <p>
                Assess skills to stop wasting time, avoid bad hires, and reduce
                costly turnover.
              </p>
              <a href="#">Learn More →</a>
            </div>
          </div>
        </div>
      </div>



      <section className="stats-section">
      <div className="stats-container">
        <h1 
          className={`stats-heading ${isVisible ? 'fade-in-up' : ''}`}
        >
          Talent Access Customers have Experienced...
        </h1>

        <div className="row stats-row">
          {statsData.map((item, index) => (
            <div 
              key={item.id} 
              className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4"
            >
              <div 
                className={`stat-card ${isVisible ? 'slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h2 className="stat-value">
                  {animatedValues[index]}{item.suffix}
                </h2>
                <p className="stat-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="demo-button">
          Get a Demo
        </button>
      </div>
    </section>



      <div className="container-2">
        <div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Pre-Hire Assessment Platform
        </h1>
        </div>  
        {/* Tabs Navigation */}
        <div className="tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="row tab-content m-4">
          <div className="col-md-6 col-12 cardss">
            <h2>{active.title}</h2>
            <p>{active.content}</p>
            <button>{active.button}</button>
          </div>
          <div className="col-md-6 col-12 text-center">
            <img src={active.image} alt={active.title} className="tab-image" />
          </div>
        </div>
      </div>

      
      <div className="explore-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side (text content) */}
            <div className="col-md-6 col-12 explore-content">
              <h2>Explore Our Platform</h2>
              <p>See how Talent Access can improve your hiring operations.</p>
            </div>

            {/* Right side (buttons) */}
            <div className="col-md-6 col-12 text-md-end text-center">
              <div className="button-container">
                <button
                  className="explore-button"
                  onClick={() => console.log("Tour Our Platform clicked")}
                >
                  Tour Our Platform
                </button>
                <button
                  className="explore-button-outline"
                  onClick={() => console.log("Platform Overview clicked")}
                >
                  Platform Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="industries-section">
        <div className="industries-header">
          <div>
            <h2 className="industries-title">Industries</h2>
            <p className="industries-subtitle">
              Pre-hire assessments built for virtually any industry.
            </p>
          </div>
          <button className="view-btn">View all</button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 }, // Mobile
            640: { slidesPerView: 2 }, // Small tablets
            1024: { slidesPerView: 3 }, // Desktop
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="industries-carousel"
        >
          {industries.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="industry-card">
                <img src={item.img} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <button>Read More →</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="testimonial-section">
        <Testimonial />
      </div>
      <div className="subscription-footer-wrapper">
        <div>
          <Getdemo />
        </div>

        <div className="subscription-section">
      <div className="subscription-container">
        <div className="subscription-content">
          {/* Left Side - Newsletter Signup */}
          <div className="subscription-left">
            <div className="subscription-header">
              <div className="icon-wrapper">📧</div>
              <h2>Subscribe for updates</h2>
            </div>
            <p>
              Sign up for our newsletter to get industry-best practices,
              platform updates, upcoming events, and more delivered straight
              to your inbox.
            </p>

            <div className="subscription-form">
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Work Email</label>
                <input
                  type="email"
                  name="workEmail"
                  className="form-control"
                  placeholder="Enter your work email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="subscription-right">
            <div className="contact-info">
              <div className="contact-header">
                <div className="icon-wrapper">🎧</div>
                <h3>Contact us</h3>
              </div>
              <p>
                Interested in learning more? Contact our team to learn how
                pre-employment assessments can improve your hiring.
              </p>
              <button
                className="contact-btn"
                onClick={() => alert("Contact form opened!")}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Footer Section */}
      </div>
    </>
  );
};

export default Home;
