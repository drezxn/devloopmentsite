fetch("src/data/home.json")
  .then(response => response.json())
  .then(data => {
    const privacyData = data[currentLang];
    
    document.getElementById("f1").textContent = privacyData.footer[0];
    document.getElementById("f2").textContent = privacyData.footer[1];
    document.getElementById("f3").textContent = privacyData.footer[2];
    
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));