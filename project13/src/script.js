const textArea = document.getElementById("text");
const countSpan = document.getElementById("count");
const maxCount = 100;

textArea.addEventListener("input", () => {
  const textLength = textArea.value.length;
  if (textLength > maxCount) {
    textArea.value = textArea.value.slice(0, maxCount);
  }
  countSpan.textContent = `${textLength}/${maxCount}`;

  // Add a visual indication if the limit is exceeded
  if (textLength > maxCount) {
    countSpan.style.color = "red";
  } else {
    countSpan.style.color = "black";
  }
});
