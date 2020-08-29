// const emailForm = document.getElementById("emailForm");
// const captchaEl = document.getElementById('captcha');
// const emailBtn = document.getElementById('emailBtn');
// const btnText = document.getElementById('btnText');
// const spinner = document.getElementById('spinner');

// emailForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   captchaEl.style.display = 'none';
//   btnText.textContent = 'Sending';
//   emailBtn.classList.add('sending');

//   const name = emailForm.querySelector("[name=name]").value;
//   const email = emailForm.querySelector("[name=email]").value;
//   const message = emailForm.querySelector("[name=message]").value;
//   const captcha = emailForm.querySelector("#g-recaptcha-response").value;

//   const token = document
//     .getElementById('csrf')
//     .value;

//   fetch("/contact", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "CSRF-Token": token,
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       message: message,
//       captcha: captcha,
//     }),
//   })
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {
//       if (data.success) {
//         emailBtn.classList.toggle('sending');
//         emailBtn.classList.add('sent');
//         btnText.textContent = "Message Sent! I will reply to you shortly 😁";
//       } else {
//         emailBtn.classList.toggle('sending');
//         emailBtn.classList.add('error');
//         btnText.textContent = "Error in sending! Reload to try again or email me directly. 🙏"
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
