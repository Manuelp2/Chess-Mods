var berserk = false;

getBerserk("berserk")

chrome.browserAction.onClicked.addListener(toggleIcon);

function setIcon(enable) {
    if (enable) {
        chrome.browserAction.setIcon({
            path: {
                19: "icons/star-filled-19.png",
                38: "icons/star-filled-38.png"
            }
        });
    } else {
        chrome.browserAction.setIcon({
            path: {
                19: "icons/star-empty-19.png",
                38: "icons/star-empty-38.png"
            }
        });
    }
}

function toggleIcon() {

    if (berserk) {
        setIcon(false);
        berserk = false;
        storeBerserk("false");

    } else {
        setIcon(true);
        berserk = true;
        storeBerserk("true");
    }
}

function storeBerserk(body) {

    chrome.storage.local.set({'berserk': body}, function() {

    });

}

function getBerserk(title) {
    chrome.storage.local.get(title, function(result) {
        if (result.berserk === "true") {
                setIcon(true);
        } else {
                setIcon(false);
        }
    });
}

document.addEventListener('DOMContentLoaded', getBerserk("berserk"));
