import { pull, pullTen } from "./gacha.js";
import {
  showResult,
  updateStats,
  clearUI
} from "./ui.js";

const stats = {
  total: 0,
  Common: 0,
  Rare: 0,
  Epic: 0,
  Legendary: 0
};

function addCharacter(character) {
  stats.total++;
  stats[character.rarity]++;

  showResult(character);
  updateStats(stats);
}

document.getElementById("pull1").addEventListener("click", () => {
  const result = pull();
  addCharacter(result);
});

document.getElementById("pull10").addEventListener("click", () => {
  const results = pullTen();

  results.forEach((character) => {
    addCharacter(character);
  });
});

document.getElementById("reset").addEventListener("click", () => {
  stats.total = 0;
  stats.Common = 0;
  stats.Rare = 0;
  stats.Epic = 0;
  stats.Legendary = 0;

  clearUI();
  updateStats(stats);
});

updateStats(stats);