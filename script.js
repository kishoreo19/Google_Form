function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        Qualification: document.getElementById("Qualification").value,
        Department: document.getElementById("Department").value,
        industry: document.getElementById("industry").value,
        role: document.getElementById("role").value,
        resume: document.getElementById("resume").value,
        area: document.getElementById("area").value
    };

    emailjs.send(
        "service_dll8xo3",
        "template_wjjva1f",
        parms
    )
    .then(function(response) {
        alert("Email Sent Successfully!");
        console.log("SUCCESS", response);
    })
    .catch(function(error) {
        alert("Email Failed!");
        console.log("ERROR", error);
    });
}