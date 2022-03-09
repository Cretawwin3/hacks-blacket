function error() {
    if (confirm("an error has ocured, would you like to report this on github?")) {
        window.open("https://github.com/ZasticBradyn/blacket-hacks/issues")
    }
    console.log("error")
}
