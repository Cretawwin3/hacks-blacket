let name = prompt("Which box would you like to open (Example: Color)");
let amt = null;
let i = 1;
if (confirm("Would you like to select the amount of boxes?\nOk - Yes\nCancel - No")) {
    amt = Number(prompt("How many boxes would you like to open."));
} else {
    amt = 99999999999999999999999;
}

function buyBox() {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        dataSplit = data.split('|')
        window.blookRarity = dataSplit[1];
        window.blookUnlocked = dataSplit[0];
        if (blookRarity === "Uncommon") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lime;', `${blookUnlocked}`);
        } else if (blookRarity === "Rare") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px blue;', `${blookUnlocked}`);
        } else if (blookRarity === "Epic") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px red;', `${blookUnlocked}`);
        } else if (blookRarity === "Legendary") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px gold;', `${blookUnlocked}`);
        } else if (blookRarity === "Chroma") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px skyblue;', `${blookUnlocked}`);
        } else if (blookRarity === "Perfect") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lemonchiffon;', `${blookUnlocked}`);
        } else if (blookRarity === "Mystical") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px plum;', `${blookUnlocked}`);
        } else if (blookRarity === "Divine") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px violet;', `${blookUnlocked}`);
        } else if (blookRarity === undefined) {}
        if (data === "You're being rate limited.") {
            i--;
        }
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Dony buying boxes");
    }
}, 751);
