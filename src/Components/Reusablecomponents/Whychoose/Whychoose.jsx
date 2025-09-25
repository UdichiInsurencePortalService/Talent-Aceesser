const Whychoose = () => {
  const features = [
    {
      icon: "⚙️",
      title: "Customizable Tests",
      description:
        "Select from over 800 job and subject-based pre-employment tests or build customized talent assessments for virtually any role in any industry.",
    },
    {
      icon: "👥",
      title: "Expert Guidance",
      description:
        "Get help from your Dedicated Assessments Specialist to create talent assessments, analyze results, and constantly refine processes to improve your hiring process.",
    },
    {
      icon: "💬",
      title: "Industry-Best Support",
      description:
        "Contact us via chat, email, or phone to get the help you need, when you need it.",
    },
    {
      icon: "🔗",
      title: "Integration Options",
      description:
        "Use Talent Assess hiring assessments inside your existing ATS, LMS and HR systems to simplify your workflow.",
    },
  ];

  const handleDemoClick = () => {
    console.log("Demo requested");
    // Add your demo logic here
  };

  const customStyles = `
    .gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 3rem 1rem; /* add spacing from top/bottom */
}

.hero-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  animation: fadeInUp 0.8s ease-out;
  max-width: 900px;
}

.brand-text {
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
}

.cta-button {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
  border: none;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(239, 68, 68, 0.4);
  color: white;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;
  margin: 1rem auto;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out both;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  margin: 0 auto 1rem auto;
  transition: box-shadow 0.3s ease;
}

.feature-card:hover .feature-icon {
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.5);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
}

.integration-card {
  max-width: 500px;
  margin: 2rem auto; /* center last card */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Medium devices and below (tablet) */
@media (max-width: 768px) {
  .hero-card {
    margin: 1.5rem 1rem;
    padding: 1.5rem 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}

/* Small devices (mobile) */
@media (max-width: 576px) {
  .hero-card {
    margin: 1rem 0.5rem;
    padding: 1rem 1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .cta-button {
    width: 100%;
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }

  .feature-card {
    padding: 1rem;
    margin: 0.75rem 0.5rem;
  }

  .feature-icon {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}

  `;

  return (
    <>
      {/* Bootstrap CSS CDN */}

      <style>{customStyles}</style>

      <div className="gradient-bg py-5">
        <div className="container-fluid px-4">
          {/* Hero Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="hero-card card border-0 rounded-4 p-4 p-md-5">
                <div className="card-body text-center">
                  <div className="brand-text mb-3">Why Talent Assessment</div>
                  <h1 className="hero-title mb-4">
                    Level Up Your Hiring Process With TSA Skills Tests
                  </h1>
                  <p className="hero-description mb-4">
                    TSA assessments are designed to strengthen your hiring
                    process while ensuring you find the best candidates for
                    every role. No matter what job role you're hiring for, our
                    platform offers unmatched customization, accuracy, and
                    support.
                  </p>
                  <button
                    className="btn cta-button btn-lg"
                    onClick={handleDemoClick}
                  >
                    Get a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="container-fluid px-4">
            <div className="row g-4 justify-content-center">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-3">
                  <div className="feature-card card border-0 rounded-4 h-100">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="feature-title mb-3">{feature.title}</h3>
                      <p className="feature-description mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const FeatureCard = ({ feature, index, className = "" }) => {
//   return (
//     <div className={`${className}`}>

//     </div>
//   );
// };

export default Whychoose;
