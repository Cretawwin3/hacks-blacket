var postData = 'box=Add Tokens';
setInterval(() => {
    $.post('/worker/box/openbox.php', postData, function(data) {
        console.log(data)
    })
}, 501)
