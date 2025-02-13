
function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000); // Perbarui setiap 1 detik
updateClock(); // Panggil langsung saat halaman dimuat

const text = "GamerTag :"; // Ganti dengan gamertag kamu
const typingContainer = document.querySelector(".typing-container");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingContainer.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
