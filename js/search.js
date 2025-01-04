document.getElementById("searchButton").addEventListener("click", () => {
  const searchQuery = document.getElementById("searchBox").value.trim();

  if (searchQuery) {
    // Pass the search query to the map page via URL
    window.location.href = `map.html?item=${encodeURIComponent(searchQuery)}`;
  } else {
    alert("Please enter an item to search!");
  }
});
