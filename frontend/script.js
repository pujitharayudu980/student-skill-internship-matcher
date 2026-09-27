document.getElementById("findInternshipsBtn").addEventListener("click", function() {
    alert("Welcome to SkillBridge! 🚀");
});
const internshipButtons = document.querySelectorAll(".internship-card button");

internshipButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Internship details coming soon! 🚀");
    });
});