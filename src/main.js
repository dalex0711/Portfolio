 const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset(); 
    message.classList.remove("hidden"); 
    setTimeout(() => {
      message.classList.add("hidden"); 
    }, 5000);
  });