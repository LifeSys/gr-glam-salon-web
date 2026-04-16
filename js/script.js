const WHATSAPP_NUMBER = "51942303829";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

const openWhatsApp = () => {
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

document.querySelectorAll(".whatsapp").forEach((element) => {
  const isButton = element.tagName === "BUTTON";

  if (isButton) {
    element.addEventListener("click", openWhatsApp);
    return;
  }

  element.setAttribute("href", whatsappUrl);
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
});

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((item) => observer.observe(item));
} else {
  revealElements.forEach((item) => item.classList.add("is-visible"));
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
