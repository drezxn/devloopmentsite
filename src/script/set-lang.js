let currentLang = localStorage.getItem("language") || "en-us";

function loadLanguage(lang) {
      localStorage.setItem("language", lang);
      
      document.getElementById("lang-img").src = currentLang === "en-us" ? "src/flag-us.png" : "src/flag-br.png";
}

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "en-us" ? "pt-br" : "en-us";
  loadLanguage(currentLang);
});

loadLanguage(currentLang);