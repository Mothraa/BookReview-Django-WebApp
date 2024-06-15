// pour l'utilisation d'infobulles avec popper.js

document.addEventListener('DOMContentLoaded', function () {
    const fields = document.querySelectorAll('input');

    fields.forEach(function (field) {
        const tooltipId = 'tooltip-' + field.name;
        const tooltipElement = document.getElementById(tooltipId);

        if (tooltipElement) {
            const popperInstance = Popper.createPopper(field, tooltipElement, {
                placement: 'right',
                modifiers: [
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
                ],
            });

            field.addEventListener('mouseenter', function () {
                tooltipElement.classList.remove('hidden', 'opacity-0');
                tooltipElement.classList.add('block', 'opacity-100');
                popperInstance.update();
            });

            field.addEventListener('mouseleave', function () {
                tooltipElement.classList.remove('block', 'opacity-100');
                tooltipElement.classList.add('hidden', 'opacity-0');
            });
        }
    });
});

// survol du menu principal
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a.text-green-700');

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             alert(`You clicked on ${this.textContent}`);
//         });
//     });
// });