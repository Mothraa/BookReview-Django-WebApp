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

        // Réinitialiser les couleurs de toutes les étoiles
        starLabels.forEach(starLabel => {
            starLabel.classList.remove('text-yellow-400');
        });

        // Mettre à jour la couleur des étoiles sélectionnées et inférieures
        let foundSelected = false;
        for (let i = starLabels.length - 1; i >= 0; i--) {
            const starLabel = starLabels[i];
            if (starLabel === this) {
                foundSelected = true;
            }
            if (foundSelected) {
                starLabel.classList.add('text-yellow-400');
            }
        }

        // Cocher l'input radio correspondant
        if (radioInput) {
            radioInput.checked = true;
        }
    });
});


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




});
// formulaire create_ticket : pour afficher le nom du fichier image une fois selectionné
function displayFileName() {
    const input = document.getElementById('image-upload');
    const fileName = input.files[0].name;
    document.getElementById('image-name').textContent = fileName;
}


// modal de suppression d'un ticket
function openModal(ticket_id) {
    const modal = document.getElementById('deleteModal');
    const form = document.getElementById('deleteForm');
    form.action = `/ticket/${ticket_id}/delete/`;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('deleteModal');
    modal.classList.add('hidden');
}

// fermeture du modal lors du click a l'exterieur
document.addEventListener('click', function(event) {
    const modal = document.getElementById('deleteModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});