import React, { useState } from "react";
// import './Dashboard1-clean.css';
import { FaRegBuilding, FaRocket, FaMoneyCheckAlt, FaFlagCheckered } from 'react-icons/fa';

function DashBoard1() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      title: "Laying the foundation",
      btnClass: "purple",
      icon: <FaRegBuilding className="milestone-svg" size={48} />,
    },
    {
      title: "Starting the Export journey",
      btnClass: "green",
      icon: <FaRocket className="milestone-svg" size={48} />,
    },
    {
      title: "Financing & Logistics",
      btnClass: "blue",
      icon: <FaMoneyCheckAlt className="milestone-svg" size={48} />,
    },
    {
      title: "Completing the export cycle",
      btnClass: "orange",
      icon: <FaFlagCheckered className="milestone-svg" size={48} />,
    },
  ];

  return (
    <section className="export-path">
      {/* Milestones */}
      <div className="milestones">
        {milestones.map((milestone, idx) => (
          <div
            key={milestone.title}
            className={`milestone${activeMilestone === idx ? " active" : ""}`}
            onClick={() => setActiveMilestone(idx)}
            tabIndex={0}
            onKeyPress={e => { if (e.key === "Enter") setActiveMilestone(idx); }}
          >
            <div
              className={`milestone-icon ${milestone.btnClass} ${
                activeMilestone === idx ? "selected" : ""
              }`}
            >
              {milestone.icon}
            </div>
            <div className={`milestone-title ${milestone.btnClass}`}>
              {milestone.title}
            </div>
            <button className={`milestone-btn ${milestone.btnClass}`}>
              Milestone {idx + 1}
            </button>
          </div>
        ))}
      </div>
      <div className="milestone-details">
        <h2>Milestone {activeMilestone + 1}</h2>
        <div className="modules">
          <div className="module">Module 1 : Basic introduction</div>
          <div className="module">Module 2 : Deep Knowladge</div>
          <div className="module">Module 3 : PDF & reference</div>
          <div className="module">Module 4 : Let's try</div>
        </div>
      </div>
    </section>
  );
}

export default DashBoard1;