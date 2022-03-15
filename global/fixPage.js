fetch('https://raw.githubusercontent.com/ZasticBradyn/blacket-hacks/main/resources/fixPage.js').then(function(response) {
    if (!response.ok) {
        cosole.error("error fetching resource")
    }
    return response.blob();
}).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    var sc = document.createElement("script");
    sc.setAttribute("src", objectURL);
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
})
