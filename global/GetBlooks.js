alert("started spamming API")
function openBox(name) {
    var postData = 'box=' + name;
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(`${data}`);
        if (data === "NO TOKENS") {
            alert("You are poor, please get more money")
            window.location.reload();
        }
    });
}
for (let i = 1; i <= window.maxID; i++) {
    $.get(`/worker/misc/getbox.php?id=${i}`, function(data) {
        dataSplit = data.split('|')
        var boxName = dataSplit[0];
        setInterval(() => {
        openBox(boxName);
        }, 5)
    });
}
