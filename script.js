function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Typing animation
const phrases = ["Quantum Ideas.", "AI Innovations.", "Your Digital Future."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.getElementById("typing-text").innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.getElementById("typing-text").innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      document.getElementById("typing-text").innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 2000 : isDeleting ? 50 : 150;
  setTimeout(loop, speed);
}

loop();
