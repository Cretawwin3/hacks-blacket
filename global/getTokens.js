function updateTokens() {
    $.get(`/worker/user/gettokens.php`, function(data) {
        var x = Number(data).toLocaleString()
        document.getElementById("tokensText").innerHTML = `${x}`;
    });
}
setInterval(() => {
    $.post('/worker/change tokens.php', '')
    updateTokens()
}, 501)
