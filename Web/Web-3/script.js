function bookNow() {
    var name = document.getElementById("name").value;
    var price = document.getElementById("place").value;
    var persons = document.getElementById("persons").value;
    if (name == "" || price == "" || persons == "") {
        alert("Please fill all fields");
        return;
    }
    var total = price * persons;
    document.getElementById("result").innerHTML =
        "Booking Confirmed for " + name +
        "<br>Total Amount: ₹" + total;
}