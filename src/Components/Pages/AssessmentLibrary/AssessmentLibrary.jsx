import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Search,
  Clock,
  FileText,
  BarChart,
  Globe,
  Menu,
  X,
} from "lucide-react";

const AssessmentLibrary = () => {
  const [expandedCategories, setExpandedCategories] = useState(["legal"]);
  const [selectedCategory, setSelectedCategory] = useState("legal");
  const [expandedCards, setExpandedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
          subtitle:
            "Maintenance, leasing, and legal aspects of property management",
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
          subtitle:
            "Versión en español de gestión y mantenimiento de propiedades",
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
          subtitle:
            "U.S. workplace rights, labor laws, and employment regulations",
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
          subtitle:
            "California-specific labor codes and employee protection laws",
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
          subtitle:
            "Principles of workplace health, safety, and environmental care",
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
          subtitle:
            "U.S. law ensuring emergency medical care and patient rights",
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
          subtitle:
            "Emergency call handling, crisis management, and communication skills",
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
          subtitle:
            "Understanding workplace discrimination, harassment, and remedies",
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
          subtitle:
            "Essential cleaning practices and custodial maintenance techniques",
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
    Abilities: {
      title: "Abilities & Aptitudes",
      description:
        "Test general skills to understand a candidate's overall competencies. Utilize tests like Attention to Detail, Logical Thinking, and more to understand basic aptitudes.",
      subjects: [
        {
          id: "presenterSkills",
          title: "Presenter Skills",
          subtitle: "Public speaking and presentation effectiveness",
          topics: [
            "Body Language",
            "Voice Modulation",
            "Audience Engagement",
            "Visual Aids Usage",
          ],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Public Speaking Techniques",
            "Confidence Building",
            "Speech Structure",
            "Presentation Design",
            "Handling Questions",
            "Non-verbal Communication",
          ],
        },
        {
          id: "Videoconference-Communication-and-Etiquette",
          title: "Videoconference Communication and Etiquette",
          subtitle: "Professional online meeting skills",
          topics: [
            "Virtual Meetings",
            "Body Language",
            "Communication Tone",
            "Technical Preparedness",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Virtual Meetings",
            "Online Presentation",
            "Professional Etiquette",
            "Digital Collaboration",
            "Audio-Visual Management",
          ],
        },
        {
          id: "Verbal-Reasoning",
          title: "Verbal Reasoning",
          subtitle: "Understanding and interpreting written information",
          topics: [
            "Word Analogies",
            "Critical Reading",
            "Sentence Completion",
            "Grammar",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Word Relationships",
            "Inference Skills",
            "Reading Logic",
            "Synonyms & Antonyms",
            "Sentence Structure",
          ],
        },
        {
          id: "Unconscious-Bias",
          title: "Unconscious Bias",
          subtitle: "Recognizing and reducing workplace bias",
          topics: [
            "Implicit Bias",
            "Workplace Behavior",
            "Inclusive Decision-Making",
          ],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Bias Awareness",
            "Stereotypes",
            "Cultural Sensitivity",
            "Equity in Hiring",
          ],
        },
        {
          id: "Spatial-Reasoning",
          title: "Spatial Reasoning",
          subtitle: "Visual thinking and pattern recognition",
          topics: ["2D Shapes", "3D Visualization", "Pattern Completion"],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Mental Rotation",
            "Spatial Visualization",
            "Diagrammatic Reasoning",
            "Pattern Analysis",
          ],
        },
        {
          id: "Technical-Writing-Skills",
          title: "Technical Writing Skills",
          subtitle: "Creating structured and clear technical content",
          topics: ["Document Design", "Clarity in Writing", "Formatting"],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "User Manuals",
            "Reports",
            "Proposal Writing",
            "Editing",
            "Documentation Standards",
          ],
        },
        {
          id: "Reading-Comprehension",
          title: "Reading Comprehension",
          subtitle: "Analyzing and interpreting written texts",
          topics: ["Passage Interpretation", "Inference", "Vocabulary Usage"],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Critical Reading",
            "Main Idea Recognition",
            "Context Clues",
            "Author’s Tone",
          ],
        },
        {
          id: "Research-Skills",
          title: "Research Skills",
          subtitle: "Collecting and analyzing information effectively",
          topics: ["Data Gathering", "Source Evaluation", "Report Writing"],
          duration: "45 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Data Analysis",
            "Reference Management",
            "Information Literacy",
            "Survey Design",
          ],
        },
        {
          id: "Office-Filing",
          title: "Office Filing",
          subtitle: "Organizing and managing records efficiently",
          topics: ["Filing Systems", "Record Keeping", "Data Management"],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Indexing",
            "Document Classification",
            "Archiving",
            "File Security",
          ],
        },
        {
          id: "Numerical-Reasoning",
          title: "Numerical Reasoning",
          subtitle: "Solving numerical and quantitative problems",
          topics: ["Arithmetic", "Data Interpretation", "Percentages"],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Ratios",
            "Graphs",
            "Word Problems",
            "Estimation",
            "Data Sets",
          ],
        },
        {
          id: "Numerical-Proofreading",
          title: "Numerical Proofreading",
          subtitle: "Checking accuracy of numerical data",
          topics: ["Error Detection", "Data Validation"],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Accuracy Checks",
            "Formatting Errors",
            "Data Correction",
          ],
        },
        {
          id: "Matching-Skills",
          title: "Matching Skills",
          subtitle: "Comparing and aligning data accurately",
          topics: ["Pattern Recognition", "Logical Association"],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: ["Data Pairing", "Visual Matching", "Form Comparisons"],
        },
        {
          id: "Negotiation-Skills",
          title: "Negotiation Skills",
          subtitle: "Building win-win communication strategies",
          topics: ["Communication Styles", "Conflict Resolution", "Persuasion"],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Collaborative Negotiation",
            "Emotional Control",
            "Deal Structuring",
          ],
        },
        {
          id: "Multitasking-Simulation",
          title: "Multitasking Simulation",
          subtitle: "Handling multiple tasks under pressure",
          topics: ["Task Prioritization", "Time Management"],
          duration: "40 Minutes",
          questions: 45,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Focus Management",
            "Stress Handling",
            "Parallel Tasking",
          ],
        },
        {
          id: "Logical-Thinking",
          title: "Logical Thinking",
          subtitle: "Reasoning and problem-solving using logic",
          topics: ["Deductive Reasoning", "Syllogisms", "Patterns"],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Problem Solving",
            "Critical Logic",
            "Analytical Scenarios",
          ],
        },
        {
          id: "Following-Directions",
          title: "Following Directions",
          subtitle: "Understanding and executing instructions correctly",
          topics: ["Instruction Comprehension", "Attention to Detail"],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Listening Skills",
            "Task Accuracy",
            "Procedure Adherence",
          ],
        },
        {
          id: "JAWS-Compliant-Assessment",
          title: "JAWS Compliant Assessment",
          subtitle: "Accessibility testing and screen reader compatibility",
          topics: ["Accessibility Features", "Assistive Technology"],
          duration: "30 Minutes",
          questions: 35,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "WCAG Compliance",
            "Screen Reader Testing",
            "Inclusive Design",
          ],
        },
        {
          id: "Emotional-Intelligence",
          title: "Emotional Intelligence",
          subtitle: "Recognizing and managing emotions effectively",
          topics: ["Self-Awareness", "Empathy", "Motivation"],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Relationship Management",
            "Emotional Regulation",
            "Interpersonal Skills",
          ],
        },
        {
          id: "Cybersecurity-Awareness",
          title: "Cybersecurity Awareness",
          subtitle: "Protecting data and systems from digital threats",
          topics: ["Phishing", "Password Management", "Data Security"],
          duration: "45 Minutes",
          questions: 55,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Network Safety",
            "Cyber Hygiene",
            "Social Engineering",
            "Incident Reporting",
          ],
        },
        {
          id: "Data-Checking",
          title: "Data Checking",
          subtitle: "Ensuring data accuracy and consistency",
          topics: ["Data Validation", "Error Identification"],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Intermediate",
          language: "English",
          allTopics: ["Quality Control", "Data Review", "Data Cleaning"],
        },
        {
          id: "Email-Etiquette",
          title: "Email Etiquette",
          subtitle: "Professional communication through email",
          topics: ["Tone of Voice", "Formatting", "Response Management"],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Professional Writing",
            "Signature Use",
            "Email Structure",
            "Reply Management",
          ],
        },
        {
          id: "Chat-Simulation-Partial-Scoring",
          title: "Chat Simulation (Partial Scoring)",
          subtitle: "Customer service chat-based assessment",
          topics: ["Response Accuracy", "Tone Control", "Customer Handling"],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Chat Response Quality",
            "Empathy in Support",
            "Conversation Management",
          ],
        },
        {
          id: "Attention-to-Detail",
          title: "Attention to Detail",
          subtitle: "Detecting inconsistencies and improving accuracy",
          topics: ["Visual Accuracy", "Data Comparison"],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Proofreading",
            "Error Detection",
            "Concentration Skills",
          ],
        },
        {
          id: "Chat-Simulation",
          title: "Chat Simulation",
          subtitle: "Evaluating real-time chat response skills",
          topics: [
            "Customer Engagement",
            "Problem Solving",
            "Response Quality",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Empathy",
            "Resolution Skills",
            "Tone Management",
            "Typing Accuracy",
          ],
        },
      ],
    },

    salse: {
      title: "Sales & Marketing",
      description:
        "Test sales & marketing skills, theory, and program knowledge. Confirm Salesforce ability, Graphic Design Skills, Concepts, and more.",

      subjects: [
        {
          id: "Salesforce-Administration",
          title: "Salesforce - Administration",
          subtitle: "Managing Salesforce CRM and Administration Tasks",
          topics: [
            "Salesforce CRM for General Use",
            "Sales Concepts",
            "Auxiliary Issues",
            "Forms",
            "Material Distribution",
            "Warehouse Elements",
          ],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Salesforce CRM for General Use",
            "Sales Concepts",
            "Auxiliary Issues",
            "Forms",
            "Material Distribution",
            "Warehouse Elements",
            "Warehouse Management",
            "Work Safety",
          ],
        },
        {
          id: "Web-Search-Skills",
          title: "Web Search Skills",
          subtitle: "Effective Techniques for Online Research",
          topics: [
            "Advanced Search Operators",
            "Evaluating Sources",
            "Search Engine Techniques",
            "Information Verification",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Advanced Search Operators",
            "Evaluating Sources",
            "Search Engine Techniques",
            "Information Verification",
            "Research Strategies",
            "Data Validation",
          ],
        },
        {
          id: "Video-Production-Skills",
          title: "Video Production Skills",
          subtitle: "Creating and Editing Professional Videos",
          topics: [
            "Video Editing Tools",
            "Storyboarding",
            "Shooting Techniques",
            "Post-Production",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Video Editing Tools",
            "Storyboarding",
            "Shooting Techniques",
            "Post-Production",
            "Camera Equipment",
            "Lighting Techniques",
          ],
        },
        {
          id: "Social-Media-Marketing",
          title: "Social Media Marketing",
          subtitle: "Strategies for Promoting Brands on Social Media",
          topics: [
            "Content Strategy",
            "Audience Engagement",
            "Platform Analytics",
            "Paid Advertising",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Content Strategy",
            "Audience Engagement",
            "Platform Analytics",
            "Paid Advertising",
            "Community Building",
            "Social Media Tools",
          ],
        },
        {
          id: "Search-Marketing-Strategies",
          title: "Search Marketing Strategies",
          subtitle: "Optimizing Visibility through Search Marketing",
          topics: [
            "SEO Techniques",
            "Keyword Research",
            "Search Engine Algorithms",
            "Campaign Optimization",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "SEO Techniques",
            "Keyword Research",
            "Search Engine Algorithms",
            "Campaign Optimization",
            "Content Strategy",
          ],
        },
        {
          id: "Search-Engine-Marketing",
          title: "Search Engine Marketing",
          subtitle: "Paid and Organic Search Marketing Techniques",
          topics: [
            "Google Ads",
            "Bing Ads",
            "PPC Campaigns",
            "Conversion Tracking",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Google Ads",
            "Bing Ads",
            "PPC Campaigns",
            "Conversion Tracking",
            "Keyword Research",
            "Campaign Optimization",
          ],
        },
        {
          id: "MS-Dynamics-CRM",
          title: "MS Dynamics CRM for General Use",
          subtitle: "Managing Customer Relationships with MS Dynamics",
          topics: [
            "CRM Basics",
            "Contact Management",
            "Sales Pipelines",
            "Reporting and Analytics",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "CRM Basics",
            "Contact Management",
            "Sales Pipelines",
            "Reporting and Analytics",
            "Customer Support",
            "Workflow Automation",
          ],
        },
        {
          id: "Marketing-Concepts",
          title: "Marketing Concepts",
          subtitle: "Fundamentals of Marketing for Business Growth",
          topics: [
            "Market Research",
            "Marketing Mix",
            "Branding Strategies",
            "Consumer Behavior",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Market Research",
            "Marketing Mix",
            "Branding Strategies",
            "Consumer Behavior",
            "Competitive Analysis",
            "Marketing Planning",
          ],
        },
        {
          id: "Graphic-Design-Skills",
          title: "Graphic Design Skills",
          subtitle: "Designing Visual Content for Digital and Print Media",
          topics: [
            "Typography",
            "Color Theory",
            "Layout Design",
            "Design Software Tools",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Typography",
            "Color Theory",
            "Layout Design",
            "Design Software Tools",
            "Visual Communication",
            "Branding Assets",
          ],
        },
        {
          id: "Email-Marketing",
          title: "Email Marketing",
          subtitle: "Creating Effective Email Campaigns",
          topics: [
            "Email Design",
            "Segmentation",
            "Automation Tools",
            "Analytics and Reporting",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Email Design",
            "Segmentation",
            "Automation Tools",
            "Analytics and Reporting",
            "A/B Testing",
            "Personalization",
          ],
        },
        {
          id: "Community-Operations",
          title: "Community Operations and Content Moderation",
          subtitle: "Managing Online Communities and Moderating Content",
          topics: [
            "Moderation Guidelines",
            "Community Engagement",
            "Reporting Mechanisms",
            "Conflict Resolution",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Moderation Guidelines",
            "Community Engagement",
            "Reporting Mechanisms",
            "Conflict Resolution",
            "Content Policies",
            "User Support",
          ],
        },
        {
          id: "Digital-Marketing",
          title: "Digital Marketing",
          subtitle: "Promoting Products and Services Online",
          topics: [
            "SEO",
            "PPC Advertising",
            "Social Media Marketing",
            "Content Marketing",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "SEO",
            "PPC Advertising",
            "Social Media Marketing",
            "Content Marketing",
            "Email Marketing",
            "Analytics",
          ],
        },
        {
          id: "Copywriting-Skills",
          title: "Copywriting Skills",
          subtitle: "Writing Persuasive Content for Marketing",
          topics: [
            "Ad Copywriting",
            "SEO Writing",
            "Email Campaign Writing",
            "Content Strategy",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Ad Copywriting",
            "SEO Writing",
            "Email Campaign Writing",
            "Content Strategy",
            "Brand Messaging",
            "Persuasive Writing",
          ],
        },
        {
          id: "Canva",
          title: "Canva",
          subtitle: "Designing Graphics with Canva Tool",
          topics: [
            "Creating Templates",
            "Graphic Design Basics",
            "Social Media Designs",
            "Branding Assets",
          ],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Creating Templates",
            "Graphic Design Basics",
            "Social Media Designs",
            "Branding Assets",
            "Layouts",
            "Visual Branding",
          ],
        },
        {
          id: "Salesforce-CRM",
          title: "Salesforce CRM for General Use",
          subtitle:
            "Learn to manage customer relationships with Salesforce CRM",
          topics: [
            "CRM Basics",
            "Contact Management",
            "Sales Pipelines",
            "Reporting and Analytics",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "CRM Basics",
            "Contact Management",
            "Sales Pipelines",
            "Reporting and Analytics",
            "Customer Support",
            "Workflow Automation",
          ],
        },
        {
          id: "Sales-Concepts",
          title: "Sales Concepts",
          subtitle:
            "Understand the fundamentals of sales and business development",
          topics: [
            "Sales Process",
            "Lead Management",
            "Negotiation Techniques",
            "Closing Strategies",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Sales Process",
            "Lead Management",
            "Negotiation Techniques",
            "Closing Strategies",
            "Customer Relationship Management",
            "Revenue Growth Strategies",
          ],
        },
      ],
    },
    Retail: {
      title: "Retail",
      description:
        "Retail workers need customer service, warehouse, and math knowledge. Test candidate ability on these areas and more for better hires.",
      subjects: [
        {
          id: "Warehousing-Skills",
          title: "Warehousing Skills",
          subtitle: "Fundamentals of warehouse operations and management",
          topics: [
            "Auxiliary Issues",
            "Forms",
            "Material Distribution",
            "Warehouse Elements",
          ],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Auxiliary Issues",
            "Forms",
            "Material Distribution",
            "Warehouse Elements",
            "Warehouse Management",
            "Work Safety",
          ],
        },
        {
          id: "Web-Merchant-Skills",
          title: "Web Merchant Skills",
          subtitle: "E-commerce and online retail management skills",
          topics: [
            "Product Listings",
            "Online Orders",
            "Payment Processing",
            "Customer Queries",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Product Listings",
            "Online Orders",
            "Payment Processing",
            "Customer Queries",
            "Web Merchandising",
            "E-commerce Tools",
          ],
        },
        {
          id: "Warehousing-Skills-ES",
          title: "Warehousing Skills (ES)",
          subtitle: "Warehouse skills in Spanish context",
          topics: [
            "Gestión de Almacén",
            "Distribución de Material",
            "Formularios",
            "Elementos del Almacén",
          ],
          duration: "45 Minutes",
          questions: 60,
          difficulty: "Intermediate",
          language: "Spanish",
          allTopics: [
            "Gestión de Almacén",
            "Distribución de Material",
            "Formularios",
            "Elementos del Almacén",
            "Seguridad Laboral",
          ],
        },
        {
          id: "Warehouse-Pick-Pack-Skills-ES",
          title: "Warehouse Pick and Pack Skills (ES)",
          subtitle: "Picking and packing processes in Spanish warehouses",
          topics: [
            "Preparación de Pedidos",
            "Embalaje",
            "Control de Inventario",
            "Seguridad",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "Spanish",
          allTopics: [
            "Preparación de Pedidos",
            "Embalaje",
            "Control de Inventario",
            "Seguridad",
            "Gestión de Almacén",
          ],
        },
        {
          id: "Warehouse-Pick-Pack-Skills",
          title: "Warehouse Pick and Pack Skills",
          subtitle: "Techniques for efficient warehouse order processing",
          topics: [
            "Order Picking",
            "Packing Methods",
            "Inventory Check",
            "Safety Measures",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Order Picking",
            "Packing Methods",
            "Inventory Check",
            "Safety Measures",
            "Warehouse Organization",
          ],
        },
        {
          id: "Sales-Clerk-Skills",
          title: "Sales Clerk Skills",
          subtitle: "Skills required for effective sales and cashier duties",
          topics: [
            "Customer Interaction",
            "Product Knowledge",
            "Cash Handling",
            "Store Operations",
          ],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Customer Interaction",
            "Product Knowledge",
            "Cash Handling",
            "Store Operations",
            "Sales Techniques",
          ],
        },
        {
          id: "Supply-Chain-Management",
          title: "Supply Chain Management",
          subtitle:
            "Managing supply chains efficiently from procurement to delivery",
          topics: [
            "Inventory Management",
            "Logistics",
            "Procurement",
            "Distribution",
          ],
          duration: "50 Minutes",
          questions: 55,
          difficulty: "Advanced",
          language: "English",
          allTopics: [
            "Inventory Management",
            "Logistics",
            "Procurement",
            "Distribution",
            "Supply Planning",
          ],
        },
        {
          id: "Retail-Marketing-Skills",
          title: "Retail Marketing Skills",
          subtitle: "Marketing strategies for retail businesses",
          topics: [
            "Promotions",
            "Advertising",
            "Customer Engagement",
            "Sales Campaigns",
          ],
          duration: "45 Minutes",
          questions: 50,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Promotions",
            "Advertising",
            "Customer Engagement",
            "Sales Campaigns",
            "Brand Awareness",
          ],
        },
        {
          id: "Retail-Math",
          title: "Retail Math",
          subtitle: "Mathematical skills for retail operations",
          topics: [
            "Pricing",
            "Discounts",
            "Profit Margins",
            "Inventory Calculations",
          ],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Pricing",
            "Discounts",
            "Profit Margins",
            "Inventory Calculations",
            "Sales Analysis",
          ],
        },
        {
          id: "Retail-Call-Center",
          title: "Retail Call Center",
          subtitle: "Handling customer queries via phone or chat",
          topics: [
            "Customer Service",
            "Call Handling",
            "Complaint Resolution",
            "Product Information",
          ],
          duration: "40 Minutes",
          questions: 45,
          difficulty: "Intermediate",
          language: "English",
          allTopics: [
            "Customer Service",
            "Call Handling",
            "Complaint Resolution",
            "Product Information",
            "Communication Skills",
          ],
        },
        {
          id: "General-Retail-Knowledge",
          title: "General Retail Knowledge",
          subtitle: "Overview of retail operations and best practices",
          topics: [
            "Store Management",
            "Customer Service",
            "Sales",
            "Product Handling",
          ],
          duration: "40 Minutes",
          questions: 50,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Store Management",
            "Customer Service",
            "Sales",
            "Product Handling",
            "Retail Operations",
          ],
        },
        {
          id: "Customer-Service-Retail",
          title: "Customer Service - Retail",
          subtitle: "Providing excellent service to retail customers",
          topics: [
            "Communication",
            "Problem Solving",
            "Customer Satisfaction",
            "Handling Complaints",
          ],
          duration: "35 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Communication",
            "Problem Solving",
            "Customer Satisfaction",
            "Handling Complaints",
            "Customer Relations",
          ],
        },
      ],
    },
    Hospitalityindustrt: {
      title: "Hospitality Industry",
      description:
        "Provide excellent service to your guests. Ensure new hires have proficiency on Room Service, Front Desk, and Event Planning skills to provide your customers with a first class experience.",
      subjects: [
        {
          id: "Room-Service-Management-Skills",
          title: "Room Service Management Skills",
          subtitle:
            "Efficiently managing in-room dining operations, guest service, and hygiene standards",
          topics: [
            "Order Taking",
            "Food Delivery Protocols",
            "Guest Interaction",
            "Food Safety and Hygiene",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Order Taking",
            "Food Delivery Protocols",
            "Guest Interaction",
            "Food Safety and Hygiene",
            "Table Setup",
            "Complaint Handling",
          ],
        },
        {
          id: "Guide-and-Tour-Operator-Skills",
          title: "Guide and Tour Operator Skills",
          subtitle:
            "Managing tours effectively while providing engaging experiences and excellent customer service",
          topics: [
            "Tour Planning",
            "Customer Interaction",
            "Destination Knowledge",
            "Safety Procedures",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Tour Planning",
            "Customer Interaction",
            "Destination Knowledge",
            "Safety Procedures",
            "Time Management",
            "Cultural Awareness",
          ],
        },
        {
          id: "Front-Desk-Skills",
          title: "Front Desk Skills",
          subtitle:
            "Managing guest check-ins, reservations, and communication for a seamless front office experience",
          topics: [
            "Guest Check-in and Check-out",
            "Reservation Handling",
            "Telephone Etiquette",
            "Customer Service",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Guest Check-in and Check-out",
            "Reservation Handling",
            "Telephone Etiquette",
            "Customer Service",
            "Complaint Resolution",
            "Record Management",
          ],
        },
        {
          id: "Food-and-Beverage-Serving-Skills",
          title: "Food and Beverage Serving Skills",
          subtitle:
            "Delivering professional table service, maintaining hygiene, and ensuring guest satisfaction in food and beverage operations",
          topics: [
            "Table Setting and Service",
            "Order Taking and Delivery",
            "Food Safety and Hygiene",
            "Guest Interaction and Courtesy",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Table Setting and Service",
            "Order Taking and Delivery",
            "Food Safety and Hygiene",
            "Guest Interaction and Courtesy",
            "Serving Etiquette",
            "Handling Guest Complaints",
            "Beverage Knowledge",
          ],
        },
        {
          id: "Flight-Attendant",
          title: "Flight Attendant",
          subtitle:
            "Ensuring passenger safety, comfort, and excellent in-flight service throughout the journey",
          topics: [
            "Passenger Safety Procedures",
            "In-Flight Service",
            "Emergency Protocols",
            "Customer Care and Communication",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Passenger Safety Procedures",
            "In-Flight Service",
            "Emergency Protocols",
            "Customer Care and Communication",
            "Cabin Preparation",
            "Conflict Resolution",
            "Cultural Awareness",
          ],
        },
        {
          id: "Event-Planning-Skills",
          title: "Event Planning Skills",
          subtitle:
            "Organizing, coordinating, and executing events to ensure smooth operations and client satisfaction",
          topics: [
            "Event Coordination",
            "Budget Management",
            "Vendor Communication",
            "Guest Management",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Event Coordination",
            "Budget Management",
            "Vendor Communication",
            "Guest Management",
            "Venue Selection",
            "Time Management",
            "Crisis Handling",
          ],
        },
        {
          id: "Cooking-Skills",
          title: "Cooking Skills",
          subtitle:
            "Understanding basic culinary techniques, kitchen safety, and food preparation methods for quality meal production",
          topics: [
            "Food Preparation",
            "Cooking Techniques",
            "Kitchen Safety",
            "Ingredient Knowledge",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Food Preparation",
            "Cooking Techniques",
            "Kitchen Safety",
            "Ingredient Knowledge",
            "Food Presentation",
            "Time Management",
            "Hygiene and Sanitation",
          ],
        },
      ],
    },
    DatabasesBusinessIntelligence: {
      title: "Databases & Business Intelligence",
      description:
        "Put your data to work. Test competencies on AWS, SQL, Data Science, and more to make sure you're hiring qualified candidates.",
      subjects: [
        {
          id: "Mysql",
          title: "MySQL",
          subtitle:
            "Understanding the fundamentals of databases, SQL queries, and data management using MySQL",
          topics: [
            "Database Basics",
            "SQL Queries",
            "Tables and Relationships",
            "Data Retrieval and Filtering",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Database Basics",
            "SQL Queries",
            "Tables and Relationships",
            "Data Retrieval and Filtering",
            "Data Insertion and Updating",
            "Joins and Constraints",
            "Database Normalization",
          ],
        },
        {
          id: "Python-Data-Visualization-in-Data-Science",
          title: "Python for Data Visualization in Data Science",
          subtitle:
            "Learning how to use Python libraries to visualize, analyze, and interpret data effectively in data science projects",
          topics: [
            "Introduction to Data Visualization",
            "Matplotlib Basics",
            "Seaborn for Statistical Graphics",
            "Plot Customization and Styling",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Visualization",
            "Matplotlib Basics",
            "Seaborn for Statistical Graphics",
            "Plot Customization and Styling",
            "Pandas Visualization",
            "Working with Different Chart Types",
            "Data Insights and Storytelling",
          ],
        },
        {
          id: "TensorFlow",
          title: "TensorFlow",
          subtitle:
            "Understanding the basics of TensorFlow for building, training, and deploying machine learning models",
          topics: [
            "Introduction to TensorFlow",
            "Tensors and Operations",
            "Building Simple Neural Networks",
            "Training and Evaluation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to TensorFlow",
            "Tensors and Operations",
            "Building Simple Neural Networks",
            "Training and Evaluation",
            "TensorFlow Datasets",
            "Model Optimization",
            "Deployment Basics",
          ],
        },
        {
          id: "Tableau",
          title: "Tableau",
          subtitle:
            "Data visualization and business intelligence using Tableau",
          topics: [
            "Data Connections and Preparation",
            "Charts and Visualizations",
            "Calculated Fields",
            "Dashboards and Stories",
            "Filters and Parameters",
            "Publishing and Sharing",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Data Connections and Preparation",
            "Charts and Visualizations",
            "Calculated Fields",
            "Dashboards and Stories",
            "Filters and Parameters",
            "Publishing and Sharing",
          ],
        },
        {
          id: "Seagate-Crystal-Reports",
          title: "Seagate Crystal Reports",
          subtitle:
            "Creating, formatting, and managing business reports using Crystal Reports",
          topics: [
            "Report Design Basics",
            "Data Connections and Fields",
            "Grouping and Sorting Data",
            "Formulas and Expressions",
            "Charts and Summaries",
            "Exporting and Printing Reports",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Report Design Basics",
            "Data Connections and Fields",
            "Grouping and Sorting Data",
            "Formulas and Expressions",
            "Charts and Summaries",
            "Exporting and Printing Reports",
          ],
        },
        {
          id: "SAS",
          title: "SAS",
          subtitle:
            "Statistical analysis and data management using SAS software",
          topics: [
            "SAS Environment and Basics",
            "Data Import and Export",
            "Data Step Programming",
            "Data Cleaning and Manipulation",
            "Descriptive Statistics",
            "PROC Procedures",
            "Data Visualization",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "SAS Environment and Basics",
            "Data Import and Export",
            "Data Step Programming",
            "Data Cleaning and Manipulation",
            "Descriptive Statistics",
            "PROC Procedures",
            "Data Visualization",
          ],
        },
        {
          id: "SQL-Server-Management-Studio",
          title: "SQL Server Management Studio",
          subtitle:
            "Database management, querying, and administration using SSMS",
          topics: [
            "SSMS Interface and Navigation",
            "Creating and Managing Databases",
            "Writing SQL Queries",
            "Tables, Views, and Relationships",
            "Stored Procedures and Functions",
            "Database Backup and Restore",
            "User Management and Security",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "SSMS Interface and Navigation",
            "Creating and Managing Databases",
            "Writing SQL Queries",
            "Tables, Views, and Relationships",
            "Stored Procedures and Functions",
            "Database Backup and Restore",
            "User Management and Security",
          ],
        },
        {
          id: "Relational-Databases",
          title: "Relational Databases",
          subtitle:
            "Fundamentals of relational database design, structure, and management",
          topics: [
            "Database Concepts and Terminology",
            "Tables, Rows, and Columns",
            "Primary and Foreign Keys",
            "Relationships and Normalization",
            "SQL Basics and Queries",
            "Constraints and Indexes",
            "Data Integrity and Referential Integrity",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Database Concepts and Terminology",
            "Tables, Rows, and Columns",
            "Primary and Foreign Keys",
            "Relationships and Normalization",
            "SQL Basics and Queries",
            "Constraints and Indexes",
            "Data Integrity and Referential Integrity",
          ],
        },
        {
          id: "Predictive-Analytics",
          title: "Predictive Analytics",
          subtitle:
            "Using data modeling and statistical techniques to forecast future outcomes",
          topics: [
            "Introduction to Predictive Analytics",
            "Data Preparation and Cleaning",
            "Exploratory Data Analysis",
            "Regression Techniques",
            "Classification Models",
            "Model Evaluation and Validation",
            "Deployment and Monitoring",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Predictive Analytics",
            "Data Preparation and Cleaning",
            "Exploratory Data Analysis",
            "Regression Techniques",
            "Classification Models",
            "Model Evaluation and Validation",
            "Deployment and Monitoring",
          ],
        },
        {
          id: "R-Programming",
          title: "R Programming",
          subtitle: "Statistical computing and data analysis using R language",
          topics: [
            "Introduction to R and RStudio",
            "Data Types and Structures",
            "Data Import and Export",
            "Data Manipulation with dplyr",
            "Data Visualization with ggplot2",
            "Basic Statistics and Functions",
            "Writing and Running R Scripts",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to R and RStudio",
            "Data Types and Structures",
            "Data Import and Export",
            "Data Manipulation with dplyr",
            "Data Visualization with ggplot2",
            "Basic Statistics and Functions",
            "Writing and Running R Scripts",
          ],
        },
        {
          id: "R-for-Data-Visualization-in-Data-Science",
          title: "R for Data Visualization in Data Science",
          subtitle:
            "Creating insightful and interactive visualizations using R for data analysis",
          topics: [
            "Introduction to Data Visualization in R",
            "Understanding ggplot2 Grammar of Graphics",
            "Creating Basic Charts and Graphs",
            "Customizing Plots and Themes",
            "Advanced Visualizations (Histograms, Boxplots, Heatmaps)",
            "Interactive Visualizations with plotly",
            "Data Storytelling and Reporting",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Visualization in R",
            "Understanding ggplot2 Grammar of Graphics",
            "Creating Basic Charts and Graphs",
            "Customizing Plots and Themes",
            "Advanced Visualizations (Histograms, Boxplots, Heatmaps)",
            "Interactive Visualizations with plotly",
            "Data Storytelling and Reporting",
          ],
        },
        {
          id: "PostgreSQL-Programming",
          title: "PostgreSQL Programming",
          subtitle:
            "Developing and managing databases using PostgreSQL and SQL programming",
          topics: [
            "Introduction to PostgreSQL",
            "Database and Table Creation",
            "Data Types and Constraints",
            "SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Joins and Subqueries",
            "Functions and Stored Procedures",
            "Indexes and Performance Optimization",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to PostgreSQL",
            "Database and Table Creation",
            "Data Types and Constraints",
            "SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Joins and Subqueries",
            "Functions and Stored Procedures",
            "Indexes and Performance Optimization",
          ],
        },
        {
          id: "Oracle-SQL-Developer-Data-Modeler",
          title: "Oracle SQL Developer Data Modeler",
          subtitle:
            "Designing, visualizing, and managing database structures using Oracle SQL Developer Data Modeler",
          topics: [
            "Introduction to Data Modeling",
            "Entity-Relationship (ER) Diagrams",
            "Relational Model Design",
            "Normalization and Relationships",
            "Creating Logical and Physical Models",
            "Forward and Reverse Engineering",
            "Generating DDL Scripts",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Modeling",
            "Entity-Relationship (ER) Diagrams",
            "Relational Model Design",
            "Normalization and Relationships",
            "Creating Logical and Physical Models",
            "Forward and Reverse Engineering",
            "Generating DDL Scripts",
          ],
        },
        {
          id: "Oracle-PL/SQL",
          title: "Oracle PL/SQL",
          subtitle:
            "Programming with Oracle's Procedural Language to extend SQL capabilities",
          topics: [
            "Introduction to PL/SQL",
            "PL/SQL Block Structure",
            "Variables and Data Types",
            "Control Structures: IF, LOOP, CASE",
            "Cursors and Exception Handling",
            "Procedures and Functions",
            "Triggers and Packages",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to PL/SQL",
            "PL/SQL Block Structure",
            "Variables and Data Types",
            "Control Structures: IF, LOOP, CASE",
            "Cursors and Exception Handling",
            "Procedures and Functions",
            "Triggers and Packages",
          ],
        },
        {
          id: "Oracle-Developer",
          title: "Oracle Developer",
          subtitle:
            "Developing applications and database solutions using Oracle Developer tools",
          topics: [
            "Introduction to Oracle Developer",
            "Forms and Reports Development",
            "PL/SQL Basics",
            "Database Connectivity",
            "Building User Interfaces",
            "Data Validation and Error Handling",
            "Deploying and Maintaining Applications",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Oracle Developer",
            "Forms and Reports Development",
            "PL/SQL Basics",
            "Database Connectivity",
            "Building User Interfaces",
            "Data Validation and Error Handling",
            "Deploying and Maintaining Applications",
          ],
        },
        {
          id: "Oracle-Database-19c",
          title: "Oracle Database 19c",
          subtitle:
            "Managing and administering Oracle Database 19c for enterprise applications",
          topics: [
            "Introduction to Oracle Database 19c",
            "Architecture and Components",
            "Creating and Managing Databases",
            "Tables, Indexes, and Constraints",
            "SQL Basics: Queries and Data Manipulation",
            "Backup, Recovery, and Security",
            "Performance Tuning and Monitoring",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Oracle Database 19c",
            "Architecture and Components",
            "Creating and Managing Databases",
            "Tables, Indexes, and Constraints",
            "SQL Basics: Queries and Data Manipulation",
            "Backup, Recovery, and Security",
            "Performance Tuning and Monitoring",
          ],
        },
        {
          id: "IBM-DB2",
          title: "IBM DB2",
          subtitle:
            "Database management and development using IBM DB2 for enterprise applications",
          topics: [
            "Introduction to IBM DB2",
            "DB2 Architecture and Components",
            "Creating and Managing Databases",
            "Tables, Views, and Indexes",
            "SQL Queries and Data Manipulation",
            "Stored Procedures and Triggers",
            "Backup, Recovery, and Security",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to IBM DB2",
            "DB2 Architecture and Components",
            "Creating and Managing Databases",
            "Tables, Views, and Indexes",
            "SQL Queries and Data Manipulation",
            "Stored Procedures and Triggers",
            "Backup, Recovery, and Security",
          ],
        },
        {
          id: "Oracle-Administration",
          title: "Oracle Administration",
          subtitle:
            "Managing, configuring, and maintaining Oracle databases for optimal performance",
          topics: [
            "Introduction to Oracle Database Administration",
            "Database Installation and Configuration",
            "User Management and Security",
            "Backup and Recovery Strategies",
            "Monitoring and Performance Tuning",
            "Tablespaces and Storage Management",
            "Patching and Maintenance Tasks",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Oracle Database Administration",
            "Database Installation and Configuration",
            "User Management and Security",
            "Backup and Recovery Strategies",
            "Monitoring and Performance Tuning",
            "Tablespaces and Storage Management",
            "Patching and Maintenance Tasks",
          ],
        },
        {
          id: "Oracle-10g-Administration",
          title: "Oracle 10g Administration",
          subtitle:
            "Managing and maintaining Oracle 10g databases for optimal performance and reliability",
          topics: [
            "Overview of Oracle 10g Architecture",
            "Installation and Configuration",
            "User and Role Management",
            "Tablespaces and Storage Management",
            "Backup and Recovery Techniques",
            "Performance Monitoring and Tuning",
            "Patching and Maintenance Procedures",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Overview of Oracle 10g Architecture",
            "Installation and Configuration",
            "User and Role Management",
            "Tablespaces and Storage Management",
            "Backup and Recovery Techniques",
            "Performance Monitoring and Tuning",
            "Patching and Maintenance Procedures",
          ],
        },
        {
          id: "Natural-Language-Processing",
          title: "Natural Language Processing",
          subtitle:
            "Understanding and processing human language using computational techniques",
          topics: [
            "Introduction to NLP",
            "Text Preprocessing Techniques",
            "Tokenization and Lemmatization",
            "Part-of-Speech Tagging",
            "Named Entity Recognition (NER)",
            "Sentiment Analysis",
            "Language Modeling and Applications",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to NLP",
            "Text Preprocessing Techniques",
            "Tokenization and Lemmatization",
            "Part-of-Speech Tagging",
            "Named Entity Recognition (NER)",
            "Sentiment Analysis",
            "Language Modeling and Applications",
          ],
        },
        {
          id: "MongoDB",
          title: "MongoDB",
          subtitle:
            "NoSQL database for storing, querying, and managing document-oriented data",
          topics: [
            "Introduction to MongoDB",
            "Collections and Documents",
            "CRUD Operations",
            "Indexes and Query Optimization",
            "Aggregation Framework",
            "Data Modeling in MongoDB",
            "Backup, Restore, and Security",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to MongoDB",
            "Collections and Documents",
            "CRUD Operations",
            "Indexes and Query Optimization",
            "Aggregation Framework",
            "Data Modeling in MongoDB",
            "Backup, Restore, and Security",
          ],
        },
        {
          id: "Machine-Learning",
          title: "Machine Learning",
          subtitle:
            "Introduction to algorithms and techniques that allow computers to learn from data",
          topics: [
            "Introduction to Machine Learning",
            "Supervised Learning: Regression and Classification",
            "Unsupervised Learning: Clustering and Dimensionality Reduction",
            "Model Evaluation and Validation",
            "Feature Engineering and Selection",
            "Overfitting, Underfitting, and Regularization",
            "Introduction to Popular ML Libraries (scikit-learn, TensorFlow, etc.)",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Machine Learning",
            "Supervised Learning: Regression and Classification",
            "Unsupervised Learning: Clustering and Dimensionality Reduction",
            "Model Evaluation and Validation",
            "Feature Engineering and Selection",
            "Overfitting, Underfitting, and Regularization",
            "Introduction to Popular ML Libraries (scikit-learn, TensorFlow, etc.)",
          ],
        },
        {
          id: "MS-Visual-FoxPro",
          title: "MS Visual FoxPro",
          subtitle:
            "Database management and application development using Microsoft Visual FoxPro",
          topics: [
            "Introduction to Visual FoxPro",
            "Understanding Tables, Records, and Fields",
            "Querying Data with SQL in FoxPro",
            "Forms and Reports Development",
            "Programming with Visual FoxPro",
            "Data Validation and Error Handling",
            "Application Deployment and Maintenance",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Visual FoxPro",
            "Understanding Tables, Records, and Fields",
            "Querying Data with SQL in FoxPro",
            "Forms and Reports Development",
            "Programming with Visual FoxPro",
            "Data Validation and Error Handling",
            "Application Deployment and Maintenance",
          ],
        },
        {
          id: "MS-SQL-Server",
          title: "MS SQL Server",
          subtitle:
            "Relational database management and development using Microsoft SQL Server",
          topics: [
            "Introduction to MS SQL Server",
            "Database and Table Creation",
            "Data Types and Constraints",
            "Writing SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Joins, Subqueries, and Views",
            "Stored Procedures, Functions, and Triggers",
            "Backup, Restore, and Security Management",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to MS SQL Server",
            "Database and Table Creation",
            "Data Types and Constraints",
            "Writing SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Joins, Subqueries, and Views",
            "Stored Procedures, Functions, and Triggers",
            "Backup, Restore, and Security Management",
          ],
        },
        {
          id: "Data-Science",
          title: "Data Science",
          subtitle:
            "Extracting insights from data using statistical, analytical, and computational techniques",
          topics: [
            "Introduction to Data Science",
            "Data Collection and Cleaning",
            "Exploratory Data Analysis (EDA)",
            "Statistical Analysis and Hypothesis Testing",
            "Data Visualization Techniques",
            "Introduction to Machine Learning",
            "Data Science Tools and Libraries (Python, R, SQL, etc.)",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Science",
            "Data Collection and Cleaning",
            "Exploratory Data Analysis (EDA)",
            "Statistical Analysis and Hypothesis Testing",
            "Data Visualization Techniques",
            "Introduction to Machine Learning",
            "Data Science Tools and Libraries (Python, R, SQL, etc.)",
          ],
        },
        {
          id: "MS-SQL-Server-Development",
          title: "MS SQL Server - Development",
          subtitle:
            "Building and managing database solutions using Microsoft SQL Server development tools",
          topics: [
            "Introduction to MS SQL Server Development",
            "Database Design and Normalization",
            "Creating and Managing Tables, Views, and Indexes",
            "SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Stored Procedures and Functions",
            "Triggers and Transactions",
            "Query Optimization and Performance Tuning",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to MS SQL Server Development",
            "Database Design and Normalization",
            "Creating and Managing Tables, Views, and Indexes",
            "SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Stored Procedures and Functions",
            "Triggers and Transactions",
            "Query Optimization and Performance Tuning",
          ],
        },
        {
          id: "MS-Office-Access",
          title: "MS Office Access®",
          subtitle:
            "Managing and analyzing data using Microsoft Access database applications",
          topics: [
            "Introduction to MS Access",
            "Understanding Tables, Queries, Forms, and Reports",
            "Creating and Managing Databases",
            "Data Entry and Validation",
            "Building Queries for Data Retrieval",
            "Designing Forms and Reports",
            "Basic Macros and Automation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to MS Access",
            "Understanding Tables, Queries, Forms, and Reports",
            "Creating and Managing Databases",
            "Data Entry and Validation",
            "Building Queries for Data Retrieval",
            "Designing Forms and Reports",
            "Basic Macros and Automation",
          ],
        },
        {
          id: "MS-Office-Access",
          title: "MS Office Access®",
          subtitle:
            "Creating, managing, and analyzing databases using Microsoft Access",
          topics: [
            "Introduction to Microsoft Access",
            "Creating and Managing Databases",
            "Tables, Fields, and Data Types",
            "Queries for Data Retrieval",
            "Designing Forms for Data Entry",
            "Generating Reports",
            "Using Macros for Automation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Microsoft Access",
            "Creating and Managing Databases",
            "Tables, Fields, and Data Types",
            "Queries for Data Retrieval",
            "Designing Forms for Data Entry",
            "Generating Reports",
            "Using Macros for Automation",
          ],
        },
        {
          id: "MS-SQL-Server-Administration",
          title: "MS SQL Server - Administration",
          subtitle:
            "Managing, securing, and maintaining Microsoft SQL Server databases",
          topics: [
            "Introduction to SQL Server Administration",
            "Installing and Configuring SQL Server",
            "Managing Databases, Tables, and Indexes",
            "User Roles and Security Management",
            "Backup and Restore Strategies",
            "Monitoring and Performance Tuning",
            "Maintenance Tasks and Automation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to SQL Server Administration",
            "Installing and Configuring SQL Server",
            "Managing Databases, Tables, and Indexes",
            "User Roles and Security Management",
            "Backup and Restore Strategies",
            "Monitoring and Performance Tuning",
            "Maintenance Tasks and Automation",
          ],
        },
        {
          id: "MS-Power-BI",
          title: "MS Power BI",
          subtitle:
            "Creating interactive data visualizations and business intelligence reports using Microsoft Power BI",
          topics: [
            "Introduction to Power BI",
            "Connecting to Data Sources",
            "Data Transformation with Power Query",
            "Creating Visualizations and Reports",
            "Using DAX for Calculations",
            "Building Dashboards and KPIs",
            "Sharing and Publishing Reports",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Power BI",
            "Connecting to Data Sources",
            "Data Transformation with Power Query",
            "Creating Visualizations and Reports",
            "Using DAX for Calculations",
            "Building Dashboards and KPIs",
            "Sharing and Publishing Reports",
          ],
        },
        {
          id: "Database-Management-Systems",
          title: "Database Management Systems",
          subtitle:
            "Understanding the fundamentals of databases, their design, and management",
          topics: [
            "Introduction to Database Systems",
            "Types of Databases: Relational, NoSQL, and Hierarchical",
            "Database Architecture and Components",
            "Data Modeling and ER Diagrams",
            "SQL Basics: Queries and Data Manipulation",
            "Normalization and Constraints",
            "Database Security, Backup, and Recovery",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Database Systems",
            "Types of Databases: Relational, NoSQL, and Hierarchical",
            "Database Architecture and Components",
            "Data Modeling and ER Diagrams",
            "SQL Basics: Queries and Data Manipulation",
            "Normalization and Constraints",
            "Database Security, Backup, and Recovery",
          ],
        },
        {
          id: "Crystal-Reports",
          title: "Crystal Reports",
          subtitle:
            "Designing, generating, and managing business reports using Crystal Reports",
          topics: [
            "Introduction to Crystal Reports",
            "Connecting to Data Sources",
            "Creating and Formatting Reports",
            "Using Formulas and Functions",
            "Grouping, Sorting, and Summarizing Data",
            "Adding Charts and Visual Elements",
            "Exporting and Sharing Reports",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Crystal Reports",
            "Connecting to Data Sources",
            "Creating and Formatting Reports",
            "Using Formulas and Functions",
            "Grouping, Sorting, and Summarizing Data",
            "Adding Charts and Visual Elements",
            "Exporting and Sharing Reports",
          ],
        },
        {
          id: "Data-Analytics",
          title: "Data Analytics",
          subtitle:
            "Analyzing data to extract insights and support decision-making processes",
          topics: [
            "Introduction to Data Analytics",
            "Data Collection and Cleaning",
            "Exploratory Data Analysis (EDA)",
            "Data Visualization Techniques",
            "Descriptive and Inferential Statistics",
            "Introduction to Analytical Tools (Excel, Python, R, etc.)",
            "Interpreting and Presenting Analytical Results",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Analytics",
            "Data Collection and Cleaning",
            "Exploratory Data Analysis (EDA)",
            "Data Visualization Techniques",
            "Descriptive and Inferential Statistics",
            "Introduction to Analytical Tools (Excel, Python, R, etc.)",
            "Interpreting and Presenting Analytical Results",
          ],
        },
        {
          id: "Blockchain",
          title: "Blockchain",
          subtitle:
            "Understanding decentralized digital ledgers and their applications in secure transactions",
          topics: [
            "Introduction to Blockchain Technology",
            "How Blockchain Works: Blocks, Chains, and Nodes",
            "Consensus Mechanisms: Proof of Work and Proof of Stake",
            "Cryptography and Security in Blockchain",
            "Smart Contracts and Decentralized Applications (DApps)",
            "Public vs Private Blockchains",
            "Use Cases: Cryptocurrency, Supply Chain, and Beyond",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Blockchain Technology",
            "How Blockchain Works: Blocks, Chains, and Nodes",
            "Consensus Mechanisms: Proof of Work and Proof of Stake",
            "Cryptography and Security in Blockchain",
            "Smart Contracts and Decentralized Applications (DApps)",
            "Public vs Private Blockchains",
            "Use Cases: Cryptocurrency, Supply Chain, and Beyond",
          ],
        },
        {
          id: "Amazon-Redshift",
          title: "Amazon Redshift",
          subtitle:
            "Cloud-based data warehousing service for fast query performance and analytics",
          topics: [
            "Introduction to Amazon Redshift",
            "Redshift Architecture and Components",
            "Creating and Managing Clusters",
            "Loading and Querying Data",
            "Data Distribution and Sorting",
            "Performance Optimization and Monitoring",
            "Security, Backup, and Maintenance",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Amazon Redshift",
            "Redshift Architecture and Components",
            "Creating and Managing Clusters",
            "Loading and Querying Data",
            "Data Distribution and Sorting",
            "Performance Optimization and Monitoring",
            "Security, Backup, and Maintenance",
          ],
        },
        {
          id: "AI-Basic-Artificial-Intelligence-Knowledge",
          title: "AI - Basic Artificial Intelligence Knowledge",
          subtitle:
            "Introduction to the fundamentals of artificial intelligence and its applications",
          topics: [
            "Introduction to Artificial Intelligence",
            "History and Evolution of AI",
            "Types of AI: Narrow, General, and Super AI",
            "AI Applications in Real Life",
            "Basic Concepts of Machine Learning and Deep Learning",
            "AI Ethics and Responsible AI",
            "Future Trends in AI",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Artificial Intelligence",
            "History and Evolution of AI",
            "Types of AI: Narrow, General, and Super AI",
            "AI Applications in Real Life",
            "Basic Concepts of Machine Learning and Deep Learning",
            "AI Ethics and Responsible AI",
            "Future Trends in AI",
          ],
        },
        {
          id: "AWS-Data-Lake",
          title: "AWS Data Lake",
          subtitle:
            "Centralized repository for storing and analyzing structured and unstructured data in AWS",
          topics: [
            "Introduction to Data Lakes",
            "AWS Data Lake Architecture",
            "Storing Structured and Unstructured Data",
            "Data Ingestion and ETL Processes",
            "Data Cataloging and Metadata Management",
            "Integrating AWS Analytics Services (Athena, Redshift, QuickSight)",
            "Security, Access Control, and Compliance",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Data Lakes",
            "AWS Data Lake Architecture",
            "Storing Structured and Unstructured Data",
            "Data Ingestion and ETL Processes",
            "Data Cataloging and Metadata Management",
            "Integrating AWS Analytics Services (Athena, Redshift, QuickSight)",
            "Security, Access Control, and Compliance",
          ],
        },
      ],
    },
    AccountingFinancial: {
      title: "Accounting & Financiale",
      description:
        "Test accounting and financial skills to know a candidate's numerical ability. Utilize tests like Financial Analysis, QuickBooks, and Accounting Principals to hire qualified financial workers.",
      subjects: [
        {
          id: "Sage-Simply-Accounting",
          title: "Sage Simply Accounting",
          subtitle:
            "Fundamentals of Sage accounting software for small businesses",
          topics: [
            "Company Setup",
            "Accounts Payable and Receivable",
            "General Ledger Management",
            "Payroll Processing",
            "Financial Reporting",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Company Setup",
            "Accounts Payable and Receivable",
            "General Ledger Management",
            "Payroll Processing",
            "Financial Reporting",
          ],
        },
        {
          id: "Life-and-Health-Insurance-(US)",
          title: "Life and Health Insurance (US)",
          subtitle:
            "Understanding US life and health insurance principles, policies, and regulations",
          topics: [
            "Life Insurance Fundamentals",
            "Health Insurance Basics",
            "Policy Types and Coverage",
            "Underwriting and Claims Process",
            "Regulatory and Compliance Standards",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Life Insurance Fundamentals",
            "Health Insurance Basics",
            "Policy Types and Coverage",
            "Underwriting and Claims Process",
            "Regulatory and Compliance Standards",
          ],
        },
        {
          id: "Tax-Accounting",
          title: "Tax Accounting",
          subtitle:
            "Fundamentals of taxation principles and accounting for tax reporting and compliance",
          topics: [
            "Taxation Principles and Concepts",
            "Income Tax Computation",
            "Corporate and Individual Taxation",
            "Tax Deductions and Credits",
            "Tax Reporting and Compliance",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Taxation Principles and Concepts",
            "Income Tax Computation",
            "Corporate and Individual Taxation",
            "Tax Deductions and Credits",
            "Tax Reporting and Compliance",
          ],
        },
        {
          id: "Peachtree-Complete-Accounting",
          title: "Peachtree Complete Accounting",
          subtitle:
            "Essentials of using Peachtree accounting software for bookkeeping and financial management",
          topics: [
            "Company Setup and Configuration",
            "Chart of Accounts Management",
            "Accounts Payable and Receivable",
            "Inventory and Payroll Processing",
            "Financial Statements and Reporting",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Company Setup and Configuration",
            "Chart of Accounts Management",
            "Accounts Payable and Receivable",
            "Inventory and Payroll Processing",
            "Financial Statements and Reporting",
          ],
        },
        {
          id: "Property-and-Casualty-Insurance",
          title: "Property and Casualty Insurance",
          subtitle:
            "Understanding insurance coverage for property loss and liability risks",
          topics: [
            "Property Insurance Basics",
            "Casualty Insurance Overview",
            "Risk Management",
            "Underwriting Principles",
            "Claims Handling Process",
            "Policy Types and Coverage",
            "Regulatory Framework",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Property Insurance Basics",
            "Casualty Insurance Overview",
            "Risk Management",
            "Underwriting Principles",
            "Claims Handling Process",
            "Policy Types and Coverage",
            "Regulatory Framework",
          ],
        },
        {
          id: "NetSuite",
          title: "NetSuite",
          subtitle:
            "Introduction to NetSuite ERP for business management and automation",
          topics: [
            "NetSuite Overview",
            "ERP Fundamentals",
            "Financial Management",
            "Inventory and Order Management",
            "CRM and Sales Automation",
            "Customization and Scripting",
            "Reporting and Dashboards",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "NetSuite Overview",
            "ERP Fundamentals",
            "Financial Management",
            "Inventory and Order Management",
            "CRM and Sales Automation",
            "Customization and Scripting",
            "Reporting and Dashboards",
          ],
        },
        {
          id: "Money-Handling",
          title: "Money Handling",
          subtitle:
            "Learning essential skills for managing, counting, and safeguarding cash transactions",
          topics: [
            "Cash Handling Procedures",
            "Counting and Balancing Cash",
            "Detecting Counterfeit Currency",
            "Using POS Systems",
            "Recording Transactions",
            "Cash Drawer Reconciliation",
            "Security and Fraud Prevention",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Cash Handling Procedures",
            "Counting and Balancing Cash",
            "Detecting Counterfeit Currency",
            "Using POS Systems",
            "Recording Transactions",
            "Cash Drawer Reconciliation",
            "Security and Fraud Prevention",
          ],
        },
        {
          id: "Intuit-QuickBooks-Online",
          title: "Intuit QuickBooks Online",
          subtitle:
            "Introduction to QuickBooks Online for managing business accounting and finances",
          topics: [
            "QuickBooks Online Overview",
            "Setting Up a Company File",
            "Managing Chart of Accounts",
            "Recording Income and Expenses",
            "Invoicing and Payments",
            "Bank Reconciliation",
            "Financial Reporting and Analysis",
            "User Roles and Permissions",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "QuickBooks Online Overview",
            "Setting Up a Company File",
            "Managing Chart of Accounts",
            "Recording Income and Expenses",
            "Invoicing and Payments",
            "Bank Reconciliation",
            "Financial Reporting and Analysis",
            "User Roles and Permissions",
          ],
        },
        {
          id: "Intuit-QuickBooks-Desktop-2024",
          title: "Intuit QuickBooks Desktop 2024",
          subtitle:
            "Mastering QuickBooks Desktop 2024 for accounting, invoicing, and business management",
          topics: [
            "QuickBooks Desktop Overview",
            "Company Setup and Preferences",
            "Managing Chart of Accounts",
            "Recording Income and Expenses",
            "Bank Reconciliation",
            "Payroll Processing",
            "Inventory Management",
            "Financial Reports and Analysis",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "QuickBooks Desktop Overview",
            "Company Setup and Preferences",
            "Managing Chart of Accounts",
            "Recording Income and Expenses",
            "Bank Reconciliation",
            "Payroll Processing",
            "Inventory Management",
            "Financial Reports and Analysis",
          ],
        },
        {
          id: "International-Financial-Reporting-Standards-IFRS",
          title: "International Financial Reporting Standards (IFRS)",
          subtitle:
            "Understanding global accounting standards and financial reporting principles",
          topics: [
            "Introduction to IFRS",
            "Conceptual Framework for Financial Reporting",
            "Presentation of Financial Statements",
            "Revenue Recognition (IFRS 15)",
            "Leases (IFRS 16)",
            "Financial Instruments (IFRS 9)",
            "Consolidation and Group Accounts",
            "IFRS vs GAAP Differences",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to IFRS",
            "Conceptual Framework for Financial Reporting",
            "Presentation of Financial Statements",
            "Revenue Recognition (IFRS 15)",
            "Leases (IFRS 16)",
            "Financial Instruments (IFRS 9)",
            "Consolidation and Group Accounts",
            "IFRS vs GAAP Differences",
          ],
        },
        {
          id: "Financial-Statements",
          title: "Financial Statements",
          subtitle:
            "Learning how to prepare and interpret balance sheets, income statements, and cash flow statements",
          topics: [
            "Introduction to Financial Statements",
            "Balance Sheet Components",
            "Income Statement Analysis",
            "Cash Flow Statement Preparation",
            "Statement of Changes in Equity",
            "Interpreting Financial Ratios",
            "Common Reporting Errors",
            "Financial Statement Notes and Disclosures",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Financial Statements",
            "Balance Sheet Components",
            "Income Statement Analysis",
            "Cash Flow Statement Preparation",
            "Statement of Changes in Equity",
            "Interpreting Financial Ratios",
            "Common Reporting Errors",
            "Financial Statement Notes and Disclosures",
          ],
        },
        {
          id: "Financial-Analysis",
          title: "Financial Analysis",
          subtitle:
            "Understanding how to evaluate business performance using key financial metrics and ratios",
          topics: [
            "Introduction to Financial Analysis",
            "Horizontal and Vertical Analysis",
            "Ratio Analysis",
            "Profitability Analysis",
            "Liquidity and Solvency Analysis",
            "Trend Analysis",
            "Cash Flow Analysis",
            "Investment and Valuation Metrics",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Financial Analysis",
            "Horizontal and Vertical Analysis",
            "Ratio Analysis",
            "Profitability Analysis",
            "Liquidity and Solvency Analysis",
            "Trend Analysis",
            "Cash Flow Analysis",
            "Investment and Valuation Metrics",
          ],
        },
        {
          id: "Financial-Accounting",
          title: "Financial Accounting",
          subtitle:
            "Introduction to financial accounting concepts, principles, and reporting standards",
          topics: [
            "Accounting Principles and Concepts",
            "Double-Entry System",
            "Journals and Ledgers",
            "Trial Balance Preparation",
            "Adjusting and Closing Entries",
            "Financial Statement Preparation",
            "Accrual vs Cash Accounting",
            "Regulatory Framework and Standards",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Accounting Principles and Concepts",
            "Double-Entry System",
            "Journals and Ledgers",
            "Trial Balance Preparation",
            "Adjusting and Closing Entries",
            "Financial Statement Preparation",
            "Accrual vs Cash Accounting",
            "Regulatory Framework and Standards",
          ],
        },
        {
          id: "Debt-Collection",
          title: "Debt Collection",
          subtitle:
            "Understanding debt recovery processes, communication, and legal compliance in collections",
          topics: [
            "Introduction to Debt Collection",
            "Collection Strategies and Techniques",
            "Customer Communication Skills",
            "Negotiation and Payment Arrangements",
            "Debt Recovery Laws and Regulations",
            "Handling Difficult Debtors",
            "Credit Reporting and Risk Assessment",
            "Ethical and Professional Practices",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Debt Collection",
            "Collection Strategies and Techniques",
            "Customer Communication Skills",
            "Negotiation and Payment Arrangements",
            "Debt Recovery Laws and Regulations",
            "Handling Difficult Debtors",
            "Credit Reporting and Risk Assessment",
            "Ethical and Professional Practices",
          ],
        },
        {
          id: "Bank-Teller-Skills",
          title: "Bank Teller Skills",
          subtitle:
            "Developing essential banking, cash handling, and customer service skills for tellers",
          topics: [
            "Bank Teller Responsibilities",
            "Cash Handling and Reconciliation",
            "Customer Service Excellence",
            "Processing Deposits and Withdrawals",
            "Check Verification and Fraud Prevention",
            "Bank Security and Compliance",
            "Account Opening Procedures",
            "Communication and Professionalism",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Bank Teller Responsibilities",
            "Cash Handling and Reconciliation",
            "Customer Service Excellence",
            "Processing Deposits and Withdrawals",
            "Check Verification and Fraud Prevention",
            "Bank Security and Compliance",
            "Account Opening Procedures",
            "Communication and Professionalism",
          ],
        },
        {
          id: "Commercial-Insurance",
          title: "Commercial Insurance",
          subtitle:
            "Exploring insurance products that protect businesses from financial losses and liabilities",
          topics: [
            "Introduction to Commercial Insurance",
            "Types of Business Insurance Policies",
            "Commercial Property Coverage",
            "General Liability Insurance",
            "Workers’ Compensation",
            "Business Interruption Insurance",
            "Underwriting and Premiums",
            "Claims Process and Risk Management",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Commercial Insurance",
            "Types of Business Insurance Policies",
            "Commercial Property Coverage",
            "General Liability Insurance",
            "Workers’ Compensation",
            "Business Interruption Insurance",
            "Underwriting and Premiums",
            "Claims Process and Risk Management",
          ],
        },
        {
          id: "Anti-Money-Laundering",
          title: "Anti-Money Laundering",
          subtitle:
            "Understanding AML regulations, compliance measures, and financial crime prevention",
          topics: [
            "Introduction to Money Laundering",
            "Stages of Money Laundering",
            "AML Laws and Regulations",
            "Know Your Customer (KYC) Procedures",
            "Customer Due Diligence (CDD)",
            "Suspicious Activity Reporting (SAR)",
            "AML Compliance Programs",
            "Financial Crime Prevention Techniques",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Money Laundering",
            "Stages of Money Laundering",
            "AML Laws and Regulations",
            "Know Your Customer (KYC) Procedures",
            "Customer Due Diligence (CDD)",
            "Suspicious Activity Reporting (SAR)",
            "AML Compliance Programs",
            "Financial Crime Prevention Techniques",
          ],
        },
        {
          id: "Accounting-and-Bookkeeping-Principles",
          title: "Accounting and Bookkeeping Principles",
          subtitle:
            "Learning the fundamentals of bookkeeping and accounting processes for accurate records",
          topics: [
            "Introduction to Accounting and Bookkeeping",
            "Accounting Equation and Principles",
            "Recording Transactions",
            "Ledger and Journal Entries",
            "Trial Balance and Adjustments",
            "Financial Statements Overview",
            "Cash vs Accrual Accounting",
            "Bookkeeping Best Practices",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Accounting and Bookkeeping",
            "Accounting Equation and Principles",
            "Recording Transactions",
            "Ledger and Journal Entries",
            "Trial Balance and Adjustments",
            "Financial Statements Overview",
            "Cash vs Accrual Accounting",
            "Bookkeeping Best Practices",
          ],
        },
      ],
    },
    Education: {
      title: "Education",
      description:
        "Schools need employees with a wide range of skills. Test everything from Teaching Skills to Interpersonal Ability and even Food Service to hire better.",
      subjects: [
        {
          id: "School-Food-Service",
          title: "School Food Service",
          subtitle:
            "Understanding food preparation, safety, and nutrition standards in a school environment",
          topics: [
            "Introduction to School Food Programs",
            "Food Safety and Sanitation",
            "Meal Planning and Nutrition Guidelines",
            "Allergy and Dietary Restrictions",
            "Food Storage and Handling Procedures",
            "Serving and Portion Control",
            "Compliance with School Nutrition Policies",
            "Customer Service in Cafeterias",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to School Food Programs",
            "Food Safety and Sanitation",
            "Meal Planning and Nutrition Guidelines",
            "Allergy and Dietary Restrictions",
            "Food Storage and Handling Procedures",
            "Serving and Portion Control",
            "Compliance with School Nutrition Policies",
            "Customer Service in Cafeterias",
          ],
        },
        {
          id: "Special-Education-Medical-Assistance",
          title: "Special Education Medical Assistance",
          subtitle:
            "Understanding medical assistance, compliance, and support services for special education students",
          topics: [
            "Overview of Special Education Programs",
            "Medical Assistance Eligibility",
            "Documentation and Reporting Requirements",
            "Coordination with Healthcare Providers",
            "Confidentiality and Student Privacy",
            "IEP and Medicaid Billing Process",
            "Support Roles for School Staff",
            "Ethical and Legal Considerations",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Overview of Special Education Programs",
            "Medical Assistance Eligibility",
            "Documentation and Reporting Requirements",
            "Coordination with Healthcare Providers",
            "Confidentiality and Student Privacy",
            "IEP and Medicaid Billing Process",
            "Support Roles for School Staff",
            "Ethical and Legal Considerations",
          ],
        },
        {
          id: "Administrative-Assistant-in-a-School-Setting",
          title: "Administrative Assistant in a School Setting",
          subtitle:
            "Developing clerical, communication, and organizational skills for school office environments",
          topics: [
            "School Office Operations Overview",
            "Clerical and Administrative Duties",
            "Recordkeeping and Filing Systems",
            "Communication with Staff, Parents, and Students",
            "Scheduling and Calendar Management",
            "Confidentiality and Data Privacy",
            "Office Technology and Software Use",
            "Professionalism and Team Collaboration",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "School Office Operations Overview",
            "Clerical and Administrative Duties",
            "Recordkeeping and Filing Systems",
            "Communication with Staff, Parents, and Students",
            "Scheduling and Calendar Management",
            "Confidentiality and Data Privacy",
            "Office Technology and Software Use",
            "Professionalism and Team Collaboration",
          ],
        },
        {
          id: "School-Clerk",
          title: "School Clerk",
          subtitle:
            "Learning clerical, recordkeeping, and student support duties in a school office setting",
          topics: [
            "Role of a School Clerk",
            "Student Attendance and Records Management",
            "Office Communication and Correspondence",
            "Assisting Teachers and Administrators",
            "Handling Phone Calls and Visitors",
            "Filing and Data Entry Procedures",
            "Confidentiality and Compliance",
            "Time Management and Organization",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Role of a School Clerk",
            "Student Attendance and Records Management",
            "Office Communication and Correspondence",
            "Assisting Teachers and Administrators",
            "Handling Phone Calls and Visitors",
            "Filing and Data Entry Procedures",
            "Confidentiality and Compliance",
            "Time Management and Organization",
          ],
        },
        {
          id: "Interpersonal-Skills-in-a-School-Setting",
          title: "Interpersonal Skills in a School Setting",
          subtitle:
            "Enhancing communication, teamwork, and empathy skills for effective school interactions",
          topics: [
            "Importance of Interpersonal Skills in Schools",
            "Effective Communication Techniques",
            "Active Listening and Empathy",
            "Conflict Resolution Strategies",
            "Teamwork and Collaboration",
            "Positive Attitude and Professional Conduct",
            "Cultural Sensitivity and Inclusion",
            "Building Relationships with Students and Staff",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Importance of Interpersonal Skills in Schools",
            "Effective Communication Techniques",
            "Active Listening and Empathy",
            "Conflict Resolution Strategies",
            "Teamwork and Collaboration",
            "Positive Attitude and Professional Conduct",
            "Cultural Sensitivity and Inclusion",
            "Building Relationships with Students and Staff",
          ],
        },
        {
          id: "General-Scholastic-Teaching-Skills",
          title: "General Scholastic Teaching Skills",
          subtitle:
            "Fundamentals of teaching, classroom management, and student engagement techniques",
          topics: [
            "Introduction to Teaching Principles",
            "Lesson Planning and Preparation",
            "Classroom Management Strategies",
            "Student Assessment and Feedback",
            "Differentiated Instruction",
            "Engaging Learning Environments",
            "Communication with Parents and Students",
            "Professional Ethics in Education",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Teaching Principles",
            "Lesson Planning and Preparation",
            "Classroom Management Strategies",
            "Student Assessment and Feedback",
            "Differentiated Instruction",
            "Engaging Learning Environments",
            "Communication with Parents and Students",
            "Professional Ethics in Education",
          ],
        },
      ],
    },
    DesktopPublishing: {
      title: "Desktop Publishing Software",
      description:
        "Put together a winning creative team. Test candidate knowledge on the Adobe Suite to hire employees that will hit the ground running.",
      subjects: [
        {
          id: "MS-Office-Publisher",
          title: "MS Office Publisher",
          subtitle:
            "Learning to design professional publications and marketing materials using Microsoft Publisher",
          topics: [
            "Introduction to MS Publisher",
            "Creating and Formatting Publications",
            "Working with Templates and Layouts",
            "Inserting Text, Images, and Graphics",
            "Designing Brochures, Flyers, and Newsletters",
            "Page Setup and Printing Options",
            "Using Master Pages and Styles",
            "Exporting and Sharing Publications",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to MS Publisher",
            "Creating and Formatting Publications",
            "Working with Templates and Layouts",
            "Inserting Text, Images, and Graphics",
            "Designing Brochures, Flyers, and Newsletters",
            "Page Setup and Printing Options",
            "Using Master Pages and Styles",
            "Exporting and Sharing Publications",
          ],
        },
        {
          id: "Corel-WordPerfect",
          title: "Corel WordPerfect",
          subtitle:
            "Creating, editing, and formatting professional documents using Corel WordPerfect",
          topics: [
            "Introduction to Corel WordPerfect Interface",
            "Creating and Saving Documents",
            "Formatting Text and Paragraphs",
            "Working with Tables and Columns",
            "Using Styles, Templates, and Macros",
            "Inserting Images, Charts, and Objects",
            "Page Setup and Printing Options",
            "Document Review and Collaboration Tools",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Corel WordPerfect Interface",
            "Creating and Saving Documents",
            "Formatting Text and Paragraphs",
            "Working with Tables and Columns",
            "Using Styles, Templates, and Macros",
            "Inserting Images, Charts, and Objects",
            "Page Setup and Printing Options",
            "Document Review and Collaboration Tools",
          ],
        },
        {
          id: "Adobe-Photoshop",
          title: "Adobe Photoshop",
          subtitle:
            "Mastering image editing, retouching, and graphic design using Adobe Photoshop",
          topics: [
            "Photoshop Interface Overview",
            "Working with Layers and Masks",
            "Image Editing and Retouching Techniques",
            "Using Selection and Brush Tools",
            "Color Correction and Adjustments",
            "Typography and Text Effects",
            "Photo Manipulation and Compositing",
            "Exporting and File Formats",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Photoshop Interface Overview",
            "Working with Layers and Masks",
            "Image Editing and Retouching Techniques",
            "Using Selection and Brush Tools",
            "Color Correction and Adjustments",
            "Typography and Text Effects",
            "Photo Manipulation and Compositing",
            "Exporting and File Formats",
          ],
        },
        {
          id: "Adobe-Premiere-Pro",
          title: "Adobe Premiere Pro",
          subtitle:
            "Learning video editing and post-production workflows using Adobe Premiere Pro",
          topics: [
            "Premiere Pro Interface Overview",
            "Importing and Organizing Media",
            "Timeline Editing Techniques",
            "Transitions and Effects",
            "Audio Mixing and Synchronization",
            "Color Correction and Grading",
            "Exporting and Rendering Projects",
            "Best Practices for Video Production",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Premiere Pro Interface Overview",
            "Importing and Organizing Media",
            "Timeline Editing Techniques",
            "Transitions and Effects",
            "Audio Mixing and Synchronization",
            "Color Correction and Grading",
            "Exporting and Rendering Projects",
            "Best Practices for Video Production",
          ],
        },
        {
          id: "Adobe-PageMaker",
          title: "Adobe PageMaker",
          subtitle:
            "Designing print-ready layouts and publications using Adobe PageMaker",
          topics: [
            "Introduction to Adobe PageMaker",
            "Page Setup and Layout Design",
            "Working with Text and Frames",
            "Inserting and Formatting Images",
            "Using Templates and Styles",
            "Creating Brochures and Newsletters",
            "Master Pages and Reusable Elements",
            "Preparing Documents for Print",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Adobe PageMaker",
            "Page Setup and Layout Design",
            "Working with Text and Frames",
            "Inserting and Formatting Images",
            "Using Templates and Styles",
            "Creating Brochures and Newsletters",
            "Master Pages and Reusable Elements",
            "Preparing Documents for Print",
          ],
        },
        {
          id: "Adobe-InDesign",
          title: "Adobe InDesign",
          subtitle:
            "Creating professional layouts and publications using Adobe InDesign",
          topics: [
            "InDesign Interface Overview",
            "Document Setup and Page Layouts",
            "Working with Text Frames and Images",
            "Typography and Styles",
            "Using Master Pages and Grids",
            "Creating Brochures, Books, and Magazines",
            "Exporting PDFs and Print Preparation",
            "Interactive Documents and Publishing",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "InDesign Interface Overview",
            "Document Setup and Page Layouts",
            "Working with Text Frames and Images",
            "Typography and Styles",
            "Using Master Pages and Grids",
            "Creating Brochures, Books, and Magazines",
            "Exporting PDFs and Print Preparation",
            "Interactive Documents and Publishing",
          ],
        },
        {
          id: "Adobe-Illustrator",
          title: "Adobe Illustrator",
          subtitle:
            "Learning vector-based graphic design and illustration using Adobe Illustrator",
          topics: [
            "Illustrator Interface Overview",
            "Working with Shapes and Paths",
            "Pen Tool and Anchor Points",
            "Color, Gradients, and Patterns",
            "Typography and Text Effects",
            "Creating Logos and Icons",
            "Layers and Artboards",
            "Exporting and File Formats",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Illustrator Interface Overview",
            "Working with Shapes and Paths",
            "Pen Tool and Anchor Points",
            "Color, Gradients, and Patterns",
            "Typography and Text Effects",
            "Creating Logos and Icons",
            "Layers and Artboards",
            "Exporting and File Formats",
          ],
        },
        {
          id: "Adobe-Fireworks",
          title: "Adobe Fireworks",
          subtitle:
            "Designing web graphics, UI elements, and optimized images using Adobe Fireworks",
          topics: [
            "Introduction to Adobe Fireworks",
            "Interface and Workspace Overview",
            "Creating and Editing Vector Graphics",
            "Image Optimization for Web",
            "Working with Layers and Symbols",
            "Designing Buttons and Web Elements",
            "Slicing and Exporting for Web",
            "Integration with Dreamweaver and Photoshop",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Adobe Fireworks",
            "Interface and Workspace Overview",
            "Creating and Editing Vector Graphics",
            "Image Optimization for Web",
            "Working with Layers and Symbols",
            "Designing Buttons and Web Elements",
            "Slicing and Exporting for Web",
            "Integration with Dreamweaver and Photoshop",
          ],
        },
        {
          id: "Adobe-Creative-Cloud-CC-InDesign-Illustrator-Photoshop",
          title: "Adobe Creative Cloud CC (InDesign, Illustrator, Photoshop)",
          subtitle:
            "Comprehensive overview of Adobe Creative Cloud design tools for creative professionals",
          topics: [
            "Overview of Adobe Creative Cloud",
            "Introduction to Photoshop, Illustrator, and InDesign",
            "Image Editing and Retouching (Photoshop)",
            "Vector Design and Illustration (Illustrator)",
            "Layout and Publishing (InDesign)",
            "Creative Workflow and File Management",
            "Cloud Collaboration and Libraries",
            "Exporting and Publishing Assets",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Overview of Adobe Creative Cloud",
            "Introduction to Photoshop, Illustrator, and InDesign",
            "Image Editing and Retouching (Photoshop)",
            "Vector Design and Illustration (Illustrator)",
            "Layout and Publishing (InDesign)",
            "Creative Workflow and File Management",
            "Cloud Collaboration and Libraries",
            "Exporting and Publishing Assets",
          ],
        },
        {
          id: "Adobe-After-Effects",
          title: "Adobe After Effects",
          subtitle:
            "Creating motion graphics, animations, and visual effects using Adobe After Effects",
          topics: [
            "After Effects Interface Overview",
            "Working with Compositions and Layers",
            "Animation Basics and Keyframing",
            "Text and Shape Animation",
            "Using Effects and Presets",
            "Masking and Tracking",
            "Rendering and Exporting Projects",
            "Motion Design Best Practices",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "After Effects Interface Overview",
            "Working with Compositions and Layers",
            "Animation Basics and Keyframing",
            "Text and Shape Animation",
            "Using Effects and Presets",
            "Masking and Tracking",
            "Rendering and Exporting Projects",
            "Motion Design Best Practices",
          ],
        },
        {
          id: "Adobe-Acrobat",
          title: "Adobe Acrobat",
          subtitle:
            "Managing, editing, and securing PDF documents using Adobe Acrobat",
          topics: [
            "Introduction to Adobe Acrobat",
            "Creating and Converting PDFs",
            "Editing Text and Images",
            "Merging and Splitting Documents",
            "Adding Comments and Annotations",
            "Using Digital Signatures and Forms",
            "Protecting and Securing PDFs",
            "Sharing and Collaboration Features",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Adobe Acrobat",
            "Creating and Converting PDFs",
            "Editing Text and Images",
            "Merging and Splitting Documents",
            "Adding Comments and Annotations",
            "Using Digital Signatures and Forms",
            "Protecting and Securing PDFs",
            "Sharing and Collaboration Features",
          ],
        },
      ],
    },
    LanguageCommunication: {
      title: "Language & Communication",
      description:
        "Parlez-vous francais? Test candidate's verbal or written skills on over fifteen different languages.",
      subjects: [
        {
          id: "Portuguese-Language-BR",
          title: "Portuguese Language (BR)",
          subtitle:
            "Learning basic reading, writing, and speaking skills in Brazilian Portuguese",
          topics: [
            "Portuguese Grammar Fundamentals",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Structure and Word Order",
            "Reading Comprehension",
            "Writing Skills and Punctuation",
            "Conversational Portuguese",
            "Cultural and Regional Variations in Brazil",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Portuguese Grammar Fundamentals",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Structure and Word Order",
            "Reading Comprehension",
            "Writing Skills and Punctuation",
            "Conversational Portuguese",
            "Cultural and Regional Variations in Brazil",
          ],
        },
        {
          id: "Spanish-to-English-Translation-MX",
          title: "Spanish to English Translation (MX)",
          subtitle:
            "Translating Mexican Spanish text into clear and accurate English",
          topics: [
            "Spanish to English Translation Basics",
            "Understanding Regional Spanish (Mexico)",
            "Grammar and Syntax Differences",
            "Idiomatic Expressions and Context",
            "Translation Accuracy and Clarity",
            "Proofreading and Editing",
            "Common Translation Challenges",
            "Professional Translation Tools and Resources",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Spanish to English Translation Basics",
            "Understanding Regional Spanish (Mexico)",
            "Grammar and Syntax Differences",
            "Idiomatic Expressions and Context",
            "Translation Accuracy and Clarity",
            "Proofreading and Editing",
            "Common Translation Challenges",
            "Professional Translation Tools and Resources",
          ],
        },
        {
          id: "Urdu-Language",
          title: "Urdu Language",
          subtitle:
            "Understanding grammar, vocabulary, and writing in Urdu for daily communication",
          topics: [
            "Urdu Alphabets and Pronunciation",
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Writing Practice",
            "Conversational Urdu",
            "Listening Comprehension",
            "Cultural Context and Usage",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Urdu Alphabets and Pronunciation",
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Writing Practice",
            "Conversational Urdu",
            "Listening Comprehension",
            "Cultural Context and Usage",
          ],
        },
        {
          id: "Spanish-to-English-Translation-ES",
          title: "Spanish To English Translation (ES)",
          subtitle:
            "Developing skills to translate European Spanish text into fluent English",
          topics: [
            "Basics of Spanish to English Translation",
            "Grammar and Sentence Structure Comparison",
            "Vocabulary and Contextual Accuracy",
            "Idiomatic Expressions and Literal Meanings",
            "Editing and Proofreading Translations",
            "Cultural Nuances in Translation",
            "Formal vs Informal Language Usage",
            "Common Mistakes in Spanish-English Translation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Basics of Spanish to English Translation",
            "Grammar and Sentence Structure Comparison",
            "Vocabulary and Contextual Accuracy",
            "Idiomatic Expressions and Literal Meanings",
            "Editing and Proofreading Translations",
            "Cultural Nuances in Translation",
            "Formal vs Informal Language Usage",
            "Common Mistakes in Spanish-English Translation",
          ],
        },
        {
          id: "Polish-Language",
          title: "Polish Language",
          subtitle:
            "Introduction to the basics of Polish grammar, pronunciation, and communication",
          topics: [
            "Polish Alphabet and Pronunciation",
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Sentence Structure",
            "Reading Comprehension",
            "Writing Practice",
            "Conversational Polish",
            "Cultural Insights of Poland",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Polish Alphabet and Pronunciation",
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Sentence Structure",
            "Reading Comprehension",
            "Writing Practice",
            "Conversational Polish",
            "Cultural Insights of Poland",
          ],
        },
        {
          id: "Russian-Language",
          title: "Russian Language",
          subtitle:
            "Learning to read, write, and communicate effectively in Russian",
          topics: [
            "Cyrillic Alphabet and Pronunciation",
            "Grammar Fundamentals",
            "Vocabulary and Everyday Expressions",
            "Verb Conjugations and Cases",
            "Reading Comprehension",
            "Writing Sentences in Russian",
            "Conversational Practice",
            "Cultural Context and Usage",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Cyrillic Alphabet and Pronunciation",
            "Grammar Fundamentals",
            "Vocabulary and Everyday Expressions",
            "Verb Conjugations and Cases",
            "Reading Comprehension",
            "Writing Sentences in Russian",
            "Conversational Practice",
            "Cultural Context and Usage",
          ],
        },
        {
          id: "Spanish-Language-ES",
          title: "Spanish Language (ES)",
          subtitle:
            "Understanding the fundamentals of European Spanish for communication and writing",
          topics: [
            "Spanish Grammar Basics",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Formation",
            "Reading and Listening Skills",
            "Conversational Spanish",
            "Writing Skills and Spelling",
            "Cultural Aspects of Spain",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Spanish Grammar Basics",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Formation",
            "Reading and Listening Skills",
            "Conversational Spanish",
            "Writing Skills and Spelling",
            "Cultural Aspects of Spain",
          ],
        },
        {
          id: "Korean-Language",
          title: "Korean Language",
          subtitle:
            "Mastering the basics of Hangul, Korean grammar, and everyday conversation",
          topics: [
            "Introduction to Hangul Alphabet",
            "Korean Pronunciation",
            "Basic Grammar and Sentence Structure",
            "Common Vocabulary and Expressions",
            "Reading and Writing Practice",
            "Conversational Korean",
            "Politeness Levels and Honorifics",
            "Cultural and Linguistic Nuances",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Introduction to Hangul Alphabet",
            "Korean Pronunciation",
            "Basic Grammar and Sentence Structure",
            "Common Vocabulary and Expressions",
            "Reading and Writing Practice",
            "Conversational Korean",
            "Politeness Levels and Honorifics",
            "Cultural and Linguistic Nuances",
          ],
        },
        {
          id: "Modern-Arabic-Language",
          title: "Modern Arabic Language",
          subtitle:
            "Learning Modern Standard Arabic for reading, writing, and conversation",
          topics: [
            "Arabic Script and Pronunciation",
            "Grammar Fundamentals",
            "Basic Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Writing Skills",
            "Conversational Arabic",
            "Numbers, Dates, and Directions",
            "Cultural and Regional Variations",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Arabic Script and Pronunciation",
            "Grammar Fundamentals",
            "Basic Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Writing Skills",
            "Conversational Arabic",
            "Numbers, Dates, and Directions",
            "Cultural and Regional Variations",
          ],
        },
        {
          id: "Japanese-Language-JP",
          title: "Japanese Language (JP)",
          subtitle:
            "Introduction to Japanese grammar, writing systems, and conversational skills",
          topics: [
            "Hiragana, Katakana, and Kanji Overview",
            "Pronunciation and Sentence Structure",
            "Common Vocabulary and Expressions",
            "Basic Grammar Patterns",
            "Reading and Writing Practice",
            "Conversational Japanese",
            "Cultural Etiquette and Communication",
            "Listening and Comprehension Exercises",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Hiragana, Katakana, and Kanji Overview",
            "Pronunciation and Sentence Structure",
            "Common Vocabulary and Expressions",
            "Basic Grammar Patterns",
            "Reading and Writing Practice",
            "Conversational Japanese",
            "Cultural Etiquette and Communication",
            "Listening and Comprehension Exercises",
          ],
        },
        {
          id: "Italian-Language-IT",
          title: "Italian Language (IT)",
          subtitle:
            "Learning the basics of Italian pronunciation, grammar, and everyday communication",
          topics: [
            "Italian Alphabet and Pronunciation",
            "Grammar and Sentence Structure",
            "Common Vocabulary and Phrases",
            "Reading and Listening Skills",
            "Conversational Italian",
            "Writing Practice",
            "Verbs and Tenses",
            "Italian Culture and Expressions",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Italian Alphabet and Pronunciation",
            "Grammar and Sentence Structure",
            "Common Vocabulary and Phrases",
            "Reading and Listening Skills",
            "Conversational Italian",
            "Writing Practice",
            "Verbs and Tenses",
            "Italian Culture and Expressions",
          ],
        },
        {
          id: "French-Language-CA",
          title: "French Language (CA)",
          subtitle:
            "Understanding Canadian French for reading, writing, and everyday communication",
          topics: [
            "French Grammar Fundamentals",
            "Common Canadian Vocabulary and Expressions",
            "Pronunciation and Listening Skills",
            "Sentence Formation",
            "Reading and Writing Practice",
            "Conversational French (Canada)",
            "Regional Variations and Slang",
            "Cultural and Linguistic Insights",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "French Grammar Fundamentals",
            "Common Canadian Vocabulary and Expressions",
            "Pronunciation and Listening Skills",
            "Sentence Formation",
            "Reading and Writing Practice",
            "Conversational French (Canada)",
            "Regional Variations and Slang",
            "Cultural and Linguistic Insights",
          ],
        },
        {
          id: "Hindi-Language",
          title: "Hindi Language",
          subtitle:
            "Developing foundational reading, writing, and conversational Hindi skills",
          topics: [
            "Hindi Alphabets and Pronunciation",
            "Basic Grammar Rules",
            "Vocabulary and Everyday Phrases",
            "Sentence Construction",
            "Reading and Writing Skills",
            "Conversational Hindi",
            "Listening Comprehension",
            "Cultural and Regional Expressions",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Hindi Alphabets and Pronunciation",
            "Basic Grammar Rules",
            "Vocabulary and Everyday Phrases",
            "Sentence Construction",
            "Reading and Writing Skills",
            "Conversational Hindi",
            "Listening Comprehension",
            "Cultural and Regional Expressions",
          ],
        },
        {
          id: "Greek-Language",
          title: "Greek Language",
          subtitle:
            "Assess understanding of Greek grammar, vocabulary, pronunciation, and sentence structure.",
          topics: [
            "Greek Grammar",
            "Vocabulary and Usage",
            "Reading Comprehension",
            "Sentence Construction",
            "Pronunciation and Accents",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Greek Grammar",
            "Vocabulary and Usage",
            "Reading Comprehension",
            "Sentence Construction",
            "Pronunciation and Accents",
          ],
        },
        {
          id: "German-Language-DE",
          title: "German Language (DE)",
          subtitle:
            "Learning the basics of German grammar, vocabulary, and pronunciation",
          topics: [
            "German Alphabet and Pronunciation",
            "Grammar and Sentence Structure",
            "Common Vocabulary and Phrases",
            "Reading and Listening Skills",
            "Conversational German",
            "Verb Conjugations and Tenses",
            "Writing Practice",
            "Cultural and Linguistic Context",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "German Alphabet and Pronunciation",
            "Grammar and Sentence Structure",
            "Common Vocabulary and Phrases",
            "Reading and Listening Skills",
            "Conversational German",
            "Verb Conjugations and Tenses",
            "Writing Practice",
            "Cultural and Linguistic Context",
          ],
        },
        {
          id: "French-Language-FR",
          title: "French Language (FR)",
          subtitle:
            "Mastering the essentials of European French grammar, vocabulary, and conversation",
          topics: [
            "French Grammar Basics",
            "Vocabulary and Expressions",
            "Pronunciation and Listening Skills",
            "Reading and Writing Practice",
            "Conversational French",
            "Verb Conjugations and Tenses",
            "Idioms and Common Phrases",
            "Cultural and Linguistic Nuances",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "French Grammar Basics",
            "Vocabulary and Expressions",
            "Pronunciation and Listening Skills",
            "Reading and Writing Practice",
            "Conversational French",
            "Verb Conjugations and Tenses",
            "Idioms and Common Phrases",
            "Cultural and Linguistic Nuances",
          ],
        },
        {
          id: "English-Spelling-and-Vocabulary-US",
          title: "English Spelling and Vocabulary (US)",
          subtitle:
            "Improving spelling, word usage, and vocabulary comprehension in American English",
          topics: [
            "Commonly Misspelled Words",
            "Word Formation and Derivation",
            "Homophones and Homonyms",
            "Prefixes, Suffixes, and Root Words",
            "Vocabulary Expansion Strategies",
            "Contextual Word Usage",
            "Spelling Rules and Patterns",
            "Reading Comprehension and Word Meaning",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Commonly Misspelled Words",
            "Word Formation and Derivation",
            "Homophones and Homonyms",
            "Prefixes, Suffixes, and Root Words",
            "Vocabulary Expansion Strategies",
            "Contextual Word Usage",
            "Spelling Rules and Patterns",
            "Reading Comprehension and Word Meaning",
          ],
        },
        {
          id: "English-to-Spanish-Translation-MX",
          title: "English to Spanish Translation (MX)",
          subtitle:
            "Translating American English text into Mexican Spanish with accuracy and clarity",
          topics: [
            "Basics of English to Spanish Translation",
            "Grammar and Sentence Structure Differences",
            "Vocabulary and Idiomatic Expressions",
            "Contextual Accuracy and Meaning",
            "Proofreading and Editing Translations",
            "Formal vs Informal Language Usage",
            "Common Mistakes in Translation",
            "Professional Translation Tools",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Basics of English to Spanish Translation",
            "Grammar and Sentence Structure Differences",
            "Vocabulary and Idiomatic Expressions",
            "Contextual Accuracy and Meaning",
            "Proofreading and Editing Translations",
            "Formal vs Informal Language Usage",
            "Common Mistakes in Translation",
            "Professional Translation Tools",
          ],
        },
        {
          id: "English-as-a-Second-Language-ESL",
          title: "English as a Second Language (ESL)",
          subtitle:
            "Learning fundamental English reading, writing, speaking, and listening skills",
          topics: [
            "English Grammar Basics",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Formation",
            "Reading Comprehension",
            "Writing Practice",
            "Listening and Speaking Skills",
            "Cultural Context and Usage",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "English Grammar Basics",
            "Common Vocabulary and Expressions",
            "Pronunciation and Accent Practice",
            "Sentence Formation",
            "Reading Comprehension",
            "Writing Practice",
            "Listening and Speaking Skills",
            "Cultural Context and Usage",
          ],
        },
        {
          id: "English-to-Spanish-Translation-ES",
          title: "English To Spanish Translation (ES)",
          subtitle:
            "Translating English text into European Spanish with accuracy and proper context",
          topics: [
            "English to Spanish Translation Principles",
            "Grammar and Syntax Differences",
            "Vocabulary and Idiomatic Expressions",
            "Contextual Meaning and Nuances",
            "Proofreading and Editing Translations",
            "Formal vs Informal Language Usage",
            "Common Translation Challenges",
            "Translation Tools and Techniques",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "English to Spanish Translation Principles",
            "Grammar and Syntax Differences",
            "Vocabulary and Idiomatic Expressions",
            "Contextual Meaning and Nuances",
            "Proofreading and Editing Translations",
            "Formal vs Informal Language Usage",
            "Common Translation Challenges",
            "Translation Tools and Techniques",
          ],
        },
        {
          id: "English-Language-B2-C1-C2",
          title: "English Language (B2, C1, C2)",
          subtitle:
            "Improving advanced English language skills for CEFR levels B2, C1, and C2",
          topics: [
            "Advanced Grammar and Syntax",
            "Complex Vocabulary and Idioms",
            "Reading Comprehension",
            "Writing Skills and Style",
            "Listening and Speaking Fluency",
            "Essay and Report Writing",
            "Advanced Conversation Practice",
            "Cultural and Contextual Understanding",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Advanced Grammar and Syntax",
            "Complex Vocabulary and Idioms",
            "Reading Comprehension",
            "Writing Skills and Style",
            "Listening and Speaking Fluency",
            "Essay and Report Writing",
            "Advanced Conversation Practice",
            "Cultural and Contextual Understanding",
          ],
        },
        {
          id: "English-Spelling-and-Vocabulary-UK",
          title: "English Spelling and Vocabulary (UK)",
          subtitle:
            "Enhancing British English spelling, word usage, and vocabulary comprehension",
          topics: [
            "Commonly Misspelled Words",
            "Vocabulary Building Techniques",
            "Prefixes, Suffixes, and Root Words",
            "Homophones and Homonyms",
            "Spelling Rules and Patterns",
            "Contextual Word Usage",
            "Reading Comprehension",
            "Writing Practice in UK English",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Commonly Misspelled Words",
            "Vocabulary Building Techniques",
            "Prefixes, Suffixes, and Root Words",
            "Homophones and Homonyms",
            "Spelling Rules and Patterns",
            "Contextual Word Usage",
            "Reading Comprehension",
            "Writing Practice in UK English",
          ],
        },
        {
          id: "English-Language-US",
          title: "English Language (US)",
          subtitle:
            "Learning fundamental English language skills focusing on American English",
          topics: [
            "Grammar Fundamentals",
            "Vocabulary and Idioms",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural and Contextual Awareness",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Grammar Fundamentals",
            "Vocabulary and Idioms",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural and Contextual Awareness",
          ],
        },
        {
          id: "English-Proofreading-US",
          title: "English Proofreading (US)",
          subtitle:
            "Developing skills to proofread American English documents for grammar, spelling, and clarity",
          topics: [
            "Grammar and Syntax Checking",
            "Punctuation Rules",
            "Spelling Accuracy",
            "Word Choice and Clarity",
            "Consistency in Style",
            "Sentence Structure Review",
            "Proofreading Techniques",
            "Common Errors in US English",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Grammar and Syntax Checking",
            "Punctuation Rules",
            "Spelling Accuracy",
            "Word Choice and Clarity",
            "Consistency in Style",
            "Sentence Structure Review",
            "Proofreading Techniques",
            "Common Errors in US English",
          ],
        },
        {
          id: "English-Proofreading-UK",
          title: "English Proofreading (UK)",
          subtitle:
            "Developing skills to proofread British English documents for grammar, spelling, and clarity",
          topics: [
            "Grammar and Syntax Checking",
            "Punctuation Rules",
            "Spelling Accuracy",
            "Word Choice and Clarity",
            "Consistency in Style",
            "Sentence Structure Review",
            "Proofreading Techniques",
            "Common Errors in UK English",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Grammar and Syntax Checking",
            "Punctuation Rules",
            "Spelling Accuracy",
            "Word Choice and Clarity",
            "Consistency in Style",
            "Sentence Structure Review",
            "Proofreading Techniques",
            "Common Errors in UK English",
          ],
        },
        {
          id: "Dutch-Language",
          title: "Dutch Language",
          subtitle:
            "Learning the basics of Dutch grammar, vocabulary, and conversational skills",
          topics: [
            "Dutch Alphabet and Pronunciation",
            "Grammar Fundamentals",
            "Common Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Listening Comprehension",
            "Writing Practice",
            "Conversational Dutch",
            "Cultural Insights",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Dutch Alphabet and Pronunciation",
            "Grammar Fundamentals",
            "Common Vocabulary and Phrases",
            "Sentence Construction",
            "Reading and Listening Comprehension",
            "Writing Practice",
            "Conversational Dutch",
            "Cultural Insights",
          ],
        },
        {
          id: "English-Language-A1-A2-B1",
          title: "English Language (A1, A2, B1)",
          subtitle:
            "Learning beginner and lower-intermediate English skills for CEFR levels A1, A2, and B1",
          topics: [
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural Awareness in English",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural Awareness in English",
          ],
        },
        {
          id: "Canadian-French-Language-CEFR-B2-C1-C2",
          title: "Canadian French Language - CEFR (B2, C1, C2)",
          subtitle:
            "Developing advanced Canadian French skills for reading, writing, and conversation (CEFR B2-C2)",
          topics: [
            "Advanced Grammar and Syntax",
            "Complex Vocabulary and Idioms",
            "Reading Comprehension",
            "Writing Skills and Style",
            "Listening and Speaking Fluency",
            "Conversational Practice",
            "Cultural and Contextual Understanding",
            "Proofreading and Editing",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Advanced Grammar and Syntax",
            "Complex Vocabulary and Idioms",
            "Reading Comprehension",
            "Writing Skills and Style",
            "Listening and Speaking Fluency",
            "Conversational Practice",
            "Cultural and Contextual Understanding",
            "Proofreading and Editing",
          ],
        },
        {
          id: "Canadian-French-Language-CEFR-A1-A2-B1",
          title: "Canadian French Language - CEFR (A1, A2, B1)",
          subtitle:
            "Learning beginner and lower-intermediate Canadian French skills for reading, writing, and conversation (CEFR A1-B1)",
          topics: [
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural Awareness in French",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Basic Grammar Rules",
            "Common Vocabulary and Phrases",
            "Pronunciation and Accent Practice",
            "Sentence Construction",
            "Reading Comprehension",
            "Writing Skills",
            "Listening and Speaking Practice",
            "Cultural Awareness in French",
          ],
        },
      ],
    },
    CallCenter: {
      title: "Call Center",
      description:
        "Provide excellent customer service. Test Customer Service abilities and even run Call Center Simulations to find excellent call center employees.",
      subjects: [
        {
          id: "Outbound-Call-Center-Simulation",
          title: "Outbound Call Center Simulation",
          subtitle:
            "Training for making outbound calls effectively, handling client inquiries, and achieving call center targets",
          topics: [
            "Outbound Call Techniques",
            "Effective Communication Skills",
            "Handling Customer Objections",
            "Sales and Upselling Strategies",
            "Active Listening",
            "Call Documentation and CRM Use",
            "Time Management",
            "Performance Metrics and KPIs",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Outbound Call Techniques",
            "Effective Communication Skills",
            "Handling Customer Objections",
            "Sales and Upselling Strategies",
            "Active Listening",
            "Call Documentation and CRM Use",
            "Time Management",
            "Performance Metrics and KPIs",
          ],
        },
        {
          id: "Customer-Service-Financial",
          title: "Customer Service - Financial",
          subtitle:
            "Providing customer support in financial services, handling inquiries, and resolving issues efficiently",
          topics: [
            "Financial Product Knowledge",
            "Customer Query Handling",
            "Problem Solving in Financial Contexts",
            "Compliance and Regulations",
            "Communication Skills",
            "Conflict Resolution",
            "Documenting Customer Interactions",
            "Service Excellence Metrics",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Financial Product Knowledge",
            "Customer Query Handling",
            "Problem Solving in Financial Contexts",
            "Compliance and Regulations",
            "Communication Skills",
            "Conflict Resolution",
            "Documenting Customer Interactions",
            "Service Excellence Metrics",
          ],
        },
        {
          id: "Inbound-Call-Center-Simulation",
          title: "Inbound Call Center Simulation",
          subtitle:
            "Training for receiving inbound calls, resolving issues, and providing excellent customer support",
          topics: [
            "Inbound Call Handling Techniques",
            "Active Listening Skills",
            "Problem Solving and Troubleshooting",
            "CRM and Call Documentation",
            "Communication and Tone",
            "Managing Difficult Customers",
            "Service Level Agreements (SLAs)",
            "Performance Metrics",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Inbound Call Handling Techniques",
            "Active Listening Skills",
            "Problem Solving and Troubleshooting",
            "CRM and Call Documentation",
            "Communication and Tone",
            "Managing Difficult Customers",
            "Service Level Agreements (SLAs)",
            "Performance Metrics",
          ],
        },
        {
          id: "Customer-Service",
          title: "Customer Service",
          subtitle:
            "Fundamentals of providing excellent customer service across industries, focusing on communication and problem resolution",
          topics: [
            "Communication Skills",
            "Active Listening",
            "Problem Solving",
            "Conflict Resolution",
            "Customer Relationship Management",
            "Service Standards and Best Practices",
            "Handling Complaints",
            "Customer Satisfaction Metrics",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Communication Skills",
            "Active Listening",
            "Problem Solving",
            "Conflict Resolution",
            "Customer Relationship Management",
            "Service Standards and Best Practices",
            "Handling Complaints",
            "Customer Satisfaction Metrics",
          ],
        },
        {
          id: "Customer-Service-ES",
          title: "Customer Service (ES)",
          subtitle:
            "Providing customer support in Spanish, focusing on communication, issue resolution, and service excellence",
          topics: [
            "Spanish Communication Skills",
            "Active Listening in Spanish",
            "Problem Solving and Troubleshooting",
            "Customer Relationship Management in Spanish",
            "Conflict Resolution",
            "Handling Complaints",
            "Service Standards",
            "Customer Satisfaction Metrics",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Spanish Communication Skills",
            "Active Listening in Spanish",
            "Problem Solving and Troubleshooting",
            "Customer Relationship Management in Spanish",
            "Conflict Resolution",
            "Handling Complaints",
            "Service Standards",
            "Customer Satisfaction Metrics",
          ],
        },
      ],
    },
    MicrosoftSoftware: {
      title: "Microsoft Office® Software",
      description:
        "MS Office is essential for virtually any role. Test proficiencies in Excel, Outlook, Word, and more to make sure your candidates are comfortable using the software.",
      subjects: [
        {
          id: "MS-Office-Word",
          title: "MS Office - Word®",
          subtitle:
            "Learn to create, format, and manage documents efficiently using Microsoft Word",
          topics: [
            "Document Creation and Formatting",
            "Text Editing Tools",
            "Page Layout and Styles",
            "Tables and Graphics",
            "Headers, Footers, and Page Numbers",
            "Mail Merge",
            "Reviewing and Collaboration Tools",
            "Printing and Document Sharing",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Document Creation and Formatting",
            "Text Editing Tools",
            "Page Layout and Styles",
            "Tables and Graphics",
            "Headers, Footers, and Page Numbers",
            "Mail Merge",
            "Reviewing and Collaboration Tools",
            "Printing and Document Sharing",
          ],
        },
        {
          id: "MS-Project",
          title: "MS Project®",
          subtitle:
            "Learn project management using MS Project, including scheduling, tracking, and reporting",
          topics: [
            "Project Planning and Scheduling",
            "Task Creation and Assignment",
            "Gantt Charts and Timelines",
            "Resource Management",
            "Tracking Progress",
            "Reporting and Dashboards",
            "Budgeting and Cost Tracking",
            "Project Closeout",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Project Planning and Scheduling",
            "Task Creation and Assignment",
            "Gantt Charts and Timelines",
            "Resource Management",
            "Tracking Progress",
            "Reporting and Dashboards",
            "Budgeting and Cost Tracking",
            "Project Closeout",
          ],
        },
        {
          id: "MS-Office-Visio",
          title: "MS Office - Visio®",
          subtitle:
            "Learn to create diagrams, flowcharts, and visual representations using Microsoft Visio",
          topics: [
            "Diagram and Flowchart Creation",
            "Shapes, Connectors, and Templates",
            "Organizational Charts",
            "Process Mapping",
            "Custom Stencils and Shapes",
            "Data Linking and Visualization",
            "Collaboration and Sharing",
            "Printing and Exporting Diagrams",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Diagram and Flowchart Creation",
            "Shapes, Connectors, and Templates",
            "Organizational Charts",
            "Process Mapping",
            "Custom Stencils and Shapes",
            "Data Linking and Visualization",
            "Collaboration and Sharing",
            "Printing and Exporting Diagrams",
          ],
        },
        {
          id: "MS-Office-Project-Professional",
          title: "MS Office Project Professional",
          subtitle:
            "Advanced project management with MS Project Professional for scheduling, resources, and reporting",
          topics: [
            "Advanced Project Planning",
            "Resource and Task Management",
            "Critical Path Analysis",
            "Timeline and Milestones",
            "Budgeting and Cost Tracking",
            "Risk Management",
            "Reporting and Dashboards",
            "Collaboration Features",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Advanced Project Planning",
            "Resource and Task Management",
            "Critical Path Analysis",
            "Timeline and Milestones",
            "Budgeting and Cost Tracking",
            "Risk Management",
            "Reporting and Dashboards",
            "Collaboration Features",
          ],
        },
        {
          id: "MS-Office-365-Administration",
          title: "MS Office 365® Administration",
          subtitle:
            "Learn to manage and administer Microsoft 365 environments including users, security, and services",
          topics: [
            "User Account Management",
            "Security and Compliance",
            "Group and Permission Management",
            "Exchange Online Administration",
            "SharePoint and Teams Management",
            "Data Protection and Backup",
            "Monitoring and Reporting",
            "Troubleshooting and Support",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "User Account Management",
            "Security and Compliance",
            "Group and Permission Management",
            "Exchange Online Administration",
            "SharePoint and Teams Management",
            "Data Protection and Backup",
            "Monitoring and Reporting",
            "Troubleshooting and Support",
          ],
        },
        {
          id: "MS-Office-365",
          title: "MS Office 365®",
          subtitle:
            "Learn Microsoft 365 productivity apps including Word, Excel, PowerPoint, Outlook, and Teams",
          topics: [
            "Using Word, Excel, and PowerPoint",
            "Email Management with Outlook",
            "Teams Collaboration Tools",
            "OneDrive and SharePoint Basics",
            "Document Sharing and Collaboration",
            "Cloud Storage and Syncing",
            "Security and Access Control",
            "Basic Troubleshooting",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Using Word, Excel, and PowerPoint",
            "Email Management with Outlook",
            "Teams Collaboration Tools",
            "OneDrive and SharePoint Basics",
            "Document Sharing and Collaboration",
            "Cloud Storage and Syncing",
            "Security and Access Control",
            "Basic Troubleshooting",
          ],
        },
        {
          id: "MS-Office-Word-Simulation",
          title: "MS Office - Word® Simulation",
          subtitle:
            "Practical hands-on simulation for creating and editing documents in Microsoft Word",
          topics: [
            "Document Creation Simulation",
            "Text Formatting and Styles",
            "Tables and Graphics Practice",
            "Headers, Footers, and Page Layout",
            "Mail Merge Exercises",
            "Review and Collaboration Simulation",
            "Proofreading Practice",
            "Printing and Sharing Documents",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Document Creation Simulation",
            "Text Formatting and Styles",
            "Tables and Graphics Practice",
            "Headers, Footers, and Page Layout",
            "Mail Merge Exercises",
            "Review and Collaboration Simulation",
            "Proofreading Practice",
            "Printing and Sharing Documents",
          ],
        },
        {
          id: "Simulation",
          title: "Simulation",
          subtitle:
            "Hands-on simulation exercises to practice software applications and real-world tasks",
          topics: [
            "Application Simulation Basics",
            "Task Execution Practice",
            "Scenario-based Learning",
            "Problem Solving Exercises",
            "Step-by-Step Guidance",
            "Performance Assessment",
            "Error Correction Techniques",
            "Time Management in Simulations",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Application Simulation Basics",
            "Task Execution Practice",
            "Scenario-based Learning",
            "Problem Solving Exercises",
            "Step-by-Step Guidance",
            "Performance Assessment",
            "Error Correction Techniques",
            "Time Management in Simulations",
          ],
        },
        {
          id: "MS-Office-PowerPoint",
          title: "MS Office - PowerPoint®",
          subtitle:
            "Learn to create professional presentations using Microsoft PowerPoint",
          topics: [
            "Slide Creation and Layouts",
            "Text Formatting and Styles",
            "Images, Charts, and Graphics",
            "Animations and Transitions",
            "Templates and Themes",
            "Collaboration Tools",
            "Presentation Delivery Tips",
            "Printing and Exporting Slides",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Slide Creation and Layouts",
            "Text Formatting and Styles",
            "Images, Charts, and Graphics",
            "Animations and Transitions",
            "Templates and Themes",
            "Collaboration Tools",
            "Presentation Delivery Tips",
            "Printing and Exporting Slides",
          ],
        },
        {
          id: "MS-Office-Outlook",
          title: "MS Office - Outlook®",
          subtitle:
            "Learn to manage emails, calendar, contacts, and tasks using Microsoft Outlook",
          topics: [
            "Email Management",
            "Calendar and Scheduling",
            "Contacts and Address Book",
            "Tasks and To-Do Lists",
            "Rules and Alerts",
            "Email Security",
            "Search and Organization Tools",
            "Collaboration and Sharing",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Email Management",
            "Calendar and Scheduling",
            "Contacts and Address Book",
            "Tasks and To-Do Lists",
            "Rules and Alerts",
            "Email Security",
            "Search and Organization Tools",
            "Collaboration and Sharing",
          ],
        },
        {
          id: "MS-Office-Outlook-Simulation",
          title: "MS Office - Outlook® Simulation",
          subtitle:
            "Practical simulation exercises for managing emails, calendar, and tasks in Outlook",
          topics: [
            "Email Composition and Replies",
            "Scheduling Meetings Simulation",
            "Contact Management Practice",
            "Task Creation and Tracking",
            "Rules and Alerts Exercises",
            "Collaboration with Teams",
            "Calendar Sharing Practice",
            "Email Organization Simulation",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Email Composition and Replies",
            "Scheduling Meetings Simulation",
            "Contact Management Practice",
            "Task Creation and Tracking",
            "Rules and Alerts Exercises",
            "Collaboration with Teams",
            "Calendar Sharing Practice",
            "Email Organization Simulation",
          ],
        },
        {
          id: "MS-Office-Excel-Simulation",
          title: "MS Office - Excel® Simulation",
          subtitle:
            "Hands-on simulation to practice Excel functions, formulas, and data management",
          topics: [
            "Workbook and Worksheet Management",
            "Data Entry and Formatting",
            "Formulas and Functions Practice",
            "Charts and Graphs Exercises",
            "Sorting and Filtering Data",
            "Pivot Table Practice",
            "Conditional Formatting",
            "Printing and Sharing Workbooks",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Workbook and Worksheet Management",
            "Data Entry and Formatting",
            "Formulas and Functions Practice",
            "Charts and Graphs Exercises",
            "Sorting and Filtering Data",
            "Pivot Table Practice",
            "Conditional Formatting",
            "Printing and Sharing Workbooks",
          ],
        },
        {
          id: "MS-Office-Excel-Functions",
          title: "MS Office - Excel® Functions",
          subtitle:
            "Learn to use Excel formulas and functions for calculations, analysis, and data management",
          topics: [
            "Basic and Advanced Formulas",
            "Mathematical Functions",
            "Text and Logical Functions",
            "Date and Time Functions",
            "Lookup and Reference Functions",
            "Statistical and Financial Functions",
            "Error Handling in Formulas",
            "Practical Data Analysis Examples",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Basic and Advanced Formulas",
            "Mathematical Functions",
            "Text and Logical Functions",
            "Date and Time Functions",
            "Lookup and Reference Functions",
            "Statistical and Financial Functions",
            "Error Handling in Formulas",
            "Practical Data Analysis Examples",
          ],
        },
        {
          id: "MS-Office-Excel",
          title: "MS Office - Excel®",
          subtitle:
            "Learn Microsoft Excel for creating spreadsheets, analyzing data, and managing information",
          topics: [
            "Workbook and Worksheet Basics",
            "Data Entry and Formatting",
            "Formulas and Basic Functions",
            "Charts and Graphs",
            "Sorting and Filtering",
            "Pivot Tables",
            "Conditional Formatting",
            "Printing and Sharing Workbooks",
          ],
          duration: "30 Minutes",
          questions: 40,
          difficulty: "Beginner",
          language: "English",
          allTopics: [
            "Workbook and Worksheet Basics",
            "Data Entry and Formatting",
            "Formulas and Basic Functions",
            "Charts and Graphs",
            "Sorting and Filtering",
            "Pivot Tables",
            "Conditional Formatting",
            "Printing and Sharing Workbooks",
          ],
        },
      ],
    },
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
    setExpandedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const toggleCard = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
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
        <div
          className={`al-overlay ${sidebarOpen ? "show" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        <header className="al-header">
          <div className="al-header-content">
            <div className="al-header-top">
              <h1 className="al-title">Assessment Library</h1>
              <button
                className="al-menu-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
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
            <aside className={`al-sidebar ${sidebarOpen ? "open" : ""}`}>
              <div className="al-sidebar-sticky">
                {Object.entries(categories).map(([key, category]) => (
                  <div key={key} className="al-sidebar-section">
                    <button
                      className="al-sidebar-header"
                      onClick={() => toggleCategory(key)}
                    >
                      <span>{category.title}</span>
                      {expandedCategories.includes(key) ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </button>
                    {expandedCategories.includes(key) && (
                      <div className="al-sidebar-items">
                        {category.subjects.map((subject) => (
                          <button
                            key={subject.id}
                            onClick={() => selectCategory(key)}
                            className={`al-sidebar-item ${
                              selectedCategory === key
                                ? "al-sidebar-item-active"
                                : ""
                            }`}
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
                <p className="al-category-desc">
                  {currentCategory.description}
                </p>
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

                      <button
                        className="al-details-btn"
                        onClick={() => toggleCard(subject.id)}
                      >
                        {expandedCards.includes(subject.id)
                          ? "Hide Details"
                          : "Show Details"}
                        <ChevronDown
                          size={16}
                          style={{
                            transform: expandedCards.includes(subject.id)
                              ? "rotate(180deg)"
                              : "rotate(0)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </button>

                      {expandedCards.includes(subject.id) && (
                        <div className="al-details-section">
                          <div className="al-stats-grid">
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <Clock size={14} />
                                DURATION
                              </div>
                              <div className="al-stat-value">
                                {subject.duration}
                              </div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <FileText size={14} />
                                QUESTIONS
                              </div>
                              <div className="al-stat-value">
                                {subject.questions}
                              </div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <BarChart size={14} />
                                DIFFICULTY
                              </div>
                              <div className="al-stat-value">
                                {subject.difficulty}
                              </div>
                            </div>
                            <div className="al-stat-item">
                              <div className="al-stat-label">
                                <Globe size={14} />
                                LANGUAGE
                              </div>
                              <div className="al-stat-value">
                                {subject.language}
                              </div>
                            </div>
                          </div>

                          <div className="al-all-topics">
                            <h4 className="al-all-topics-title">
                              All Topics Covered:
                            </h4>
                            <div className="al-all-topics-grid">
                              {subject.allTopics.map((topic, idx) => (
                                <div key={idx} className="al-topic-badge">
                                  {topic}
                                </div>
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
