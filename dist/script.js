var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
  

function switchToDarkMode()  {
  
  let body=document.body;
  let switchIcon=document.getElementById("dark-id");
  let email=document.getElementById("visitor-email");
  let name=document.getElementById("visitor-name");
  let message=document.getElementById("visitor-message");
  body.classList.toggle("dark-mode");
  email.classList.toggle("dark-mode-input");
  name.classList.toggle("dark-mode-input");
  message.classList.toggle("dark-mode-input");
  switchIcon.classList.toggle("fa-sun");
}