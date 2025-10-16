import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, Clock, FileText, BarChart, Globe, Menu, X } from 'lucide-react';

const AssessmentLibrary = () => {
  const [expandedCategories, setExpandedCategories] = useState(['legal']);
  const [selectedCategory, setSelectedCategory] = useState('legal');
  const [expandedCards, setExpandedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = {
    legal: {
  title: "Legal, Safety & Administration",
  description:
    "Comprehensive assessments covering workplace compliance, safety protocols, and administrative procedures.",
  subjects: [
    {
      id: "Workplace-Safety(ES)",
      title: "Workplace Safety (ES)",
      subtitle: "Spanish version covering warehouse safety and operations",
      topics: [],
      duration: "40 Minutes",
      questions: 50,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Workplace-Safety",
      title: "Workplace Safety",
      subtitle: "Safety standards and best practices in workplaces",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Property-Management",
      title: "Property Management",
      subtitle: "Maintenance, leasing, and legal aspects of property management",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Property-Management(ES)",
      title: "Property Management (ES)",
      subtitle: "Versión en español de gestión y mantenimiento de propiedades",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Paralegal-Skills(US)",
      title: "Paralegal Skills (US)",
      subtitle: "Core paralegal knowledge and U.S. legal procedures",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Paralegal-Skills(Canada)",
      title: "Paralegal Skills (Canada)",
      subtitle: "Canadian paralegal practices and legal documentation",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Legal-Terminology(US)",
      title: "Legal Terminology (US)",
      subtitle: "Key legal vocabulary and terminology used in U.S. law",
      topics: [
        "Administrative",
        "Bankruptcy, Civil",
        "Commercial",
        "Contract",
        "Corporate",
        "Criminal",
        "Employment",
        "Ethics",
        "Finance",
        "Insurance",
        "Intellectual Property",
        "Intellectual Law",
        "Office",
        "Real Estate",
        "Regulatory",
        "Securities",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Administrative",
        "Bankruptcy, Civil",
        "Commercial",
        "Contract",
        "Corporate",
        "Criminal",
        "Employment",
        "Ethics",
        "Finance",
        "Insurance",
        "Intellectual Property",
        "Intellectual Law",
        "Office",
        "Real Estate",
        "Regulatory",
        "Securities",
      ],
    },
    {
      id: "Legal-Terminology(Canada)",
      title: "Legal Terminology (Canada)",
      subtitle: "Canadian legal terms and documentation language",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Labor-and-Employment-Law-General(US)",
      title: "Labor and Employment Law - General (US)",
      subtitle: "U.S. workplace rights, labor laws, and employment regulations",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Labor-and-Employment-Law-California",
      title: "Labor and Employment Law - California",
      subtitle: "California-specific labor codes and employee protection laws",
      topics: [],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [],
    },
    {
      id: "Environmental-Health-and-Safety",
      title: "Environmental, Health and Safety",
      subtitle: "Principles of workplace health, safety, and environmental care",
      topics: [
        "Air Quality",
        "Community Health and Safety",
        "Occupational Health and Safety",
        "Waste and Materials Management",
        "Water Quality",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Air Quality",
        "Community Health and Safety",
        "Occupational Health and Safety",
        "Waste and Materials Management",
        "Water Quality",
      ],
    },
    {
      id: "Environmental-Health-and-Safety-(ES)",
      title: "Environmental, Health and Safety (ES)",
      subtitle: "Versión en español de salud, seguridad y medio ambiente",
      topics: [
        "Calidad del Agua",
        "Calidad del Aire",
        "Gestión de residuos y materiales",
        "Salud y Seguridad en el Trabajo",
        "Salud y Seguridad en la Comunidad",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Calidad del Agua",
        "Calidad del Aire",
        "Gestión de residuos y materiales",
        "Salud y Seguridad en el Trabajo",
        "Salud y Seguridad en la Comunidad",
      ],
    },
    {
      id: "Emergency-Medical-Treatment-and-Labor-Act-(EMTALA)",
      title: "Emergency Medical Treatment and Labor Act (EMTALA)",
      subtitle: "U.S. law ensuring emergency medical care and patient rights",
      topics: [
        "Emergency Medical Treatment Requirements",
        "Examinations and Screening Requirements",
        "Laws, Regulations, and Guidance",
        "Penalties and Review",
        "Transfers for Emergency Medical Treatments",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Emergency Medical Treatment Requirements",
        "Examinations and Screening Requirements",
        "Laws, Regulations, and Guidance",
        "Penalties and Review",
        "Transfers for Emergency Medical Treatments",
      ],
    },
    {
      id: "Custodial-Skills(ES)",
      title: "Custodial Skills (ES)",
      subtitle: "Versión en español de habilidades básicas de limpieza",
      topics: [
        "Atuendo de Limpieza",
        "Habilidades Básicas de Limpieza",
        "Herramientas y Equipo de Limpieza",
        "Soluciones de Limpieza, Productos Químicos y Disolventes",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Atuendo de Limpieza",
        "Habilidades Básicas de Limpieza",
        "Herramientas y Equipo de Limpieza",
        "Soluciones de Limpieza, Productos Químicos y Disolventes",
      ],
    },
    {
      id: "911-Emergency-Dispatcher",
      title: "911 Emergency Dispatcher",
      subtitle: "Emergency call handling, crisis management, and communication skills",
      topics: [
        "Asking the Right Questions",
        "Clerical Work",
        "Crisis Management",
        "Law Enforcement Information",
        "Non-Emergency Calls",
        "Prioritizing",
        "Telecommunications and Teamwork",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Asking the Right Questions",
        "Clerical Work",
        "Crisis Management",
        "Law Enforcement Information",
        "Non-Emergency Calls",
        "Prioritizing",
        "Telecommunications and Teamwork",
      ],
    },
    {
      id: "Discrimination-in-the-Workplace-(US)",
      title: "Discrimination in the Workplace (US)",
      subtitle: "Understanding workplace discrimination, harassment, and remedies",
      topics: [
        "Discrimination Issues",
        "Effects of Discrimination",
        "Harassment",
        "Rights and Remedies",
        "Types of Discrimination",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Discrimination Issues",
        "Effects of Discrimination",
        "Harassment",
        "Rights and Remedies",
        "Types of Discrimination",
      ],
    },
    {
      id: "Custodial-Skills",
      title: "Custodial Skills",
      subtitle: "Essential cleaning practices and custodial maintenance techniques",
      topics: [
        "Basic Custodial Skills",
        "Cleaning Solutions, Chemicals and Solvents",
        "Custodial Attire",
        "Custodial Tools and Equipment",
      ],
      duration: "45 Minutes",
      questions: 55,
      difficulty: "Intermediate",
      language: "English",
      allTopics: [
        "Basic Custodial Skills",
        "Cleaning Solutions, Chemicals and Solvents",
        "Custodial Attire",
        "Custodial Tools and Equipment",
      ],
    },
  ],
},

    retail: {
      title: "Retail",
      description: "Comprehensive retail operations assessments covering warehousing and inventory management.",
      subjects: [
        {
          id: 'warehousing',
          title: 'Warehousing Skills',
          subtitle: 'Warehouse operations',
          topics: ['Auxiliary Issues', 'Forms', 'Material Distribution', 'Warehouse Elements'],
          duration: '45 Minutes',
          questions: 60,
          difficulty: 'Intermediate',
          language: 'English',
          allTopics: ['Auxiliary Issues', 'Forms', 'Material Distribution', 'Warehouse Elements', 'Warehouse Management', 'Work Safety']
        },
        {
          id: 'web-merchant',
          title: 'Web Merchant Skills',
          subtitle: 'E-commerce expertise',
          topics: ['E-commerce Platforms', 'Digital Marketing', 'Online Payment', 'Analytics'],
          duration: '50 Minutes',
          questions: 55,
          difficulty: 'Advanced',
          language: 'English',
          allTopics: ['E-commerce Platforms', 'Digital Marketing', 'Online Payment Systems', 'Customer Analytics', 'SEO & SEM', 'Product Management']
        }
      ]
    }
  };

  const styles = `
    .assessment-library {
      min-height: 100vh;
      background-color: #f5f7fa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .al-header {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
      padding: 1.5rem;
    }
    .al-header-content {
      max-width: 1400px;
      margin: 0 auto;
    }
    .al-header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .al-title {
      font-size: 2rem;
      font-weight: bold;
      color: #1e3a8a;
      margin: 0;
    }
    .al-menu-btn {
      display: none;
      padding: 0.75rem;
      background-color: #1e3a8a;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    .al-search-wrapper {
      position: relative;
      max-width: 600px;
    }
    .al-search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ca3af;
    }
    .al-search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 0.875rem;
    }
    .al-search-input:focus {
      outline: none;
      border-color: #1e3a8a;
    }
    .al-main-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .al-content-wrapper {
      display: flex;
      gap: 2rem;
    }
    .al-sidebar {
      width: 320px;
      flex-shrink: 0;
    }
    .al-sidebar-sticky {
      position: sticky;
      top: 1.5rem;
    }
    .al-sidebar-section {
      background: white;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    .al-sidebar-header {
      width: 100%;
      padding: 1rem 1.25rem;
      background-color: #1e3a8a;
      color: white;
      font-weight: 600;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .al-sidebar-header:hover {
      background-color: #1e40af;
    }
    .al-sidebar-items {
      padding: 0.5rem;
    }
    .al-sidebar-item {
      width: 100%;
      text-align: left;
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      border: none;
      border-left: 4px solid transparent;
      background: transparent;
      cursor: pointer;
      font-size: 0.875rem;
    }
    .al-sidebar-item:hover {
      background-color: #f3f4f6;
    }
    .al-sidebar-item-active {
      background-color: #dbeafe;
      border-left-color: #1e3a8a;
      color: #1e3a8a;
      font-weight: 600;
    }
    .al-main-area {
      flex: 1;
      min-width: 0;
    }
    .al-category-banner {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border-radius: 0.5rem;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .al-category-title {
      font-size: 1.75rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
    }
    .al-category-desc {
      font-size: 1rem;
      line-height: 1.6;
      color: #dbeafe;
      margin: 0;
    }
    .al-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .al-card {
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      overflow: hidden;
      transition: all 0.3s;
    }
    .al-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transform: translateY(-2px);
    }
    .al-card-header {
      padding: 1.5rem;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
    }
    .al-card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .al-card-subtitle {
      font-size: 0.8125rem;
      opacity: 0.9;
      margin: 0;
    }
    .al-card-body {
      padding: 1.5rem;
    }
    .al-topics-label {
      font-size: 0.8125rem;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }
    .al-topics-list {
      list-style: none;
      padding: 0;
      margin: 0 0 1.25rem 0;
    }
    .al-topic-item {
      display: flex;
      padding: 0.375rem 0;
      font-size: 0.875rem;
      color: #4b5563;
    }
    .al-topic-bullet {
      color: #1e3a8a;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .al-details-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: #1e3a8a;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .al-details-btn:hover {
      background-color: #1e40af;
    }
    .al-details-section {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid #e5e7eb;
    }
    .al-stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .al-stat-item {
      background-color: #f9fafb;
      padding: 1rem;
      border-radius: 0.375rem;
      border-left: 4px solid #1e3a8a;
    }
    .al-stat-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.6875rem;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 0.25rem;
    }
    .al-stat-value {
      font-size: 1.125rem;
      font-weight: bold;
      color: #1e3a8a;
    }
    .al-all-topics {
      background-color: #f9fafb;
      padding: 1.25rem;
      border-radius: 0.375rem;
      margin-bottom: 1.25rem;
    }
    .al-all-topics-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.75rem;
    }
    .al-all-topics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    .al-topic-badge {
      background: white;
      padding: 0.625rem 0.75rem;
      border-radius: 0.25rem;
      font-size: 0.8125rem;
      color: #6b7280;
      border: 1px solid #e5e7eb;
    }
    .al-action-btns {
      display: flex;
      gap: 0.75rem;
    }
    .al-btn-add {
      flex: 1;
      padding: 0.75rem;
      background-color: #16a34a;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
    }
    .al-btn-add:hover {
      background-color: #15803d;
    }
    .al-btn-preview {
      flex: 1;
      padding: 0.75rem;
      background-color: #6b7280;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
    }
    .al-btn-preview:hover {
      background-color: #4b5563;
    }
    .al-overlay {
      display: none;
    }

    @media (max-width: 991px) {
      .al-menu-btn {
        display: block;
      }
      .al-content-wrapper {
        display: block;
      }
      .al-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 320px;
        background: white;
        z-index: 1050;
        overflow-y: auto;
        padding: 1rem;
        transform: translateX(-100%);
        transition: transform 0.3s;
      }
      .al-sidebar.open {
        transform: translateX(0);
      }
      .al-overlay {
        display: block;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 1040;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s;
      }
      .al-overlay.show {
        opacity: 1;
        visibility: visible;
      }
      .al-sidebar-sticky {
        position: static;
      }
    }

    @media (max-width: 767px) {
      .al-header {
        padding: 1rem;
      }
      .al-title {
        font-size: 1.5rem;
      }
      .al-main-content {
        padding: 0 1rem;
      }
      .al-category-banner {
        padding: 1.5rem;
      }
      .al-category-title {
        font-size: 1.5rem;
      }
      .al-category-desc {
        font-size: 0.875rem;
      }
      .al-cards-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .al-stats-grid {
        grid-template-columns: 1fr;
      }
      .al-all-topics-grid {
        grid-template-columns: 1fr;
      }
      .al-action-btns {
        flex-direction: column;
      }
    }

    @media (max-width: 575px) {
      .al-title {
        font-size: 1.25rem;
      }
      .al-search-wrapper {
        max-width: 100%;
      }
      .al-sidebar {
        width: 85vw;
        max-width: 300px;
      }
    }
  `;

  const toggleCategory = (key) => {
    setExpandedCategories(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const toggleCard = (id) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectCategory = (key) => {
    setSelectedCategory(key);
    setSidebarOpen(false);
  };

  const currentCategory = categories[selectedCategory];

  return (
    <>
      <style>{styles}</style>
      <div className="assessment-library">
        <div className={`al-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)} />
        
        <header className="al-header">
          <div className="al-header-content">
            <div className="al-header-top">
              <h1 className="al-title">Assessment Library</h1>
              <button className="al-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="al-search-wrapper">
              <Search className="al-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search assessments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="al-search-input"
              />
            </div>
          </div>
        </header>

        <div className="al-main-content">
          <div className="al-content-wrapper">
            <aside className={`al-sidebar ${sidebarOpen ? 'open' : ''}`}>
              <div className="al-sidebar-sticky">
                {Object.entries(categories).map(([key, category]) => (
                  <div key={key} className="al-sidebar-section">
                    <button className="al-sidebar-header" onClick={() => toggleCategory(key)}>
                      <span>{category.title}</span>
                      {expandedCategories.includes(key) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    {expandedCategories.includes(key) && (
                      <div className="al-sidebar-items">
                        {category.subjects.map((subject) => (
                          <button
                            key={subject.id}
                            onClick={() => selectCategory(key)}
                            className={`al-sidebar-item ${selectedCategory === key ? 'al-sidebar-item-active' : ''}`}
                          >
                            {subject.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            <main className="al-main-area">
              <div className="al-category-banner">
                <h2 className="al-category-title">{currentCategory.title}</h2>
                <p className="al-category-desc">{currentCategory.description}</p>
              </div>

              <div className="al-cards-grid">
                {currentCategory.subjects.map((subject) => (
                  <div key={subject.id} className="al-card">
                    <div className="al-card-header">
                      <h3 className="al-card-title">{subject.title}</h3>
                      <p className="al-card-subtitle">{subject.subtitle}</p>
                    </div>

                    <div className="al-card-body">
                      <h4 className="al-topics-label">Topics Covered:</h4>
                      <ul className="al-topics-list">
                        {subject.topics.map((topic, idx) => (
                          <li key={idx} className="al-topic-item">
                            <span className="al-topic-bullet">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="al-details-btn" onClick={() => toggleCard(subject.id)}>
                        {expandedCards.includes(subject.id) ? 'Hide Details' : 'Show Details'}
                        <ChevronDown size={16} style={{
                          transform: expandedCards.includes(subject.id) ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s'
                        }} />
                      </button>

                      {expandedCards.includes(subject.id) && (
                        <div className="al-details-section">
                          <div className="al-stats-grid">
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <Clock size={14} />
                                DURATION
                              </div>
                              <div className="al-stat-value">{subject.duration}</div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <FileText size={14} />
                                QUESTIONS
                              </div>
                              <div className="al-stat-value">{subject.questions}</div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <BarChart size={14} />
                                DIFFICULTY
                              </div>
                              <div className="al-stat-value">{subject.difficulty}</div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <Globe size={14} />
                                LANGUAGE
                              </div>
                              <div className="al-stat-value">{subject.language}</div>
                            </div>
                          </div>

                          <div className="al-all-topics">
                            <h4 className="al-all-topics-title">All Topics Covered:</h4>
                            <div className="al-all-topics-grid">
                              {subject.allTopics.map((topic, idx) => (
                                <div key={idx} className="al-topic-badge">{topic}</div>
                              ))}
                            </div>
                          </div>

                          <div className="al-action-btns">
                            <button className="al-btn-add">Add to Test</button>
                            <button className="al-btn-preview">Preview</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentLibrary;