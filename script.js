(() => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const languageToggle = document.querySelector(".language-toggle");
  let language = "en";

  const applyLanguage = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language === "tr" ? "tr" : "en";
    document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });
    const current = languageToggle.querySelector(".lang-current");
    const other = languageToggle.querySelector(".lang-other");
    current.textContent = language.toUpperCase();
    other.textContent = language === "en" ? "TR" : "EN";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Turkish" : "Switch to English");
    menuToggle.setAttribute("aria-label", language === "en" ? "Open navigation" : "Menüyü aç");
    document.title = language === "en"
      ? "Şeyda Gül Topal — Software Engineer"
      : "Şeyda Gül Topal — Yazılım Mühendisi";
  };

  languageToggle.addEventListener("click", () => applyLanguage(language === "en" ? "tr" : "en"));

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.classList.remove("menu-open");
    });
  });

  const updateHeader = () => {
    header.style.boxShadow = window.scrollY > 12 ? "0 8px 25px rgba(35,55,40,.06)" : "none";
  };
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  applyLanguage("en");
})();