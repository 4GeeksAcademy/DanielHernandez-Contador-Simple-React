import React from "react";

const SecondsCounter = ({ seconds }) => {

  const secs = String(seconds % 60).padStart(2, "0");
  const minutes = String(Math.floor((seconds / 60) % 60)).padStart(2, "0");
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center p-3 rounded-4 shadow-lg">
        <span className="me-2">⏱️</span>
        <div className="d-flex align-items-center text-white">
          {hours}<span className="separator">:</span>{minutes}<span className="separator">:</span>{secs}
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;