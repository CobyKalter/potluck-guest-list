// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign dishes button only appears when guestList is full at 8 guests
const assignButton = document.querySelector(".assign");
// list that will populate with guests and assigned dishes
const assignedItems = document.querySelector(".assigned-items");

// click event for adding guests to list with input values
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
    clearInput();
    updateGuestCount();
  }
});

// Clears the input after the guest has been entered
const clearInput = function () {
  guestInput.value = "";
};

// Limits the guest list to 8 guests and hides the input, invite button and Add Guest text and shows the Assign Dishes button
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

// randomly assigns dishes to guests added to the list and lists them on the bottom of the page
const assignItems = function () {
  const potLuckItems = [
    "chocolate chip cookies",
    "roasted sweet potato",
    "chicken pot pie",
    "grilled salmon",
    "vegan lasagna",
    "arepas con queso y jamon",
    "hummus",
    "pineapple",
    "cous cous",
    "greek salad",
    "naan",
    "saag paneer"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    // randomly assigns a potlcuk dish from the array to a guest
    const randomPotluckIndex = Math.floor(Math.random() * potLuckItems.length);
    const randomPotluckItem = potLuckItems[randomPotluckIndex];
    // lists each guest and what dish they are assigned
    const listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    // disallows dishes to be duplicatively assigned
    potLuckItems.splice(randomPotluckIndex, 1);
  }
};

// click event for calling the assignItems function
assignButton.addEventListener("click", function () {
  assignItems();
  // disables the assignButton once clicked
  assignButton.disabled = true;
});
