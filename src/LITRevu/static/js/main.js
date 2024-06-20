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


// // comportement au clic de l'etoile (rating)
// document.addEventListener('DOMContentLoaded', function () {
// const labels = document.querySelectorAll('label');

// labels.forEach(label => {
//     label.addEventListener('click', function () {
//     // Désélectionne toutes les autres étoiles
//     labels.forEach(l => l.classList.remove('text-blue-500'));
//     // Sélectionne l'étoile cliquée
//     this.classList.add('text-blue-500');
//     });
// });
// });


// // Sélection des étoiles et du conteneur
// const stars = document.querySelectorAll('.star');
// const starContainer = document.getElementById('star-container');

// // Ajout des écouteurs d'événements pour chaque étoile
// stars.forEach((star, index) => {
//     star.addEventListener('mouseenter', () => {
//         // Modifier la couleur des étoiles précédentes
//         // console.log(stars)
//         // console.log(starContainer)
//         // console.log(index)
//         for (let i = 0; i <= index; i++) {
//             stars[i].classList.remove('text-gray-600');
//             stars[i].classList.add('fill-yellow-400');
//         }
//     });

//     star.addEventListener('mouseleave', () => {
//         // Remettre la couleur d'origine des étoiles précédentes
//         for (let i = 0; i <= index; i++) {
//             stars[i].classList.remove('fill-yellow-400');
//             stars[i].classList.add('text-gray-600'); //  --tw-text-opacity: 1;
//         }
//     });
// });

// // Récupération des éléments nécessaires
// const starsContainer = document.getElementById('stars');
// const stars = starsContainer.querySelectorAll('.star');
// const scoreInput = document.getElementById('score');
// const tooltip = document.getElementById('tooltip');

// // Gestion du survol des étoiles
// stars.forEach(star => {
//     star.addEventListener('mouseenter', function() {
//         const value = parseInt(star.getAttribute('data-value'));

//         // Mettre à jour le tooltip
//         tooltip.textContent = star.getAttribute('data-tooltip');
//         tooltip.style.opacity = '1';

//         // Mettre à jour la couleur de remplissage des étoiles
//         stars.forEach(s => {
//             const sValue = parseInt(s.getAttribute('data-value'));
//             if (sValue <= value) {
//                 s.querySelector('use').classList.add('fill-yellow-400');
//             } else {
//                 s.querySelector('use').classList.remove('fill-yellow-400');
//             }
//         });
//     });

//     star.addEventListener('mouseleave', function() {
//         tooltip.style.opacity = '0';

//         // Réinitialiser la couleur de remplissage des étoiles
//         stars.forEach(s => {
//             s.querySelector('use').classList.remove('fill-yellow-400');
//         });
//     });

//     // Gestion du clic sur une étoile
//     star.addEventListener('click', function() {
//         const value = parseInt(star.getAttribute('data-value'));

//         // Mettre à jour la valeur du score
//         scoreInput.value = value;

//         // Réinitialiser la couleur de remplissage des étoiles
//         stars.forEach(s => {
//             s.querySelector('use').classList.remove('fill-yellow-400');
//         });

//         // Cacher le tooltip après la sélection
//         tooltip.style.opacity = '0';
//     });
// });

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
document.getElementById('id_image').onchange = function () {
    var fileName = this.value.split('\\').pop();
    document.getElementById('image-name').innerText = fileName ? 'Selected Image: ' + fileName : '';
  };