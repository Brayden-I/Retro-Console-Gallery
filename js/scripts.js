console.log("script.js loaded")

const URL = 'https://ozarktechwebdev.com/api/consoles.json'

const consolesButton = document.getElementById("loadConsoles")

// Add events
document.getElementById('loadConsoles').addEventListener('click', function() {
    console.log("button clicked");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
            }
        }
    };

    xhr.send();
});