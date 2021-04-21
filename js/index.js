if (getUrlVars().file != null) {
    console.log(getUrlVars().file)

    const xmlrequest = new XMLHttpRequest()
    xmlrequest.overrideMimeType("application/json")
    xmlrequest.open("GET", decodeURIComponent(getUrlVars().file), true)
    xmlrequest.onload = function () {
        config = JSON.parse(xmlrequest.responseText);
        createButtons()
    }
    xmlrequest.send()
}

function createButtons() {
    for (i of config.sounds) {
        const button = document.createElement("button")
        button.setAttribute("onclick", `playSound('${i.url}')`)
        button.setAttribute("class", "sound")
        button.appendChild(document.createTextNode(i.name))
        document.getElementById("buttons_panel").appendChild(button)
    }
    if (config.name != null) {
        document.getElementById("title_text").innerHTML = config.name
        document.getElementById("tab_title").innerHTML = config.name
    }
    if (config.image != null) {
        document.getElementById("custom_image").src = config.image
        document.getElementById("tab_icon").href = config.image
    }
}

function playSound(url) {
    var audio = new Audio(url);
    audio.play();
}



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}