let name = prompt("Which box would you like to open:\nBreakfast\nAquatic\nBot\nMedieval\nOG\nSafari\nSpace\nWonderland")
let amt = null;
let i = 1;
if (confirm("Would you like to select the amount of boxes?\nOk - yes\nCancel - no")) {
    amt = Number(prompt("How many boxes would you like to open."))
} else {
    amt = 999999999999999999;
}

async function updateTokens() {
    $.get(`/worker/user/gettokens.php`)
        .then(function(response) {
            return response.text();
        }).then(function(data) {
            document.getElementById("tokensText").innerHTML = `${data}`;
        });
}

function openBox(tokens) {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(`${data}`);
        if (data === "NO TOKENS") {
            alert("You are poor, please get more money")
            window.location.reload();
        }
    });
}
setInterval(() => {
    if (i <= amt) {
        openBox();
        updateTokens();
        i++
    }
}, 50);
