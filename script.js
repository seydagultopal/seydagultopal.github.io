(() => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const languageToggle = document.querySelector(".language-toggle");
  let language = "en";

  const applyLanguage = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
      const value = element.dataset[language];
      if (value === undefined) return;
      if (element.querySelector("small")) {
        element.childNodes[0].textContent = value;
      } else if (value.includes("<br>")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
    languageToggle.querySelector(".lang-current").textContent = language.toUpperCase();
    languageToggle.querySelector(".lang-other").textContent = language === "en" ? "TR" : "EN";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Turkish" : "Switch to English");
    menuToggle.setAttribute("aria-label", language === "en" ? "Open navigation" : "Menüyü aç");
    document.title = language === "en" ? "Şeyda Gül Topal — Software Engineer" : "Şeyda Gül Topal — Yazılım Mühendisi";
  };

  languageToggle.addEventListener("click", () => applyLanguage(language === "en" ? "tr" : "en"));
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    document.body.classList.toggle("menu-open", isOpen);
  });
  nav.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.body.classList.remove("menu-open");
  }));
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 12 ? "0 8px 25px rgba(35,55,40,.06)" : "none";
  }, { passive: true });
  applyLanguage("en");
})();