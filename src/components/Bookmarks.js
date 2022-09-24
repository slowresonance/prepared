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
    <>
      <div className="intro">
        <div className="title">Bookmarks</div>
        <div className="desc">
          <p>
            Save your all different checklists here, whether it's for a
            particular situation, or a special need.
          </p>
          <p>You can include them in your main checklist as required.</p>
        </div>
      </div>
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
    </>
  );
};

export default Bookmarks;
