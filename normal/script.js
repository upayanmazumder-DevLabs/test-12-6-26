function showAlert() {
    alert("This is an alert message!");
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

function varuna() {
    const btn = document.getElementById("flower");
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
}

function revertVaruna() {
    const btn = document.getElementById("flower");
    btn.style.backgroundColor = "";
    btn.style.color = "";
}