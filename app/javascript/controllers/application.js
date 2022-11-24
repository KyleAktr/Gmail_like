import { Application } from "@hotwired/stimulus"

const application = Application.start()
const show = document.getElementById("show");
const response = document.querySelector("p");

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

show.addEventListener('click', () => {
    console.log("bonjour");
    // response.classList.add("show-response");
    show.style.background = "red";
    
});