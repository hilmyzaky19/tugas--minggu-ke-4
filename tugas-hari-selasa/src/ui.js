const resultContainer =
    document.getElementById("result");

export function showResult(character) {

    const card = document.createElement("div");

    card.classList.add("card");
    card.classList.add(character.rarity);

    card.textContent =
        `[${character.rarity.toUpperCase()}] ${character.name}`;

    resultContainer.append(card);
}

export function updateStats(stats) {

    document.getElementById("total").textContent =
        stats.total;

    document.getElementById("common").textContent =
        stats.Common;

    document.getElementById("rare").textContent =
        stats.Rare;

    document.getElementById("epic").textContent =
        stats.Epic;

    document.getElementById("legendary").textContent =
        stats.Legendary;
}

export function clearUI() {

    resultContainer.innerHTML = "";
}