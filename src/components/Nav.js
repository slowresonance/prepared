import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav">
      <div id="title">Prepared by Blue Marble</div>
      <input
        id="search"
        type="text"
        placeholder="Search"
        spellCheck="false"
        autoComplete="chrome-off"
      />
      <div id="checklists" className="primary-category">
        Checklists
      </div>
      <div className="category-list">
        <div id="my-checklists" className="secondary-category">
          <Link to="/my-checklists">My Checklists</Link>
        </div>
        <div id="bookmarks" className="secondary-category">
          <Link to="/bookmarks">Bookmarks</Link>
        </div>
      </div>
      <div id="Disasters" className="primary-category">
        Disasters
      </div>
      <div className="category-list">
        <div id="learn" className="secondary-category">
          Learn about disasters
        </div>
        <div id="ongoing" className="secondary-category">
          Ongoing disasters forecast
        </div>
      </div>
    </nav>
  );
};

export default Nav;
