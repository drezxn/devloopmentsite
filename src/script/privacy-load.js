fetch("src/data/privacy.json")
  .then(response => response.json())
  .then(data => {
    const privacyData = data[currentLang];
    
    document.getElementById("title").textContent = privacyData.title;
    
    const list = document.getElementById("privacy-list");
    privacyData.privacy.forEach(clause => {
      const li = document.createElement("li");
      li.textContent = clause;
      list.appendChild(li);
    });
    
    document.getElementById("contact").textContent = privacyData.contact;
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));
  
fetch("src/data/home.json")
  .then(response => response.json())
  .then(data => {
    const privacyData = data[currentLang];
    
    document.getElementById("f1").textContent = privacyData.footer[0];
    document.getElementById("f2").textContent = privacyData.footer[1];
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));