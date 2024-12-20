addEventListener('load', () => {
    setNavigation();
});

function setNavigation() {
    const currentNavigation = document.location.pathname;

    if (currentNavigation.includes("index.html")) {
        setButtonActive("home")
    } else if (currentNavigation.includes("about")) {
        setButtonActive("about")
    } else if (currentNavigation.includes("downloads")) {
        setButtonActive("downloads")
    } else if (currentNavigation.includes("documentation")) {
        setButtonActive("documentation")
    } else if (currentNavigation.includes("community")) {
        setButtonActive("community")
    } else if (currentNavigation.includes("foundation")) {
        setButtonActive("foundation")
    }
}

function setButtonActive(type) {
    const button = document.getElementById("navlink-" + type);
    button.classList.add("active");
}