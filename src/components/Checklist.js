import React from "react";
import { useState } from "react";
import Bookmarks from "./Bookmarks";
import CheckListItem from "./CheckListItem";
import ChecklistInput from "./ChecklistInput";

const Checklist = ({
  data,
  setData,
  source,
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
  const [checklist, setChecklist] = useState(data);

  const handleDelete = () => {
    setMyChecklists(
      myChecklists.filter((checklist) => checklist.id !== data.id)
    );
  };

  const handleRemove = () => {
    setBookmarks(bookmarks.filter((checklist) => checklist.id !== data.id));
  };

  const handleSave = () => {
    console.log("save");
  };

  const handleMove = () => {
    setBookmarks([...bookmarks, checklist]);
  };

  const handleAddToChecklists = () => {
    setMyChecklists([...myChecklists, checklist]);
  };

  const handleFavourite = () => {
    setBookmarks([...bookmarks, checklist]);
  };

  return (
    <div className={`checklist ${source}`}>
      <div className="header">
        <div className="name">{checklist.name}</div>
      </div>
      <div className="list">
        {checklist.list.map((item) => (
          <CheckListItem
            name={item.name}
            checked={item.checked}
            key={item.name}
          ></CheckListItem>
        ))}
        {source === "mychecklists" && (
          <ChecklistInput data={data} setData={setData}></ChecklistInput>
        )}
      </div>
      <div className="footer">
        {source === "mychecklists" && (
          <>
            <div className="left">
              <div className="delete action" onClick={handleDelete}>
                Delete
              </div>
              <div className="move action" onClick={handleMove}>
                Move to Bookmarks
              </div>
            </div>
            <div className="right">
              <div className="save action" onClick={handleSave}>
                Save as pdf
              </div>
            </div>
          </>
        )}
        {source === "bookmarks" && (
          <>
            <div className="left">
              <div className="remove action" onClick={handleRemove}>
                Remove
              </div>
              <div className="save action" onClick={handleSave}>
                Save as pdf
              </div>
            </div>
            <div className="right">
              <div className="print action" onClick={handleAddToChecklists}>
                Add to My Checklists
              </div>
            </div>
          </>
        )}
        {source === "external" && (
          <>
            <div className="left">
              <div className="save action" onClick={handleSave}>
                Save as pdf
              </div>
              <div className="favourite action" onClick={handleFavourite}>
                Bookmark
              </div>
            </div>
            <div className="right">
              <div
                className="your-checklists action"
                onClick={handleAddToChecklists}
              >
                Add to Your Checklists
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checklist;
