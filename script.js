// Handle word building logic
function buildWords() {
  // TODO: generate CVC words based on input
  const output = document.getElementById("output");
  output.textContent = "Words will appear here.";
}

const buildBtn = document.getElementById("buildBtn");

if (buildBtn) {
  buildBtn.addEventListener("click", buildWords);
}

