// function get_random_advice() {
//   fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(data => {
//       const advice = data.slip.advice;
//       const adviceContainer = document.getElementById('adviceContainer');
//       adviceContainer.innerHTML = `<p><strong>Advice:</strong> ${advice}</p>`;
//     })
//     .catch(error => {
//       console.error('Bir hata oluştu:', error);
//     });
// }

// // Kullanıcı bir tuşa bastığında tavsiyeyi alıyoruz
// document
//   .getElementById('getAdviceButton')
//   .addEventListener('click', get_random_advice);

function get_random_advice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id; // Tavsiye ID'sini al
      const adviceContainer = document.getElementById('adviceContainer');
      adviceContainer.innerHTML = ` "${advice}"`;

      const adviceHeader = document.getElementById('adviceHeader');
      adviceHeader.innerHTML = `<h5>ADVICE
      #${adviceId}</h5>`;
    })
    .catch(error => {
      console.error('Bir hata oluştu:', error);
    });
}

// Kullanıcı bir tuşa bastığında tavsiyeyi alıyoruz
document
  .getElementById('getAdviceButton')
  .addEventListener('click', get_random_advice);
