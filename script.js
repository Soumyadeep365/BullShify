const numbers = document.querySelectorAll(".num");

function updateNumbers() {
  numbers.forEach((num) => {
    const randomNum = (Math.random() * 20 - 10).toFixed(2); // -10 to +10
    let arrowSymbol = randomNum > 0 ? "▲" : "▼";

    num.innerHTML = `<span class="arrow">${arrowSymbol}</span> ${randomNum}%`;

    const arrow = num.querySelector(".arrow");

    if (randomNum > 0) {
      arrow.style.backgroundColor = "#00d75aff"; // green arrow
      arrow.style.color = "white"; // green arrow
      num.style.backgroundColor = "#2fe0762b";
      num.style.color = "#00ff6aff";
    } else {
      arrow.style.backgroundColor = "#ff3535a4"; // red arrow
      arrow.style.color = "white"; // red arrow
      num.style.backgroundColor = "#ff7a7a25";
      num.style.color = "#ff0000ff";
    }
    num.style.transition = "0.3s ease";
  });
}

setInterval(updateNumbers, 3000);
updateNumbers();

const btnLinks = document.querySelectorAll(".btnn a");

btnLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // remove if you want link to open normally

    btnLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

$(document).ready(function() {
    $('.slider-box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        dots: false,
        swipe: false,
        draggable: false,
        touchMove: false
    });
});

const clickBtns = document.querySelectorAll(".click");

clickBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const cardBody = btn.closest(".card-body");
    const showPara = cardBody.querySelector(".show");

    showPara.classList.toggle("active");

    if (showPara.classList.contains("active")) {
      btn.textContent = "read less";
    } else {
      btn.textContent = "read more";
    }
  });
});

const parts = [
  { text: "Crypto", color: "yellow" },
  { text: " and ", color: "white" },
  { text: "Futures Markets", color: "yellow" }
];

const container = document.getElementById("text");
let fullText = [], colorMap = [];

parts.forEach(part => {
  part.text.split("").forEach(char => {
    fullText.push(char);
    colorMap.push(part.color);
  });
});

let i = 0;
function frameLooper() {
  if (i < fullText.length) {
    const span = document.createElement("span");
    span.className = `${colorMap[i]} fade-in`;
    span.textContent = fullText[i];
    container.appendChild(span);
    i++;
    setTimeout(frameLooper, 80);
  }
}

frameLooper();
