let counter = 0;

document.getElementById("button").addEventListener("click", () => {
    counter++;
    document.getElementById("viewer").innerHTML = counter;
})