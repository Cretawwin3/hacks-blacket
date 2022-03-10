let name = prompt("Which box would you like to open:\nBreakfast\nAquatic\nBot\nMedieval\nOG\nSafari\nSpace\nWonderland")
let amt = null;
let i = 1;
if (confirm("Would you like to select the amount of boxes?\nOk - yes\nCancel - no")) {
    amt = Number(prompt("How many boxes would you like to open."))
} else {
    amt = 999999999999999999;
}
function openBox(tokens) {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(`${data}`);
        if (data === "NO TOKENS") {
            alert("You are poor, please get more money")
        }
    });
}
setInterval(() => {
    if (i <= amt) {
        openBox();
        i++
    }
}, 50);
