const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    media: "Media",
    about: "About",
    contact: "Contact"
  },

  no: {
    home: "Hjem",
    projects: "Prosjekter",
    media: "Media",
    about: "Om meg",
    contact: "Kontakt"
  }
};

function applyTranslations() {

  const lang = localStorage.getItem("language") || "en";

  document.querySelectorAll("[data-translate]")
    .forEach(element => {

      const key = element.dataset.translate;

      element.textContent = translations[lang][key];

    });

}

applyTranslations();