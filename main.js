document.querySelector("#a").addEventListener("click", function(event) {
  event.preventDefault();
  let confirmation = confirm("Voulez-vous télécharger mon CV ?");
  if (confirmation) {
    window.location.href = "Khadim Bousso.pdf";
  }
});
// Animation du titre au chargement
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector("header h1");
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        title.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 500);
});

// Effet de survol sur les icônes sociales
document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.3)";
    });

    link.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});

// Confirmation avant envoi du formulaire
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let confirmation = confirm("Êtes-vous sûr de vouloir envoyer ce message ?");
    
    if (confirmation) {
        alert("Merci ! Votre message a été envoyé.");
        this.reset();  // Réinitialise le formulaire après envoi
    }
});
