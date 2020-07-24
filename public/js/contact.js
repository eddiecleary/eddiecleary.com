const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = emailForm.querySelector("[name=name]").value;
  const email = emailForm.querySelector("[name=email]").value;
  const message = emailForm.querySelector("[name=message]").value;
  const captcha = emailForm.querySelector("#g-recaptcha-response").value;

  const token = document
    .querySelector('meta[name="csrf-token"')
    .getAttribute("content");

  fetch("/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "CSRF-Token": token,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      captcha: captcha,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
