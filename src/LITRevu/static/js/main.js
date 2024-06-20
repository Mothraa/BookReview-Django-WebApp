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

    // initialisation des tooltips avec Popper.js
    function initializeTooltip(element, tooltipElement, popperOptions = {}) {
        const defaultModifiers = [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'arrow',
                options: {
                    element: tooltipElement.querySelector('[data-popper-arrow]'),
                },
            },
        ];

        const modifiers = popperOptions.modifiers ? defaultModifiers.concat(popperOptions.modifiers) : defaultModifiers;

        const popperInstance = Popper.createPopper(element, tooltipElement, {
            placement: 'right',
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

    // Initialisation des tooltips pour les champs de saisie
    function initializeFieldTooltips() {
        const fields = document.querySelectorAll('input');
        fields.forEach((field) => {
            const tooltipId = 'tooltip-' + field.name;
            const tooltipElement = document.getElementById(tooltipId);

            if (tooltipElement) {
                initializeTooltip(field, tooltipElement);
            }
        });
    }



    // // Initialisation des tooltips pour les étoiles (rating)
    // function initializeStarTooltips() {
    //     const stars = document.querySelectorAll('.star');
    //     const tooltip = document.querySelector('.tooltip');

    //     stars.forEach((star) => {
    //         star.addEventListener('mouseenter', () => {
    //             const tooltipText = star.getAttribute('data-tooltip');
    //             tooltip.textContent = tooltipText;
    //             toggleTooltip(tooltip, true);
    //         });

    //         star.addEventListener('mouseleave', () => {
    //             toggleTooltip(tooltip, false);
    //         });

    //         initializeTooltip(star, tooltip, {
    //             modifiers: [
    //                 {
    //                     name: 'eventListeners',
    //                     enabled: false,
    //                 },
    //             ],
    //         });
    //     });
    // }

    initializeFieldTooltips();
    // initializeStarTooltips();

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


// tooltips
document.addEventListener('DOMContentLoaded', function () {
    var tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(function (element) {
        var tooltipText = element.getAttribute('data-tooltip');
        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip bg-black text-white text-xs rounded py-1 px-2 hidden absolute z-50';
        tooltip.innerText = tooltipText;
        document.body.appendChild(tooltip);
        
        Popper.createPopper(element, tooltip, {
            placement: 'top',
            modifiers: [{
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            }],
        });

        element.addEventListener('mouseenter', function () {
            tooltip.classList.remove('hidden');
        });

        element.addEventListener('mouseleave', function () {
            tooltip.classList.add('hidden');
        });
    });
});

// formulaire create_ticket : pour afficher le nom du fichier image une fois selectionné
function displayFileName() {
    const input = document.getElementById('image-upload');
    const fileName = input.files[0].name;
    document.getElementById('image-name').textContent = fileName;
}