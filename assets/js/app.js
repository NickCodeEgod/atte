const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const cardData = [
  {
    title: "FLIGHT BOOKING",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Plane.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  },
  {
    title: "HOTEL & RESORT BOOKING",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Resort.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  },
  {
    title: "FAMILY TRIP PLANNER",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Beach.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  },
  {
    title: "CRUISE TOUR",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Ship.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  },
  {
    title: "FIRE CAMP",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Camping.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  },
  {
    title: "CORPORATE HOLIDAYS",
    image: "assets/images/card-images/Our-Hot-Services-card-images/Work.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
  }
];

const cardContainer = document.getElementById("card-container");

cardData.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <div class="card-info">
      <h2>${card.title}</h2>
      <p>${card.description}</p>
    </div>
  `;
  cardElement.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    document.getElementById("modal-title").textContent = card.title;
    document.getElementById("modal-image").src = card.image;
    document.getElementById("modal-description").textContent = card.description;
  });
  cardContainer.appendChild(cardElement);
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
});

const statNumbers = document.querySelectorAll('.Stat-Numbers');

function animateNumber(element) {
  const target = parseInt(element.textContent.replace(/,/g, ''), 10);
  let count = 0;

  function updateNumber() {
    count += target / 500;
    const formattedCount = Math.round(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    element.textContent = formattedCount;

    if (count < target) {
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();
}

statNumbers.forEach(animateNumber);


