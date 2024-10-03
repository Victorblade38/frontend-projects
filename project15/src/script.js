let dropBtn = document.getElementById("dropBtn");
let selectText = document.getElementById("select-text-area");
let optionsList = document.getElementById("select-info");

// Toggle dropdown visibility and arrow icon
dropBtn.addEventListener("click", () => {
  optionsList.classList.toggle("hidden");

  if (optionsList.classList.contains("hidden")) {
    dropBtn.setAttribute("src", "./uparrow.png");
  } else {
    dropBtn.setAttribute("src", "./downarrow.png");
  }
});

// Handle item selection
const options = document.querySelectorAll("#select-info li");

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectText.textContent = option.textContent;
    optionsList.classList.add("hidden");
    dropBtn.setAttribute("src", "./uparrow.png"); // Reset the arrow
  });
});
