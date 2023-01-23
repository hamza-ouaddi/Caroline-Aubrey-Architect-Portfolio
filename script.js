const leftCards = document.querySelectorAll(".left-card");
const rightCards = document.querySelectorAll(".right-card");
const topCards = document.querySelectorAll(".top-card");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};
const leftAppearOptions = {};

//left card animation
const leftCardAppear = new IntersectionObserver(function (
  entries,
  leftCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      leftCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

leftCards.forEach((leftCard) => {
  leftCardAppear.observe(leftCard);
});

//right card animation
const rightCardAppear = new IntersectionObserver(function (
  entries,
  rightCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("r-show");
      rightCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

rightCards.forEach((rightCard) => {
  rightCardAppear.observe(rightCard);
});

//top card animation
const topCardAppear = new IntersectionObserver(function (
  entries,
  topCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("t-show");
      topCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

topCards.forEach((topCard) => {
  topCardAppear.observe(topCard);
});
