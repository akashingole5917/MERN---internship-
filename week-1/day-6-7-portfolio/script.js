// Scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"});
}

// Contact form alert
function submitForm(event) {
  event.preventDefault();
  let name = document.getElementById("cname").value;
  if (name == "") {
    alert("Please enter your name");
  } else {
    alert("Thank you " + name + "! Your message is sent.");
  }
}

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  });
});
