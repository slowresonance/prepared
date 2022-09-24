import React from "react";
import { Link } from "react-router-dom";
import Notif from "./Notif";
import Status from "./Status";

const Nav = () => {
  return (
    <nav id="nav">
      <div id="top">
        <div id="title">
          <a href="/" className="blue-marble">
            Prepared by Blue Marble
          </a>
        </div>
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
          <div id="nested">
            <div className="teritiary-category">
              <Link to="/learn/tornado">Tornado</Link>
            </div>
            <div className="teritiary-category">
              <Link to="/learn/earthquake">Earthquake</Link>
            </div>
            <div className="teritiary-category">
              <Link to="/learn/tsunami">Tsunami</Link>
            </div>
            <div className="teritiary-category">
              <Link to="/learn/hurricane">Hurricane</Link>
            </div>
          </div>
          <div id="ongoing" className="secondary-category">
            Ongoing disasters forecast
          </div>
        </div>
      </div>
      <div id="bottom">
        <Notif></Notif>
        <Status></Status>
      </div>
    </nav>
  );
};

export default Nav;
