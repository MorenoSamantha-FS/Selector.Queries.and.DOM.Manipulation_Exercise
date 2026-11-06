"use strict";
(() => {
  // Get all the league sections from the HTML
  const leagues = document.querySelectorAll("main > section");

  // TASK 1: Create an array of all teams
  const allTeams = Array.from(leagues).flatMap((league) => {
    return Array.from(league.querySelectorAll("li"), (team) => {
      return team.textContent;
    });
  });
  console.log("All Teams:", allTeams);

  // TASK 2: Create an array of all first-place teams
  const firstPlaceTeams = Array.from(leagues).map((league) => {
    return league.querySelector("li:first-child").textContent;
  });
  console.log("First Place Teams:", firstPlaceTeams);

  // TASK 3: Create an array of all second-place teams
  const secondPlaceTeams = Array.from(leagues).map((league) => {
    return league.querySelector("li:nth-child(2)").textContent;
  });
  console.log("Second Place Teams:", secondPlaceTeams);

  // TASK 4: Remove La Liga from the DOM
  const laLiga = Array.from(leagues).find((league) => {
    return league.querySelector("h2").textContent === "La Liga";
  });
  if (laLiga) {
    laLiga.remove();
  }

  // TASK 5: Add a new league to the end of the leagues list
  const newLeague = {
    name: "MLS",
    region: "North America",
    teams: [
      "NY Red Bulls",
      "DC United",
      "Columbus",
      "Orlando City",
      "Philadelphia",
    ],
  };
  // Create the new league section
  const newSection = document.createElement("section");
  newSection.classList.add("league");
  //Create and populate the new league heading
  const leagueName = document.createElement("h2");
  leagueName.textContent = newLeague.name;
  //Create and populate the new region heading
  const leagueRegion = document.createElement("h3");
  leagueRegion.textContent = newLeague.region;
  //Create and populate the new teams list
  const teamList = document.createElement("ul");
  newLeague.teams.forEach((team) => {
    const listItem = document.createElement("li");
    listItem.textContent = team;
    teamList.appendChild(listItem);
  });
  // Assemble the new league sections
  newSection.appendChild(leagueName);
  newSection.appendChild(leagueRegion);
  newSection.appendChild(teamList);
  // Add the new league section to the DOM
  document.querySelector("main").appendChild(newSection);
})();
