const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const observedSections = [...document.querySelectorAll("main section[id]")];

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${visible.target.id}`,
      );
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.5] },
);

observedSections.forEach((section) => navObserver.observe(section));

const defaultPageColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--ink")
  .trim();
const toneTargets = [...document.querySelectorAll("[data-page-tone]")];

function createSoftPageColor(element) {
  if (element.dataset.pageTone !== "project") return defaultPageColor;

  const match = getComputedStyle(element).backgroundColor.match(/\d+(?:\.\d+)?/g);
  if (!match) return defaultPageColor;

  const [red, green, blue] = match.map(Number);
  const ink = [13, 15, 14];
  const strength = 0.18;
  const softened = [red, green, blue].map((channel, index) =>
    Math.round(ink[index] + (channel - ink[index]) * strength),
  );

  return `rgb(${softened.join(", ")})`;
}

const backgroundObserver = new IntersectionObserver(
  (entries) => {
    const activeTarget = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!activeTarget) return;

    document.documentElement.style.setProperty(
      "--page-background",
      createSoftPageColor(activeTarget.target),
    );
  },
  {
    rootMargin: "-28% 0px -38%",
    threshold: [0.1, 0.25, 0.5, 0.75],
  },
);

toneTargets.forEach((target) => backgroundObserver.observe(target));
