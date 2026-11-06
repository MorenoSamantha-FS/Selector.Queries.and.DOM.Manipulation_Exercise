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
  // Create the new league section
  //Create and populate the new league heading
  //Create and populate the new region heading
  //Create and populate the new teams list
  // Assemble the new league sections
  // Add the new league section to the DOM
})();
