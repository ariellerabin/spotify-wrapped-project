document.addEventListener("DOMContentLoaded", function() {
    // Get references to your buttons
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");

    // Add click event listeners
    btn1.addEventListener("click", function() {
        window.location.href = "index.html"; // Redirect to home
    });

    btn2.addEventListener("click", function() {
        window.location.href = "interactive.html"; // Redirect to interactive
    });
    btn3.addEventListener("click", function() {
        window.location.href = "static.html"; // Redirect to static
    });
    btn4.addEventListener("click", function() {
        window.location.href = "conclusions.html"; // Redirect to conclusions
    });
});
