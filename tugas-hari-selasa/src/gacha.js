import { characters } from "./data.js";

function getRandomCharacter(rarity) {
    const filtered = characters.filter(
        character => character.rarity === rarity
    );

    const randomIndex =
        Math.floor(Math.random() * filtered.length);

    return filtered[randomIndex];
}

export function pull() {

    const random = Math.random() * 100;

    if (random < 60) {
        return getRandomCharacter("Common");
    }

    if (random < 85) {
        return getRandomCharacter("Rare");
    }

    if (random < 95) {
        return getRandomCharacter("Epic");
    }

    return getRandomCharacter("Legendary");
}

export function pullTen() {

    const results = [];

    for (let i = 0; i < 10; i++) {
        results.push(pull());
    }

    return results;
}