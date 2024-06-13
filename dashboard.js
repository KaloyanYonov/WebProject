    document.addEventListener("DOMContentLoaded", function () {
        const radius = 210;
        const elements = document.querySelectorAll('main > div');
        const container = document.querySelector('main');
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;
        const angleStep = 360 / elements.length;

        elements.forEach((elem, index) => {
            const angle = angleStep * index;
            const radian = angle * Math.PI / 180;
            elem.style.left = `${centerX + radius * Math.cos(radian) - elem.offsetWidth / 2}px`;
            elem.style.top = `${centerY + radius * Math.sin(radian) - elem.offsetHeight / 2}px`;
        });
    });
