

berserkarator();

function berserkarator() {

    chrome.storage.local.get("berserk", function(result) {
        console.log(result.berserk);

        if ((result.berserk) === "true") {
            console.log("BERSERK!!");
            setTimeout(function() {
                document.querySelector('button.berserk').click();
            }, 100);
        } else {
            console.log("nope");
        }

    });

}


/*
function getNote() {
    var nein = "nein";

    chrome.storage.local.get("berserk", function(result) {

        console.log(result.berserk);

        nein = (result.berserk);


        return nein;
    });

    return nein;
}


console.log("gut: " + getNote());


if (getNote() === "true") {
    console.log("BERSERK!!");
    setTimeout(function() {
        document.querySelector('button.berserk').click();
    }, 100);
} else {
    console.log("nope: " + goBerserk);
}

*/