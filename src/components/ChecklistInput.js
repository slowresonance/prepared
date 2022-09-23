import React from "react";

const ChecklistInput = ({ data, setData }) => {
  const handleInput = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value === "") return;
    let newData = data;
    newData.list = [...data.list, { name: e.target.value, checked: false }];
    setData([newData]);
    e.target.value = "";
  };
  return (
    <div className="add-item">
      <input
        type="text"
        onKeyDown={handleInput}
        placeholder="Add a new item"
        spellCheck="false"
        autoComplete="chrome-off"
      />
    </div>
  );
};

export default ChecklistInput;
