let name = prompt("Which box would you like to open:\nBreakfast\nAquatic\nBot\nMedieval\nOG\nSafari\nSpace\nWonderland")
let amt = null;
if (confirm("Would you like to select the amount of boxes?\nOk - yes\nCancel - no")) {
    amt = Number(prompt("How many boxes would you like to open."))
} else {
    amt = 999999999999999999;
}
let i = 1;
let x = false;

fetch('https://code.jquery.com/jquery-3.4.1.min.js').then(function(response) {
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

function openBox(tokens) {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(`${data}`);
        if (data === "NO TOKENS") {
            alert("You are poor, please get more money")
        }
    });
}
var done = false;
setInterval(() => {
    if (i <= amt) {
        openBox();
        i++
    }
}, 50);
