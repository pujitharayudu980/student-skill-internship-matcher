document.addEventListener("DOMContentLoaded", function() {

    // Explore Internships button
    const findButton = document.getElementById("findInternshipsBtn");

    if (findButton) {
        findButton.addEventListener("click", function() {
            alert("Welcome to SkillBridge! 🚀");
        });
    }

    // Internship buttons
    const internshipButtons = document.querySelectorAll(".internship-card button");

    internshipButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Internship details coming soon! 🚀");
        });
    });

    // Student Profile button
    const profileButton = document.getElementById("createProfileBtn");

    if (profileButton) {
        profileButton.addEventListener("click", function() {

            const name = document.getElementById("studentName").value;
            const branch = document.getElementById("studentBranch").value;
            const skills = document.getElementById("studentSkills").value;
            const interest = document.getElementById("studentInterest").value;

            if (name === "" || branch === "" || skills === "" || interest === "") {
                alert("Please fill all the details.");
                return;
            }

            alert(
                "Profile Created Successfully! 🎉\n\n" +
                "Name: " + name +
                "\nBranch: " + branch +
                "\nSkills: " + skills +
                "\nInterest: " + interest
            );
        });
    }

});