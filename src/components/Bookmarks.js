import React from "react";
import Checklist from "./Checklist";

const Bookmarks = ({
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
  const source = "bookmarks";
  return (
    <div id="saved-checklists">
      <div>
        {bookmarks.map((checklist) => (
          <Checklist
            data={checklist}
            setData={setBookmarks}
            key={checklist.name}
            source={source}
            myChecklists={myChecklists}
            bookmarks={bookmarks}
            setMyChecklists={setMyChecklists}
            setBookmarks={setBookmarks}
          ></Checklist>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
