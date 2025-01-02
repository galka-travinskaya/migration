
(() => {
  const refs = {
    openModalBtn: document.querySelector('.button[data-modal-open]'),
    openHeaderModalBtn: document.querySelector('.button-header[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.backdrop[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openHeaderModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('.modal-open')
    refs.modal.classList.toggle('is-hidden');
  };

  const countries = document.querySelectorAll('input[name="country"]');

    let selectedCountries = [];

    countries.forEach(elem => {
        elem.addEventListener('change', () => {
            selectedCountries = Array.from(countries)
                .filter(item => item.checked)
                .map(box => box.value);
        });
    });

    document.querySelector('.btn-submit').addEventListener('click', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('tel').value;

        const data = { name, phone, email, country: selectedCountries };

        try {
            const response = fetch('https://shop-back-mh7t.onrender.com/api/client', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.log(error);
        }

        toggleModal();
    })
})();
    


