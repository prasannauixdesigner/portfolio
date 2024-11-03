//Smooth Scrolling effect

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scroll({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
});

//cursor animation
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
});

//Data animate
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll("[data-animate]");

  function checkElements() {
    animatedElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Check elements on initial load
  checkElements();

  // Check elements on scroll
  window.addEventListener("scroll", checkElements);
});
