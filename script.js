function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('active');
}

// Typing animation
const text = "Quantum is Progressing 🚀";
let index = 0;
const speed = 100;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
