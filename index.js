import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // Import styles

const RESUME_TEMPLATES = {
  classic: {
    name: "Classic",
    primaryColor: "#2c3e50",
    secondaryColor: "#34495e"
  },
  modern: {
    name: "Modern",
    primaryColor: "#3498db",
    secondaryColor: "#2980b9"
  },
  creative: {
    name: "Creative",
    primaryColor: "#e74c3c",
    secondaryColor: "#c0392b"
  }
};

function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: ""
  });

  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  return (
    <div className="resume-builder-container">
      <h1>Resume Builder</h1>

      <div className="template-selector">
        {Object.keys(RESUME_TEMPLATES).map(template => (
          <button 
            key={template}
            onClick={() => setSelectedTemplate(template)}
            className={selectedTemplate === template ? 'active' : ''}
          >
            {RESUME_TEMPLATES[template].name}
          </button>
        ))}
      </div>

      <section>
        <h2>Personal Information</h2>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={personalInfo.name}
          onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={personalInfo.email}
          onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
        />
      </section>

      <div className="resume-preview" style={{ backgroundColor: RESUME_TEMPLATES[selectedTemplate].primaryColor }}>
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.email} | {personalInfo.phone}</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<ResumeBuilder />);
