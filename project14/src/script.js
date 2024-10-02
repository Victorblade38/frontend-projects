function toggleAccordion(button, accordion) {
  button.addEventListener("click", () => {
    //find the accordian div
    const isOpen = accordion.classList.contains("hidden");
    //toggle it
    accordion.classList.toggle("hidden");
    //change the img src
    button.firstElementChild.setAttribute(
      "src",
      isOpen ? "../downarrow.png" : "../uparrow.png"
    );
    //same diff attribute
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const accordions = [
  { btn: "btn-1", accordion: "accordian-1" },
  { btn: "btn-2", accordion: "accordian-2" },
  { btn: "btn-3", accordion: "accordian-3" },
];

accordions.forEach((pair) => {
  //going through each pair
  //accessing the btn
  const btnElement = document.getElementById(pair.btn);
  //accessing the accordian
  const accordionElement = document.getElementById(pair.accordion);
  //call the function and pass the btn and accordian
  toggleAccordion(btnElement, accordionElement);
});
