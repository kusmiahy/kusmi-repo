var jschecker;

function init() {
    jschecker = checkLoaded();
    if (jschecker) {
        console.log('Script started');
        // =require specific/2024/simple_carousel.js
        // =require specific/2023/certifs_bio.js
    } else {
        setTimeout(init);
    }
}

function checkLoaded() {
    console.log('page is fully loaded');
    return true;
}

init();