console.log("script.js loaded")

const URL = 'https://ozarktechwebdev.com/api/consoles.json'

const consolesButton = document.getElementById("loadConsoles")
const statusMessage = document.getElementById("statusMessage")
const consoleGallery = document.getElementById("console-gallery")

// Add events
consolesButton.addEventListener('click', function() {
    console.log("button clicked");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                
                var data = response.consoles;
                consoleGallery.innerHTML = ""; // clear the gallery before adding new data
                
                data.forEach(function(item){
                       var consoleElement = document.createElement('div');
                       
                       consoleElement.classList.add('console');
                       var img = document.createElement('img');
                       img.src = item.image;
                       img.alt = `${item.name} gaming system`;
                       img.classList.add('console-image');
                       consoleElement.appendChild(img);
                       
                       var title = document.createElement('h2');
                       title.innerText = item.name;
                       consoleElement.appendChild(title);
                       
                       var manufacturer = document.createElement('p');
                       manufacturer.innerText = `${item.manufacturer}  ${item.year}`;
                       consoleElement.appendChild(manufacturer);
                       
                       consoleGallery.appendChild(consoleElement);
                })
            } else {
                statusMessage.innerText = 'Failed to load consoles. Status: ' + xhr.status;
            }
        }
    };

    xhr.send();
});