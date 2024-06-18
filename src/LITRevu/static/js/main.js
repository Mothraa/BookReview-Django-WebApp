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

    // Initialisation des tooltips pour les étoiles (rating)
    function initializeStarTooltips() {
        const stars = document.querySelectorAll('.star');
        const tooltip = document.querySelector('.tooltip');

        stars.forEach((star) => {
            star.addEventListener('mouseenter', () => {
                const tooltipText = star.getAttribute('data-tooltip');
                tooltip.textContent = tooltipText;
                toggleTooltip(tooltip, true);
            });

            star.addEventListener('mouseleave', () => {
                toggleTooltip(tooltip, false);
            });

            initializeTooltip(star, tooltip, {
                modifiers: [
                    {
                        name: 'eventListeners',
                        enabled: false,
                    },
                ],
            });
        });
    }


    initializeFieldTooltips();
    initializeStarTooltips();
});
