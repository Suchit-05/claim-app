function submitClaim() {

    let name = document.getElementById("name").value;
    let policy = document.getElementById("policy").value;
    let amount = document.getElementById("amount").value;
    let message = document.getElementById("message");

    // Validation
    if (!name || !policy || !amount) {
        message.innerText = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    if (!/^POL\d+$/.test(policy)) {
        message.innerText = "Invalid Policy Number!";
        message.style.color = "red";
        return;
    }

    // Processing effect
    message.innerText = "Processing...";
    message.style.color = "black";

    setTimeout(() => {

        let status = amount < 1000 ? "Rejected" : "Approved";

        message.innerText = "Claim " + status + "!";
        message.style.color = status === "Approved" ? "green" : "red";

        addToHistory(name, policy, amount, status);

    }, 1500);
}

// Add to table
function addToHistory(name, policy, amount, status) {
    let table = document.getElementById("historyTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = policy;
    row.insertCell(2).innerText = amount;
    row.insertCell(3).innerText = status;
}

// Clear form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("policy").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("message").innerText = "";
}