window.onload = function () {
  const tabs = document.querySelectorAll("#nav-links span");
  const contentDivs = document.querySelectorAll(".read-only");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove 'underline' from all tabs and hide all content divs
      tabs.forEach((t) => t.classList.remove("underline", "text-black"));
      contentDivs.forEach((div) => div.classList.add("hidden"));

      // Add 'underline' to clicked tab and show the corresponding div
      tab.classList.add("underline", "text-black");

      //remove -tab first-tab we get first the id of th div for first
      document
        .getElementById(tab.id.replace("-tab", ""))
        .classList.remove("hidden");
    });
  });
};
