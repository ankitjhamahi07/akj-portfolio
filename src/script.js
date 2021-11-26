

function checkDarkMode() {
var body=document.body;

if( document.body.className.contains('dark-mode') ) {
      body.style.removeProperty("background");
      body.style.removeProperty("animation");
      body.style.backgroundColor="#121212";
}
}


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
  if(body.classList.contains("dark-mode")) {
      body.removeAttribute("animation"); 
      body.style.background="#121212";
  } else {
      body.removeAttribute("style");
      body.setAttribute("background", "background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);")
  }
  email.classList.toggle("dark-mode-input");
  name.classList.toggle("dark-mode-input");
  message.classList.toggle("dark-mode-input");
  switchIcon.classList.toggle("fa-sun");
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/ankitkumarjha.live/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerText = this.response.value;
}
xhr.send();

