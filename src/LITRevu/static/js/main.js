// tooltip pour le formulaire de création de compte et les étoiles (rating)

document.addEventListener('DOMContentLoaded', () => {
    // Affichage/masquage des tooltips
    function toggleTooltip(tooltipElement, show) {
        if (show) {
            tooltipElement.classList.remove('hidden', 'opacity-0');
            tooltipElement.classList.add('block', 'opacity-100');
        } else {
            tooltipElement.classList.remove('block', 'opacity-100');
            tooltipElement.classList.add('hidden', 'opacity-0');
        }
    }

    function initializeTooltip(element, tooltipElement, placement, popperOptions = {}) {
        const defaultModifiers = [
            { name: 'offset', options: { offset: [0, 8] } },
            { name: 'arrow', options: { element: tooltipElement.querySelector('[data-popper-arrow]') } }
            ];

        const modifiers = popperOptions.modifiers ? defaultModifiers.concat(popperOptions.modifiers) : defaultModifiers;

        const popperInstance = Popper.createPopper(element, tooltipElement, {
            placement: placement,
            modifiers: modifiers,
            });

        element.addEventListener('mouseenter', () => {
            toggleTooltip(tooltipElement, true);
            popperInstance.update();
        });

        element.addEventListener('mouseleave', () => {
            toggleTooltip(tooltipElement, false);
        });
    }

    // Initialisation pour les champs de saisie
    function initializeFieldTooltips() {
        const fields = document.querySelectorAll('input');
        fields.forEach((field) => {
            const tooltipId = 'tooltip-' + field.name;
            const tooltipElement = document.getElementById(tooltipId);

            if (tooltipElement) {
                initializeTooltip(field, tooltipElement, 'right');
            }
        });
    }

    // Initialisation pour les étoiles (rating)
    function initializeStarTooltips() {
        const starLabels = document.querySelectorAll('label[for^="star"]');
        starLabels.forEach((label, index) => {
            const tooltipId = 'tooltip-star' + (index + 1);
            const tooltipElement = document.getElementById(tooltipId);

            if (tooltipElement) {
                initializeTooltip(label, tooltipElement, 'top');
            }
        });
    }

    initializeFieldTooltips();
    initializeStarTooltips();
});


// mise en couleur des étoiles //
// Sélectionner tous les labels des étoiles et les trier dans l'ordre inversé
const starLabels = document.querySelectorAll('label[for^="star"]');

// Ajouter un écouteur d'événement à chaque label
starLabels.forEach(label => {
    label.addEventListener('click', function() {
        const id = this.getAttribute('for'); // Récupérer l'ID de l'input associé
        const radioInput = document.getElementById(id); // Sélectionner l'input radio correspondant

        // Réinitialise la couleur de toutes les étoiles
        starLabels.forEach(starLabel => {
            starLabel.classList.remove('text-yellow-400');
            starLabel.classList.remove('scale-125');
        });
        // console.log(id)
        // console.log(starLabels.length)
        // Met à jour la couleur des étoiles sélectionnées et inférieures
        let foundSelected = false;
        for (let i = starLabels.length - 1; i >= 0; i--) {
            const starLabel = starLabels[i];
            if (starLabel === this) {
                foundSelected = true;
            }
            if (foundSelected) {
                starLabel.classList.add('text-yellow-400');
                starLabel.classList.add('scale-125');
            }
        }

        // coche le bouton radio
        if (radioInput) {
            radioInput.checked = true;
        }
    });
});


// Fonction pour mettre à jour les étoiles dès le chargement de la page
function updateStarsOnLoad() {
    // Sélectionner tous les labels des étoiles
    const starLabels = document.querySelectorAll('label[for^="star"]');

    // Sélectionner l'input radio de notation actuellement sélectionné
    const currentRatingInput = document.querySelector('input[name="rating"]:checked');

    // Si un input radio de notation est sélectionné, mettre à jour les étoiles
    if (currentRatingInput) {
        updateStars(starLabels, currentRatingInput);
    }
}

// TODO : a déplacer dans un fichier JS spécifique a l'app ticket
// tooltips pour les étoiles
document.addEventListener('DOMContentLoaded', () => {
    // Affichage/masquage des tooltips
    function toggleTooltip(tooltipElement, show) {
        if (show) {
            tooltipElement.classList.remove('hidden', 'opacity-0');
            tooltipElement.classList.add('block', 'opacity-100');
        } else {
            tooltipElement.classList.remove('block', 'opacity-100');
            tooltipElement.classList.add('hidden', 'opacity-0');
        }
    }

// Exécuter la fonction d'initialisation des étoiles dès que le contenu de la page est chargé
document.addEventListener('DOMContentLoaded', () => {
    updateStarsOnLoad();
});


});


// TODO : a déplacer dans un fichier JS spécifique a l'app ticket

function openModal(button) {
    const modal = button.closest('.bg-white').querySelector('.deleteModal');
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.error('erreur modal');
    }
}

function closeModal(button) {
    const modal = button.closest('.deleteModal');
    if (modal) {
        modal.classList.add('hidden');
    } else {
        console.error('erreur modal');
    }
}

// Fermeture du modal lors du clic à l'extérieur
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.deleteModal');
    modals.forEach(modal => {
        if (modal && event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// Affiche le nom du fichier image selectionné avant envoi du formulaire.
// create_ticket.html et edit_ticket.html

function displayFileName() {
    const input = document.getElementById('image-upload');
    const fileName = input.files[0].name;
    document.getElementById('image-name').textContent = fileName;
}


