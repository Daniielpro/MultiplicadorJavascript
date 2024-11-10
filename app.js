document.getElementById("multForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
});
