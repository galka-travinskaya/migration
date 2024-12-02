// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   // refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open')
//     // refs.modal.classList.toggle('is-hidden');
//   };

//   document.querySelector('.btn-submit').addEventListener('click', () => {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('tel').value;
//     const data = { name, phone, email };
  
//     try {
//         const response = fetch('https://shop-back-mh7t.onrender.com/api/client', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//     } catch (error) {
//         console.log(error);
//     }
//   })
// })();



// const btnSubmitEl = document.querySelector(".btn-submit[data-modal-close]");
// const btnCloseModal = document.querySelector(".icon-close[data-modal-close]");


// btnSubmitEl.addEventListener('click', function () {
      

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('tel').value;
//     const data = { name, phone, email };
  
//     try {
//         const response = fetch('https://shop-back-mh7t.onrender.com/api/client', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//     } catch (error) {
//         console.log(error);
//     };

//     console.log('submit'); 
//   });

// btnCloseModal.addEventListener('click', function () {
//     console.log('close');
    
// })

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

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const data = { name, phone, email };
  
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

    
  })
})();


