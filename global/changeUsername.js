function changeUsername() {
    var newUsername = prompt("Enter your new username.");
    var postData = `value=${newUsername}`;
    $.post('/worker/user/updateusername.php', postData, function(data) {
        navigator.clipboard.writeText(newUsername);
        alert("copied username to clipboard")
    });
}
changeUsername()
