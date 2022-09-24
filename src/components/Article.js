import React from "react";
import Checklist from "./Checklist";
import { useParams } from "react-router-dom";

const Article = ({
  myChecklists,
  bookmarks,
  setMyChecklists,
  setBookmarks,
}) => {
  const { link } = useParams();

  const [article] = articles.filter((article) => article.link === link);

  console.log(article.name);
  const [checklist] = disastersChecklists.filter(
    (checklist) => checklist.disaster === article.name
  );

  return (
    <>
      <div className="head-image">
        <img src={article.headImage} alt={article.title} />
      </div>
      <div className="title">{article.title}</div>
      <div className="jumplinks">
        {article.jumplinks.map((jumpLink) => (
          <div className="jumplink">
            <a href={`#${jumpLink.href}`} key={jumpLink.href}>
              {jumpLink.text}
            </a>
          </div>
        ))}
      </div>
      <div className="article">
        {console.log(checklist)}
        <div id="checklist">
          <Checklist
            data={checklist}
            myChecklists={myChecklists}
            bookmarks={bookmarks}
            setMyChecklists={setMyChecklists}
            setBookmarks={setBookmarks}
            source={"external"}
          ></Checklist>
        </div>
        <div className="content">
          {article.content.map((division) => (
            <>
              {division.heading && (
                <div
                  className="heading"
                  id={division.anchor}
                  key={division.heading}
                >
                  {division.heading}
                </div>
              )}
              {division.sections &&
                division.sections.map((subsection) => (
                  <>
                    {subsection["sub-heading"] && (
                      <div
                        className="sub-heading"
                        key={subsection["sub-heading"]}
                      >
                        {subsection["sub-heading"]}
                      </div>
                    )}
                    {subsection["list"] && (
                      <ul>
                        {subsection["list"].map((list) => (
                          <li key={list}>{list}</li>
                        ))}
                      </ul>
                    )}
                    {subsection["para"] && (
                      <>
                        {subsection["para"].map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </>
                    )}
                  </>
                ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const articles = [
  {
    name: "tornado",
    headImage:
      "https://www.amnh.org/var/ezflow_site/storage/images/media/tornado-leading-image/1666587-1-eng-US/tornado-leading-image.jpg",
    title: "Tornadoes and Severe Storms",
    link: "tornado",
    jumplinks: [
      {
        text: "Warning Signs",
        href: "warning",
      },
      {
        text: "Preparation",
        href: "preparation",
      },
      {
        text: "Take Shelter",
        href: "shelter",
      },
      {
        text: "Checklist",
        href: "checklist",
      },
      {
        text: "Remember",
        href: "remember",
      },
    ],
    content: [
      {
        heading: "Preparation",
        anchor: "preparation",
        sections: [
          {
            "sub-heading": "Create an Emergency Plan",
            list: [
              "Identify a safe place in your home for household members and pets to gather during a tornado.",
              "Teach your family how to administer basic first aid, how to use a fire extinguisher, and how and when to turn off water, gas, and electricity in your home.",
              "Make sure your children know what a tornado is, what tornado watches and warnings are, and how to take shelter, whether at home or at school",
            ],
          },
          {
            "sub-heading": "Write down important information",
            list: [
              "Emergency telephone numbers (such as police, fire, paramedics, and medical centers)",
              "Names, addresses, and telephone numbers of your insurance agents, including policy types and numbers",
              "Important medical information (for example, allergies, regular medications, and brief medical history)",
              "Telephone number for your bank or credit union, and your account numbers Year, model, license plate, and identification numbers of your vehicles",
            ],
          },
          {
            "sub-heading": "Create an emergency supply kit",
            para: [
              "Keep your supplies in an easy-to-carry emergency preparedness kit that you can use at home or take with you in case you must evacuate.",
            ],
          },
          {
            "sub-heading": "Take steps to reduce household hazards",
            list: [
              "Inspect your home for possible hazards, such as if the walls are securely bolted to the foundation, if heavy items are stored on shelves more than 30 inches high, or if chairs or beds are near windows, mirrors, or large pictures.",
              "Identify any possible hazard in the way your home is constructed, for example, you may need to strengthen the areas of connection between the wall studs and roof rafters with hurricane clips",
              "Remember outdoor items, make a list of items to bring inside in the event of a storm, and remove any debris or loose items in your yard.",
              "Know where and how to shut off utilities, including gas, electricity, and water, at the main switches or valves. Check with your local utility companies for instructions.",
            ],
          },
        ],
      },
      {
        heading: "Warning Signs",
        anchor: "warning",
        sections: [
          {
            "sub-heading": "",
            para: [
              "There are several atmospheric warning signs that precipitate a tornado’s arrival. Take shelter immediately if there is a tornado warning or if you see signs of a tornado. ",
            ],
            list: [
              "A dark, often greenish, sky",
              "Wall clouds or an approaching cloud of debris",
              "Large hail often in the absence of rain",
              "Before a tornado strikes, the wind may die down and the air may become very still",
              "A loud roar similar to a freight train may be heard",
              "An approaching cloud of debris, even if a funnel is not visible",
              "Rotating funnel-shaped cloud",
              "Large, dark, low-lying cloud",
            ],
          },
        ],
      },
      {
        heading: "Take Shelter",
        anchor: "shelter",
        sections: [
          {
            "sub-heading": "",
            para: [
              "Falling and flying debris causes most injuries and deaths during a tornado. Although there is no completely safe place during a tornado, some locations are much safer than others.",
            ],
          },
          {
            "sub-heading":
              "If you are at HOME, go to your basement or an inside room, without windows, on the lowest floor",
            list: [
              "The safest place in the home is the interior part of a basement.",
              "If you don’t have a basement, go to an inside room, without windows, on the lowest floor. This could be a center hallway, bathroom, or closet.",
              "Avoid taking shelter where there are heavy objects on the floor directly above you. Heavy objects, such as refrigerators or pianos, could fall though the floor if the tornado strikes your house.",
              "For added protection, get under something sturdy such as a heavy table or workbench. If possible, cover your body with a blanket, sleeping bag, or mattress, and protect your head with anything available—even your hands.",
            ],
          },
          {
            "sub-heading":
              "If you live in a MOBILE HOME, go to a nearby building",
            list: [
              "Don’t stay in a mobile home during a tornado. Mobile homes can turn over during strong winds. Even mobile homes with a tie-down system cannot withstand the force of tornado winds.",
              "If you live in a mobile home, go to a nearby building, preferably one with a basement.",
              "If there is no shelter nearby, lie flat in the nearest ditch, ravine, or culvert and shield your head with your hands.",
            ],
          },
          {
            "sub-heading":
              "If you’re at WORK or SCHOOL, follow your tornado drill",
            list: [
              "`Follow your tornado drill and proceed to your tornado shelter location quickly and calmly.",
              "Stay away from windows and don’t go to large open rooms such as cafeterias, gyms, or auditoriums.",
            ],
          },
          {
            "sub-heading":
              "If you’re in a MALL, THEATER, or GYM, get to the lowest level of the building and stay away from the windows",
            list: [
              "Long-span buildings, such as malls, theaters, and gyms, are especially dangerous because the roof is usually supported only by the outside walls. Most buildings like this cannot withstand the pressure from a tornado—they simply collapse.",
              "Get to the lowest level of the building (the basement if possible).",
              "Stay away from windows.",
              "If there isn’t time to get to a tornado shelter or to a lower level, try to get under a door frame or get up against something that will support or deflect falling debris. For instance, in a department store, get up against heavy shelving or counters. In a theater, get under the seats. Remember to protect your head.",
            ],
          },
          {
            "sub-heading":
              "If you’re in a VEHICLE, Do NOT try to outrun a tornado",
            list: [
              "Don’t try to outrun a tornado. Drive to the closest shelter. The least desirable place to be during a tornado is in a motor vehicle. Cars, buses, and trucks are easily tossed by tornado winds.",
              "If you’re unable to make it to a safe shelter, either get down in your vehicle and cover your head and neck or leave your vehicle and seek shelter in a low-lying area such as a ditch or ravine.",
              "Stay away from highway overpasses and bridges.",
            ],
          },
          {
            "sub-heading":
              "If you’re OUTSIDE when a tornado approaches, find shelter quickly",
            list: [
              "If there is no shelter nearby, go to a low-lying area such as a ditch or ravine and lie flat.",
              "Protect your head and neck with an object or with your arms.",
              "Avoid areas with many trees.",
            ],
          },
          {
            "sub-heading": "If you have FUNCTIONAL NEEDS",
            list: [
              "If you are in a wheelchair, get away from windows and go to an interior room of the house. If possible, seek shelter under a sturdy table or desk. Cover your head with anything available, even your hands.",
              "If you’re unable to move from a bed or a chair and assistance is not available, protect yourself from falling objects by covering up with blankets and pillows.",
              "If you’re outside and a tornado is approaching, get into a ditch or gully. If possible, lie flat and cover your head with your arms.",
            ],
          },
        ],
      },
      {
        heading: "Remember!",
        anchor: "remember",
        sections: [
          {
            "sub-heading":
              "Do not prioritize finding a helmet over seeking shelter.",
            list: [
              "Head injuries are common causes of death during tornadoes.",
              "However, Looking for a helmet in the few seconds before a tornado hits may delay you getting safely to shelter.",
              "Helmets should be considered just one part of their overall home tornado preparedness kit to avoid any delay",
            ],
          },
          {
            "sub-heading":
              "Do not waste time opening windows to reduce the pressure in a house.",
            list: [
              "It is a myth that sudden pressure changes associated with tornadoes cause structures to explode, and flying debris is likely to break the windows before the tornado hits anyway.",
              "Avoid windows in all cases, as flying glass can cause terrible wounds.",
            ],
          },
          {
            "sub-heading":
              "A tornado has the potential to damage a nearby dam or water reservoir",
            list: ["This could lead to an unexpected flood"],
          },
        ],
      },
    ],
  },
  {
    name: "earthquake",
    link: "earthquake",
    headImage:
      "https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/features-listing-images/olg_tv_earthquake-hero/3877306-2-eng-US/olg_tv_earthquake-hero_facebookshare_1200.jpg",
    title: "Earthquakes",
    jumplinks: [
      {
        text: "Checklist",
        href: "checklist",
      },
      {
        text: "Before",
        href: "before",
      },
      {
        text: "During",
        href: "during",
      },
      {
        text: "Remember!",
        href: "remember",
      },
      {
        text: "After",
        href: "after",
      },
      {
        text: "Evacuation",
        href: "evacuation",
      },
    ],
    content: [
      {
        heading: "Before an Earthquake",
        anchor: "before",
        sections: [
          {
            "sub-heading": "",
            para: [
              "IF you live an an earthquake prone area, these are basic things to  check to ensure your safety in case of an emergency",
            ],
            list: [
              "Learn basic First Aid and CPR.",
              "Learn how to turn off gas, water and electricity.",
              "Repair deep plaster cracks in ceilings and foundations. Get expert advice if there are signs of structural defects.",
              "Anchor overhead lighting fixtures and fans to the ceiling, braced",
              "Follow BIS codes relevant to your area for building standards",
              "Fasten shelves securely to walls, and Place large, breakable, flammable or heavy objects on lower shelves with latches",
              "Hang heavy items such as pictures and mirrors away from beds, settees, and anywhere that people sit.",
              "Repair defective electrical wiring and leaky gas connections. These are potential fire risks.",
              "Secure water heaters, LPG cylinders etc., by strapping them to the walls or bolting to the floor.",
              "Identify safe places indoors and outdoors, like under a strong dining table, bed, against an inside wall, Away from where glass could shatter around windows, mirrors, pictures, or where heavy bookcases or other heavy furniture could fall over",
              "Know emergency telephone numbers (such as those of doctors, hospitals, the police, etc)",
              "Educate yourself and family members",
            ],
          },
          {
            "sub-heading": "Develop an emergency communication plan",
            list: [
              "In case family members are separated from one another during an earthquake (a real possibility during the day when adults are at work and children are at school), develop a plan for reuniting after the disaster.",
              "Ask an out-of-state relative or friend to serve as the 'family contact' after the disaster; it is often easier to call long distance. Make sure everyone in the family knows the name, address, and phone number of the contact person.",
            ],
          },
        ],
      },
      {
        heading: "What to do During an Earthquake",
        anchor: "during",
        sections: [
          {
            "sub-heading": "If indoors",
            list: [
              "DROP to the ground; take COVER by getting under a sturdy table or other piece of furniture; and HOLD ON until the shaking stops. If there is no a table or desk near you, cover your face and head with your arms and crouch in an inside corner of the building.",
              "Protect yourself by staying under the lintel of an inner door, in the corner of a room, under a table or even under a bed.",
              "Stay away from glass, windows, outside doors and walls, and anything that could fall",
              "Stay in bed if you are there when the earthquake strikes. Hold on and protect your head with a pillow",
              "Use a doorway for shelter only if it is in close proximity to you and if you know it is a strongly supported, load bearing doorway.",
              "Stay inside until the shaking stops and it is safe to go outside. Research has shown that most injuries occur when people inside buildings attempt to move to a different location inside the building or try to leave.",
              "Be aware that the electricity may go out or the sprinkler systems or fire alarms may turn on.",
            ],
          },
          {
            "sub-heading": "If outdoors",
            list: [
              "Trust the disaster response force if its active, and follow instructions from the authorities.",
              "Move away from buildings, trees, streetlights, and utility wires.",
              "If you are in open space, stay there until the shaking stops. The greatest danger exists directly outside buildings; at exits; and alongside exterior walls. Most earthquake-related casualties result from collapsing walls, flying glass, and falling objects.",
            ],
          },
          {
            "sub-heading": "If in a moving vehicle",
            list: [
              "Stop as quickly as safety permits and stay in the vehicle until the shaking stops.",
              "Avoid overpasses, buildings, trees and power lines.",
              "Proceed cautiously once the earthquake has stopped. Avoid roads, bridges, or ramps that might have been damaged by the earthquake.",
              "Be aware of hazards like falling tree branches and other debris, downed electrical wires and damaged roadways.",
            ],
          },
          {
            "sub-heading": "If You’re In a High-rise Building:",
            list: [
              "Stay away from windows or outside walls.",
              "Get under a table.",
              "Do not use elevators.",
            ],
          },
          {
            "sub-heading": "If Trapped Under Debris",
            list: [
              "Do not light a match.",
              "Do not move about or kick up dust.",
              "Cover your mouth with a handkerchief or clothing.",
              "Tap on a pipe or wall so rescuers can locate you. Use a whistle if one is available. Shout only as a last resort. Shouting can cause you to inhale dangerous amounts of dust.",
            ],
          },
          {
            "sub-heading": "If You’re In a Crowded Public Place:",
            list: [
              "Do not rush for exit doors.",
              "Move away from display shelves containing objects that could fall.",
            ],
          },
        ],
      },
      {
        heading: "Remember!",
        anchor: "remember",
        sections: [
          {
            "sub-heading": "",
            para: [
              "Earthquake aftershocks can cause significant damage to buildings. Occasionally, they can result in building collapse. This risk is highest for previously damaged buildings",
            ],
          },
        ],
      },
      {
        heading: "After the Earthquake",
        anchor: "after",
        sections: [
          {
            "sub-heading": "First Aid",
            list: [
              "Check for injuries and apply First Aid.",
              "Do not move seriously injured individuals unless they’re in immediate danger.",
            ],
          },
          {
            "sub-heading": "Hunt for Hazards",
            list: [
              "Check for gas and water leaks, broken electrical wiring or sewage lines.",
              "If there is damage, turn utilities off at the source. Do not turn on the gas, let the gas company do it.",
              "Check building for cracks and damage, including roof, chimneys and foundation.",
              "Be prepared for aftershocks.",
            ],
          },
          {
            "sub-heading": "Check Your Supplies",
            list: [
              "Check food and water supplies.",
              "Obtain emergency water from water heaters, melted ice cubes and canned vegetables.",
            ],
          },
          {
            "sub-heading": "Stay Informed",
            list: [
              "Turn on your portable radio for instructions and news reports.",
            ],
          },
          {
            "sub-heading": "Work With Authorities",
            list: [
              "Cooperate fully with public safety officials.",
              "Do not use your vehicle except in an emergency.",
              "Keep streets and roads clear for emergency vehicles.",
              "DO NOT go sight-seeing!",
            ],
          },
          {
            "sub-heading": "Please Remember",
            list: [
              "Adults and children should always carry an emergency card.",
              "Stay calm and stay active helping others.",
            ],
          },
        ],
      },
      {
        heading: "Evacuation Plan",
        anchor: "evacuation",
        sections: [
          {
            "sub-heading": "If You Do Evacuate, Plan Ahead",
            list: [
              "List three places where family members should plan to go if they cannot stay in or return to their home.",
              "If you arrive home after the quake and no one is there, this list will provide you with places to start looking for other family members.",
            ],
          },
          {
            "sub-heading": "Stay In Communication",
            list: [
              "Turn on your portable or car radio for information and safety advisories.",
              "Only use your phone for emergencies and to call your out-of-area contact to inform them of your status.",
            ],
          },
          {
            "sub-heading": "Things to Take With You",
            list: [
              "Medicines and First Aid kit.",
              "Flashlight, portable radio and batteries.",
              "Important papers and cash.",
              "Food, water, sleeping bags and extra clothes.",
            ],
          },
          {
            "sub-heading": "Learn School Policies",
            list: [
              "Determine in advance whether the school’s policy is to hold or to release your children in the event of an emergency.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "tsunami",
    link: "tsunami",
    headImage:
      "https://www.grunge.com/img/gallery/the-truth-about-the-biggest-tsunami-ever-recorded/l-intro-1626814547.jpg",
    title: "Tsunami",
    jumplinks: [
      {
        text: "Checklist",
        href: "checklist",
      },
      { text: "Preparation", href: "preparation" },
      { text: "Tsunami Warning", href: "warning" },
      { text: "Remember!", href: "remember" },
    ],
    content: [
      {
        heading: "Preparation",
        anchor: "preparation",
        sections: [
          {
            "sub-heading": "If you live in a Tsunami prone area",
            list: [
              "Learn the signs of a potential tsunami, such as an earthquake, a loud roar from the ocean, or unusual ocean behavior, such as a sudden rise or wall of water or sudden draining of water showing the ocean floor.",
              "Know and practice community evacuation plans. Some at-risk communities have maps with evacuation zones and routes. Map out your routes from home, work and play. Pick shelters 100 feet or more above sea level, or at least one mile inland.",
              "Create a family emergency communication plan that has an out-of-state contact. Plan where to meet if you get separated.",
              "Sign up for your community’s warning system. The Emergency Alert System (EAS) and National Oceanic and Atmospheric Administration (NOAA) Weather Radio also provide emergency alerts.",
              "Consider earthquake insurance and a flood insurance policy through the National Flood Insurance Program (NFIP). Standard homeowner’s insurance does not cover flood or earthquake damage.",
            ],
          },
        ],
      },
      {
        heading: "Remember!",
        anchor: "remember",
        sections: [
          {
            "sub-heading": "",
            para: [
              "When the wave of the Tsunami recedes, the force from the pull and the debris caught in it can cause a lot of damage and injuries",
            ],
          },
        ],
      },
      {
        heading: "If You Are Under A Tsunami Warning",
        anchor: "warning",
        sections: [
          {
            "sub-heading": "",
            list: [
              "If caused by an earthquake, Drop, Cover, then Hold On to protect yourself from the earthquake first.",
              "Get to high ground as far inland as possible.",
              "Be alert to signs of a tsunami, such as a sudden rise or pulling back of ocean waters.",
              "Listen to emergency information and alerts. Always follow the instructions from local emergency managers.",
              "Follow the evacuation order issued by authorities and evacuate immediately. Leave as soon as you see any natural signs of a tsunami or receive an official tsunami warning.",
              "If you are in a boat, go out to sea.",
              "Stay away from the beach. Never go down to the beach to watch a tsunami come in. If you can see the wave you are too close to escape it. CAUTION — If there is noticeable recession in water away from the shoreline this is nature's tsunami warning and it should be heeded. You should move away immediately.",
              "Save yourself — not your possessions.",
              "Remember to help your neighbors who may require special assistance — infants, elderly people and individuals with access or functional needs",
            ],
          },
        ],
      },
    ],
  },
  {
    headImage:
      "https://media.npr.org/assets/img/2020/08/11/20180912-hurflorencegc1045est_wide-53ae633c610e37bce605781b306e61fe40612a91-s1100-c50.jpg",
    title: "Hurricane",
    link: "hurricane",
    name: "hurricane",
    jumplinks: [
      {
        text: "Checklist",
        href: "checklist",
      },
      { text: "Preparation", href: "preparation" },
      { text: "Remember!", href: "remember" },
      { text: "After the Event", href: "after" },
    ],
    content: [
      {
        heading: "Preparation",
        anchor: "preparation",
        sections: [
          {
            "sub-heading": "Note Down Important Information",
            para: [
              "Write down emergency phone numbers and keep them on the refrigerator or near every phone in your house. Program them into your cell phone too.",
            ],
          },
          {
            "sub-heading": "Find Shelter",
            para: [
              "Locate the nearest shelter and different routes you can take to get there from your home. If shelter locations in your area have not been identified, learn how to find them in the event of a stormexternal icon.",
            ],
          },
          {
            "sub-heading": "If You Own a Pet",
            para: [
              "Pre-identify shelters, a pet-friendly hotel, or an out-of-town friend or relative where you can take your pets in an evacuation. Local animal shelters may be able to offer advice on what to do with your pets if you are asked to evacuate your home",
            ],
          },
          {
            "sub-heading": "Get Your Car Ready",
            list: [
              "Fill your car’s gas tank.",
              "Move cars and trucks into your garage or under cover.",
              "Always keep an emergency kit in your car.",
            ],
          },
          {
            "sub-heading": "If You Need To Stay Home",
            list: [
              "Keep your emergency supply kit in a place you can easily access.",
              "Listen to the radio or TV for updates on the hurricane.",
              "Stay inside. Even if it looks calm, don’t go outside. Wait until you hear or see an official message that the hurricane is over. Sometimes, weather gets calm in the middle of a storm but then quickly gets bad again.",
              "Stay away from windows—you could get hurt by pieces of broken glass or flying debris during a storm. Stay in a room with no windows, or go inside a closet.",
              "Be ready to leave. If emergency authorities order you to leave or if your home is damaged, you may need to go to a shelter or a neighbor’s house.",
            ],
          },
        ],
      },
      {
        heading: "Remember!",
        anchor: "remember",
        sections: [
          {
            "sub-heading": "",
            para: [
              "The storm surge in the aftermath of a hurricane causes water to rise up, and combined with waves, can cause extensive damage.",
            ],
          },
        ],
      },
      {
        heading: "What To Do After a Hurricane",
        anchor: "after",
        sections: [
          {
            "sub-heading": "",
            para: [
              "After it is confirmed by authorities that the storm has passed and it is safe to go outdoors, you can begin to assess any potential damage to your home and property.",
            ],
            list: [
              "If you were evacuated, return home only after authorities advise it is safe to do so.",
              "Avoid downed power lines. Never touch anything in contact with power lines, including water or water puddles that may be near the downed power lines.",
              "Protect your property from further damage by boarding up broken windows to help deter vandalism or additional weather damage.",
              "Arrange for reasonable temporary repairs.",
              "Be wary of any gas lines that may have been damaged or broken during the storm. If a gas leak is suspected, stay out of the property until the utility company deems it safe.",
              "Be cautious of hazards that are a product of the storm, such as water due to flooding, sharp or broken objects, damaged tree limbs or other structures that may have been damaged by high winds or water.",
              "Keep accurate records of your expenses and save bills and receipts from your temporary repairs. (Avoid making permanent repairs until your Claim professional has reviewed the damage). Keep accurate records of any other expenses incurred.",
              "Separate and inventory any damaged personal property. Create a list of any damaged contents, including a description of the item, name of the manufacturer, brand name, age, as well as the place and date of purchase, if known. Include photographs, videotapes or personal property inventories you may already have available.",
              "If you think your home might be unsafe due to storm damage, contact your insurance company to discuss finding temporary accommodations.",
            ],
          },
        ],
      },
    ],
  },
];

const disastersChecklists = [
  {
    disaster: "tornado",
    name: "Tornado Preparedness Checklist",
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
  {
    disaster: "tsunami",
    name: "Tsunami Preparedness Checklist",
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
  {
    disaster: "earthquake",
    name: "Earthquake Preparedness Checklist",
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
  {
    disaster: "hurricane",
    name: "Hurricane Preparedness Checklist",
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

export default Article;
