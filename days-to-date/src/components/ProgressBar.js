import React from 'react';

const ProgressBar = ({ startDate, endDate }) => {

  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const now = new Date().getTime();
  const progress = ((now - start) / (end - start)) * 100;

  return (
    <div>
      <div style={{ backgroundColor: 'tomato' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: 'teal',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <b>{Math.round(progress * 100) / 100}% completed!</b>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: "-20px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "white",
        }}
      >
        <span style={{ marginLeft: "10px" }}>You started here</span>
        <span style={{ marginRight: "10px" }}>Here's your target</span>
      </div>
    </div>
  );
};

export default ProgressBar;