 // Data structure for letters and corresponding words
 const lettersData = [
        { letter: "A", word: "apple" },
        { letter: "B", word: "ball" },
        { letter: "C", word: "cat" },
        { letter: "D", word: "dog" },
        { letter: "E", word: "elephant" },
        { letter: "F", word: "fish" },
        { letter: "G", word: "gate" },
        { letter: "H", word: "hat" },
        { letter: "I", word: "inch" },
        { letter: "J", word: "jug" },
        { letter: "K", word: "kite" },
        { letter: "L", word: "lion" },
        { letter: "M", word: "monkey" },
        { letter: "N", word: "nest" },
        { letter: "O", word: "octopus" },
        { letter: "P", word: "pig" },
        { letter: "Q", word: "queen" },
        { letter: "R", word: "rat" },
        { letter: "S", word: "sun" },
        { letter: "T", word: "tree" },
        { letter: "U", word: "umbrella" },
        { letter: "V", word: "van" },
        { letter: "W", word: "wolf" },
        { letter: "X", word: "xylophone" },
        { letter: "Y", word: "yak" },
        { letter: "Z", word: "zebra" }  
    ]

//     console.log(lettersData);
//     console.log(lettersData[0]);
// console.log(lettersData[0].letter);
// console.log(lettersData[0].word);

// Display letters on the page
const lettersContainer = document.getElementById("lettersContainer");
const output = document.getElementById("output");
lettersData.forEach((item) => {
  const p = document.createElement("p");
  p.textContent = item.letter;

   p.addEventListener("click", () => {
output.textContent = `${item.letter} is for ${item.word}`;
  });

  lettersContainer.appendChild(p);
});


// Handle word building logic
function buildWords() {
  // TODO: generate CVC words based on input
  output.textContent = "Words will appear here.";
}

const buildBtn = document.getElementById("buildBtn");

if (buildBtn) {
  buildBtn.addEventListener("click", buildWords);
}

