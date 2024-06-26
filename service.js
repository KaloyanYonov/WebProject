document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function() {
        const service = document.querySelector('#service').value;
        const form = this.closest('.search-form');
        const region = form.querySelector('[name="region"]').value;
        const timePeriod = form.querySelector('[name="time-period"]').value;
        const diagram = document.querySelector('.diagram img');

        diagram.src = `/images/${service}-${region}-${timePeriod}.png`;
    });
});
