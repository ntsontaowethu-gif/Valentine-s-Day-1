const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// No button runs away + Yes grows
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";

  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size + 8) + "px";
});

// Yes click
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);z