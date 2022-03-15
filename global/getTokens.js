function updateTokens() {
    $.get(`/worker/user/gettokens.php`, function(data) {
        document.getElementById("tokensText").innerHTML = `${data}`;
    });
}
var postData = 'box=Add Tokens';
setInterval(() => {
    $.post('/worker/box/openbox.php', postData)
    updateTokens()
}, 501)
