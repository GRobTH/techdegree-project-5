function searchFilter() {
    let input = document.getElementById("search");
    input = input.value.toLowerCase();

    // Loop
    for(let i = 0; i < 12; i++) {
        let searchTerm = document.getElementsByTagName("img")[i].getAttribute("alt");
        let itMatches = searchTerm.includes(input)

        if (!itMatches) {
            document.getElementsByTagName("a")[i].style.display = "none";
            document.getElementsByTagName("img")[i].style.display = "none";
        } else {
            document.getElementsByTagName("a")[i].style.display = "initial";
            document.getElementsByTagName("img")[i].style.display = "initial";
        }
    }
}

