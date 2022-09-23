import React from "react";
import Checklist from "./Checklist";

const MyChecklists = ({
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
  const source = "mychecklists";
  return (
    <div>
      {console.log(myChecklists)}
      {myChecklists.map((checklist) => (
        <Checklist
          data={checklist}
          setData={setMyChecklists}
          key={checklist.name}
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
