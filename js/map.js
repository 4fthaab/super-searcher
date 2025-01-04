// Parse the item name from the URL
const urlParams = new URLSearchParams(window.location.search);
const searchItem = urlParams.get("item");

const itemLocations = {
  "Colgate Paste": { rack: 4, compartment: 3 },
  "Dove Soap": { rack: 2, compartment: 15 },
  "Pepsi": { rack: 1, compartment: 5 },
};

// Generate the map grid
for (let i = 1; i <= 5; i++) {
  const rackElement = document.getElementById(`rack${i}`);
  for (let j = 1; j <= 20; j++) {
    const compartment = document.createElement("div");
    compartment.textContent = `${i},${j}`;
    rackElement.appendChild(compartment);
  }
}

// Highlight the searched item's location
if (itemLocations[searchItem]) {
  const { rack, compartment } = itemLocations[searchItem];
  const rackElement = document.getElementById(`rack${rack}`);
  const compartmentElement = rackElement.children[compartment - 1];
  compartmentElement.classList.add("highlight");
} else {
  alert("Item not found!");
}
