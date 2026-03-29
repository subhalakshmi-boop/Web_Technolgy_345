// Welcome message
window.onload = function () {
    alert("Welcome to Star Health Care!");
};

// Appointment validation
function validateAppointment() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || age === "" || phone === "") {
        alert("Fill all fields!");
        return false;
    }

    if (phone.length != 10) {
        alert("Enter valid phone number!");
        return false;
    }

    alert("Appointment Booked!");
    return true;
}

// Contact validation
function validateContact() {
    let name = document.getElementById("cname").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Fill all fields!");
        return false;
    }

    alert("Message Sent!");
    return true;
}