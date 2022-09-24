import { useState } from "react";
import Nav from "./components/Nav";
import MyChecklists from "./components/MyChecklists";
import Bookmarks from "./components/Bookmarks";
import Article from "./components/Article";
import Home from "./components/Home";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [myChecklists, setMyChecklists] = useState(data1);
  const [bookmarks, setBookmarks] = useState(data2);

  useEffect(() => {
    localStorage.setItem("mychecklists", myChecklists);
  }, [myChecklists]);

  useEffect(() => {
    localStorage.setItem("bookmarks", bookmarks);
  }, [bookmarks]);

  return (
    <div id="app">
      <Router>
        <Nav></Nav>
        <div id="main">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/my-checklists"
              element={
                <MyChecklists
                  myChecklists={myChecklists}
                  bookmarks={bookmarks}
                  setMyChecklists={setMyChecklists}
                  setBookmarks={setBookmarks}
                ></MyChecklists>
              }
            ></Route>
            <Route
              path="/bookmarks"
              element={
                <Bookmarks
                  myChecklists={myChecklists}
                  bookmarks={bookmarks}
                  setMyChecklists={setMyChecklists}
                  setBookmarks={setBookmarks}
                ></Bookmarks>
              }
            ></Route>
            <Route
              path="/learn/:link"
              element={
                <Article
                  myChecklists={myChecklists}
                  bookmarks={bookmarks}
                  setMyChecklists={setMyChecklists}
                  setBookmarks={setBookmarks}
                ></Article>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const data1 = [
  {
    id: "IY7IUG9",
    name: "Basic Disaster Supplies Kit",
    list: [
      {
        name: "Water (one gallon per person per day for several days, for drinking and sanitation)",
        checked: false,
      },
      {
        name: "Food (at least a several-day supply of non-perishable food)",
        checked: false,
      },
      {
        name: "Battery-powered or hand crank radio and a NOAA Weather Radio with tone alert",
        checked: false,
      },
      {
        name: "Flashlight",
        checked: false,
      },
      {
        name: "First aid kit",
        checked: false,
      },
      {
        name: "Extra batteries",
        checked: false,
      },
      {
        name: "Whistle (to signal for help)",
        checked: false,
      },
      {
        name: "Dust mask (to help filter contaminated air)",
        checked: false,
      },
      {
        name: "Plastic sheeting and duct tape (to shelter in place)",
        checked: false,
      },
      {
        name: "Moist towelettes, garbage bags and plastic ties (for personal sanitation)",
        checked: false,
      },
      {
        name: "Wrench or pliers (to turn off utilities)",
        checked: false,
      },
      {
        name: "Manual can opener (for food)",
        checked: false,
      },
      {
        name: "Local maps",
        checked: false,
      },
      {
        name: "Cell phone with chargers and a backup battery",
        checked: false,
      },
    ],
  },
];

const data2 = [
  {
    id: "745490",
    name: "Baby Todd",
    list: [
      {
        name: "diaper bag",
        checked: false,
      },
      {
        name: "Ready-to-feed infant formula",
        checked: false,
      },
      {
        name: "Disposable cups",
        checked: false,
      },
      {
        name: "1-2 boxes of nursing pads",
        checked: false,
      },
      {
        name: "Burp rags or smaller blanket",
        checked: false,
      },
      {
        name: "Pacifiers (at least two)",
        checked: false,
      },
      {
        name: "Teething tablets or gel",
        checked: false,
      },
      {
        name: "Infant pain reliever with Acetaminophen",
        checked: false,
      },
      {
        name: "Bulb syringe",
        checked: false,
      },
      {
        name: "Toddler snacks",
        checked: false,
      },
      {
        name: "Extra clothes",
        checked: false,
      },
      {
        name: "Extra emergency blankets (at least two)",
        checked: false,
      },
      {
        name: "Receiving blankets (at least two)",
        checked: false,
      },
      {
        name: "Thermos",
        checked: false,
      },
      {
        name: "Small camp stove for boiling water for sanitizing",
        checked: false,
      },
    ],
  },
  {
    id: "274654",
    name: "Grampa Clyde",
    list: [
      {
        name: "Jacket or coat",
        checked: false,
      },
      {
        name: "Long pants and long-sleeve shirt",
        checked: false,
      },
      {
        name: "Sturdy shoes",
        checked: false,
      },
      {
        name: "Hat, mittens and scarf",
        checked: false,
      },
      {
        name: "Sleeping bag or warm blanket",
        checked: false,
      },
      {
        name: "Walking stick",
        checked: false,
      },
      {
        name: "Visual aid",
        checked: false,
      },
      {
        name: "Wet wipes",
        checked: false,
      },
      {
        name: "Catheter",
        checked: false,
      },
      {
        name: "Hearing aid",
        checked: false,
      },
      {
        name: "Medical Documents",
        checked: false,
      },
      {
        name: "Prescription Medication",
        checked: false,
      },
    ],
  },
  {
    id: "168953",
    name: "Sprinkles",
    list: [
      {
        name: "Bottled water",
        checked: false,
      },
      {
        name: "One to two weeks worth of pet food",
        checked: false,
      },
      {
        name: "Collapsible food and water bowls",
        checked: false,
      },
      {
        name: "Blankets",
        checked: false,
      },
      {
        name: "Cat litter and pan",
        checked: false,
      },
      {
        name: "Leash, collar and harness",
        checked: false,
      },
      {
        name: "Pet life jacket and paw protectors",
        checked: false,
      },
      {
        name: "Flashlight with extra batteries",
        checked: false,
      },
      {
        name: "Basic pet first-aid kit",
        checked: false,
      },
      {
        name: "Vaccination records and medical history",
        checked: false,
      },
      {
        name: "Veterinarianâ€™s contact information",
        checked: false,
      },
      {
        name: "List of medications",
        checked: false,
      },
      {
        name: "Emergency contacts",
        checked: false,
      },
      {
        name: "Photos of your pet in case of separation",
        checked: false,
      },
    ],
  },
  {
    id: "IY7IUG9",
    name: "Basic Disaster Supplies Kit",
    list: [
      {
        name: "Water (one gallon per person per day for several days, for drinking and sanitation)",
        checked: false,
      },
      {
        name: "Food (at least a several-day supply of non-perishable food)",
        checked: false,
      },
      {
        name: "Battery-powered or hand crank radio and a NOAA Weather Radio with tone alert",
        checked: false,
      },
      {
        name: "Flashlight",
        checked: false,
      },
      {
        name: "First aid kit",
        checked: false,
      },
      {
        name: "Extra batteries",
        checked: false,
      },
      {
        name: "Whistle (to signal for help)",
        checked: false,
      },
      {
        name: "Dust mask (to help filter contaminated air)",
        checked: false,
      },
      {
        name: "Plastic sheeting and duct tape (to shelter in place)",
        checked: false,
      },
      {
        name: "Moist towelettes, garbage bags and plastic ties (for personal sanitation)",
        checked: false,
      },
      {
        name: "Wrench or pliers (to turn off utilities)",
        checked: false,
      },
      {
        name: "Manual can opener (for food)",
        checked: false,
      },
      {
        name: "Local maps",
        checked: false,
      },
      {
        name: "Cell phone with chargers and a backup battery",
        checked: false,
      },
    ],
  },
];

export default App;
