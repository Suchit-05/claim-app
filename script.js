function submitClaim() {
    let name = document.getElementById("name").value;
    let policy = document.getElementById("policy").value;
    let amount = document.getElementById("amount").value;

    if(name && policy && amount) {
        document.getElementById("message").innerText = "Claim Submitted Successfully!";
    } else {
        document.getElementById("message").innerText = "Please fill all fields!";
    }
}