import React from "react";
import Checklist from "./Checklist";

const MyChecklists = ({
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
  const randID = (length) => {
    return [...Array(length)]
      .map((_) => ((Math.random() * 36) | 0).toString(36))
      .join(``)
      .toUpperCase();
  };
  const source = "mychecklists";
  const handleAddNew = () => {
    setMyChecklists([
      { id: randID(6), name: "Add a title", list: [] },
      ...myChecklists,
    ]);
  };
  return (
    <div>
      <div className="intro">
        <div className="title">My Checklists</div>
        <div className="desc">
          <p>
            View emergency checklists tailored for you, your loved ones, and
            your situation.
          </p>
          <p>
            Include bookmarked checklists here, or create new ones to meet your
            exact requirements.
          </p>
        </div>
      </div>
      {
        <div id="create-checklist" onClick={handleAddNew}>
          + Create a new Checklist
        </div>
      }
      {myChecklists.map((checklist) => (
        <Checklist
          data={checklist}
          setData={setMyChecklists}
          key={checklist.id}
          source={source}
          myChecklists={myChecklists}
          bookmarks={bookmarks}
          setMyChecklists={setMyChecklists}
          setBookmarks={setBookmarks}
        ></Checklist>
      ))}
    </div>
  );
};

export default MyChecklists;
