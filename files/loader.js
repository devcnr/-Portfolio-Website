window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    content.style.display = "none";
  
    setTimeout(() => {
      loader.style.animation = "fadeOutUp .5s forwards";
    }, 3000);
  
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
      setTimeout(() => {
        content.classList.add("visible");
      }, 50);
    }, 3500);
  });
  Açıklama