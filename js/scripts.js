console.log("script.js loaded")

const URL = 'https://ozarktechwebdev.com/api/consoles.json'

const consolesButton = document.getElementById("loadConsoles")
const statusMessage = document.getElementById("statusMessage")
const displaySummary = document.getElementById("displaySummary")
const consoleGallery = document.getElementById("console-gallery")

// Functions
function getOldest(response) {
    var oldest = response.consoles[0];
    response.consoles.forEach(function(item){
        if (item.year < oldest.year) {
            oldest = item;
        }
    })
    return oldest;
}
function getNewest(response) {
    var newest = response.consoles[0];
    response.consoles.forEach(function(item){
        if (item.year > newest.year) {
            newest = item;
        }
    })
    return newest;
}

function getSummary(response) {
    var oldest = getOldest(response);
    var newest = getNewest(response);
    return `${response.consoles.length} consoles · Oldest: ${oldest.name} (${oldest.year}) · Newest: ${newest.name} (${newest.year})`;
}

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
                displaySummary.innerText = getSummary(response);
            } else {
                statusMessage.innerText = 'Failed to load consoles. Status: ' + xhr.status;
            }
        }
    };

    xhr.send();
});