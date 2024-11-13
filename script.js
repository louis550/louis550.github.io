// Fonction pour masquer le loader et afficher le contenu
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Appeler la fonction hideLoader après le chargement de la page
window.addEventListener('load', hideLoader);

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Mettre à jour l'horloge toutes les secondes
setInterval(updateClock, 1000);

// Initialiser l'horloge immédiatement
updateClock();

