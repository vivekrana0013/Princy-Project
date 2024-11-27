// Array of list items
const items = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Breadfruit",
  "Cantaloupe",
  "Cherry",
  "Citrus",
  "Coconut",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Grapes",
  "Guava",
  "Honeydew melon",
  "Jackfruit",
  "Jambolan",
  "Jasmine",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Lychee",
  "Mango",
  "Mulberry",
  "Nectarine",
  "Olive",
  "Orange",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Raspberry",
  "Red currant",
  "Starfruit",
  "Strawberry",
  "Tangerine",
  "Tomato",
  "Watermelon",
];

const listElement = document.getElementById("list");

// Initially hide the list
listElement.style.display = "none";

items.forEach((item) => {
  const li = document.createElement("li");

  // Add Tailwind CSS classes for styling the <li> elements
  li.classList.add(
    "bg-white", // White background for each item
    "text-gray-800", // Dark text color
    "px-4", // Horizontal padding
    "py-2", // Vertical padding
    "mb-2", // Margin-bottom for spacing
    "rounded-lg", // Rounded corners
    "shadow-md", // Add shadow
    "transition-all", // Smooth transition on hover
    "duration-300", // Hover transition duration
    "hover:bg-blue-500", // Hover background color
    "hover:text-white", // Change text color on hover
    "cursor-pointer" // Make the list item clickable (pointer cursor)
  );

  li.textContent = item;
  listElement.appendChild(li);
});

function filterList() {
  const searchBox = document.getElementById("searchBox");
  const filterText = searchBox.value.toLowerCase();
  const listItems = listElement.getElementsByTagName("li");

  // If the search box is not empty, show the list
  if (filterText !== "") {
    listElement.style.display = "block"; // Show the list when typing
  } else {
    listElement.style.display = "none"; // Hide the list if search box is empty
  }

  // Filter the list items based on the search input
  for (let i = 0; i < listItems.length; i++) {
    const itemText = listItems[i].textContent.toLowerCase();
    if (itemText.includes(filterText)) {
      listItems[i].style.display = ""; // Show item
    } else {
      listItems[i].style.display = "none"; // Hide item
    }
  }
}
