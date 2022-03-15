site = window.location.pathname;

fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/error.js').then(function(response) {
    if (!response.ok) {
        cosole.log("error fetching error.js")
    }
    return response.blob();
}).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    var sc = document.createElement("script");
    sc.setAttribute("src", objectURL);
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
})

switch (site) {
    case "/market.php":
        fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/market.js').then(function(response) {
            if (!response.ok) {
                cosole.log("error fetching modified code")
            }
            return response.blob();
        }).then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            var sc = document.createElement("script");
            sc.setAttribute("src", objectURL);
            sc.setAttribute("type", "text/javascript");
            document.head.appendChild(sc);
        })
    case "blooks.php":
        fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/blooks.js').then(function(response) {
            if (!response.ok) {
                cosole.log("error fetching modified code")
            }
            return response.blob();
        }).then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            var sc = document.createElement("script");
            sc.setAttribute("src", objectURL);
            sc.setAttribute("type", "text/javascript");
            document.head.appendChild(sc);
            addBlooks();
            showBlooks();
        })
    case "admin_boxes.php":
        fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/adminbox.js').then(function(response) {
            if (!response.ok) {
                cosole.log("error fetching modified code")
            }
            return response.blob();
        }).then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            var sc = document.createElement("script");
            sc.setAttribute("src", objectURL);
            sc.setAttribute("type", "text/javascript");
            document.head.appendChild(sc);
        })
    case "admin_blooks.php":
        fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/adminblook.js'.then(function(response) {
            if (!response.ok) {
                cosole.log("error fetching modified code")
            }
            return response.blob();
        }).then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            var sc = document.createElement("script");
            sc.setAttribute("src", objectURL);
            sc.setAttribute("type", "text/javascript");
            document.head.appendChild(sc);
        }))
}
