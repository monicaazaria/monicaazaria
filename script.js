function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "no" : "en";

  localStorage.setItem("language", newLang);
  location.reload();
}