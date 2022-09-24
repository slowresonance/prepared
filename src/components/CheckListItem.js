import React from "react";
import { useState } from "react";

const CheckListItem = ({ name, checked, removeItem, source }) => {
  const [check, setCheck] = useState(checked);
  return (
    <div className="item">
      <div
        className="checkbox"
        onClick={() => {
          source === "mychecklists" && setCheck(!check);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {check ? (
            <polyline points="20 6 9 17 4 12"></polyline>
          ) : (
            <circle cx="12" cy="12" r="7.5" />
          )}
        </svg>
      </div>
      <div className="name">{name}</div>
      {source === "mychecklists" && (
        <>
          <div className="close" onClick={() => removeItem(name)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="9.5" fill="white" />
              <path d="M4 10H16.5" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckListItem;
