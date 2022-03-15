let name = prompt("Which box would you like to open (Example: Color)")
let amt = null;
let i = 1;
if (confirm("Would you like to select the amount of boxes?\nOk - Yes\nCancel - No")) {
    amt = Number(prompt("How many boxes would you like to open."))
} else {
    amt = 99999999999999999999999;
}

function updateTokens() {
    $.get(`/worker/user/gettokens.php`, function(data) {
        document.getElementById("tokensText").innerHTML = `${data}`;
    });
}

function openBox() {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(`${data}`);
        if (data === "NO TOKENS") {
            alert("You are poor, please get more money")
            window.location.reload();
        }
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        openBox();
        updateTokens();
        i++;
    } else {
        clearInterval(check);
        alert("Dony buying boxes")
    }
}, 501);
