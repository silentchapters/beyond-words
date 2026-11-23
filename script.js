
/* =================================
   BEYOND WORDS
   Everything My Heart Holds
   ================================= */

// Generate stars across the sky

const starField = document.querySelector(".stars");

if (starField) {
  for (let i = 0; i < 120; i++) {
    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 75 + "%";

    star.style.animationDelay =
      Math.random() * 5 + "s";

    star.style.animationDuration =
      2 + Math.random() * 4 + "s";

    const size = 1 + Math.random() * 2;

    star.style.width = size + "px";
    star.style.height = size + "px";

    starField.appendChild(star);
  }
}

// Enter the universe

const enterButton = document.querySelector(".enter-button");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    const entrance = document.querySelector(".intro");

    if (entrance) {
      entrance.style.transition = "opacity 1.5s ease";
      entrance.style.opacity = "0";

      setTimeout(() => {
        entrance.style.display = "none";

        const universe = document.querySelector(".constellation");

        if (universe) {
          universe.classList.add("active");
        }
      }, 1500);
    }
  });
}

// Interactive constellation stars

const constellationStars =
  document.querySelectorAll(".constellation-star");

const messagePanel =
  document.querySelector(".message-panel");

const messageTitle =
  document.querySelector(".message-title");

const messageText =
  document.querySelector(".message-text");

const closeMessage =
  document.querySelector(".close-message");

const messages = {
  memories: {
    title: "Memories",
    text: "Some moments become quiet treasures that time cannot take away."
  },

  promises: {
    title: "Promises",
    text: "Some words are not meant to be spoken once. They are meant to be lived."
  },

  gratitude: {
    title: "Gratitude",
    text: "For the little things, the meaningful moments, and everything worth appreciating."
  },

  dreams: {
    title: "Dreams",
    text: "Some hopes are carried quietly, waiting for their own time to bloom."
  },

  
beyond: {
  title: "Beyond Words",
  text: "And then there are feelings that words simply cannot contain."
},
prayer: {
  title: "Prayer",
  text: "A quiet place for the words you choose to share."
},
devotion: {
  title: "Devotion",
  text: "A little space for what devotion means to you."
}
};

// Open individual messages

const openMessage = (key) => {
  const message = messages[key];

  if (!message || !messagePanel) return;

  messageTitle.textContent = message.title;
  messageText.textContent = message.text;

  messagePanel.classList.add("visible");
};

const closePanel = () => {
  if (messagePanel) {
    messagePanel.classList.remove("visible");
  }
};

const stars = document.querySelectorAll(".constellation-star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const key = star.dataset.message;
    openMessage(key);
  });
});

if (closeMessage) {
  closeMessage.addEventListener("click", closePanel);
}
