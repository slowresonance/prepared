import React from "react";
import Bookmarks from "./Bookmarks";
import CheckListItem from "./CheckListItem";

const Checklist = ({
  data,
  setData,
  source,
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
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
    setBookmarks([...bookmarks, data]);
  };

  const handleAddToChecklists = () => {
    setMyChecklists([...myChecklists, data]);
  };

  const handleFavourite = () => {
    setBookmarks([...bookmarks, data]);
  };

  const removeItem = (name) => {
    let updatedChecklist = data;
    updatedChecklist.list = data.list.filter(
      (checklist) => checklist.name !== name
    );

    setMyChecklists(
      myChecklists.map((checklist) => {
        if (checklist.id === data.id) {
          return updatedChecklist;
        } else {
          return checklist;
        }
      })
    );
  };

  const handleInput = (e, id) => {
    if (e.key !== "Enter") return;
    if (e.target.value === "") return;
    let updatedChecklist = data;

    updatedChecklist.list = [
      ...data.list,
      { name: e.target.value, checked: false },
    ];

    setMyChecklists(
      myChecklists.map((checklist) => {
        if (checklist.id === id) {
          return updatedChecklist;
        } else {
          return checklist;
        }
      })
    );
    e.target.value = "";
  };

  return (
    <div className={`checklist ${source}`}>
      <div className="header">
        <div className="name">{data.name}</div>
      </div>
      <div className="list">
        {data.list.map((item) => (
          <CheckListItem
            name={item.name}
            checked={item.checked}
            key={item.name}
            removeItem={removeItem}
            source={source}
          ></CheckListItem>
        ))}
        {source === "mychecklists" && (
          <div className="add-item">
            <input
              type="text"
              onKeyDown={(e) => {
                handleInput(e, data.id);
              }}
              placeholder="Add a new item"
              spellCheck="false"
              autoComplete="chrome-off"
            />
          </div>
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
                + Add to My Checklists
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
                + Add to Your Checklists
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checklist;
