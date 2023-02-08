//  problem - 1
function radianToDegree(radian){
    if(typeof radian !== 'number')  // Check valid input
        return "Please enter a valid input.";
    else {
        const degree = radian * (180 / 3.1416);
        return degree.toFixed(2);
    }
}

// problem - 2
function isJavaScriptFile(fileExtension){
    // Check valid input also file extension
    if (typeof fileExtension == 'string' && fileExtension.endsWith("js")) {
        return true;
    }
    else
        return "Please enter the valid input.";
}

//  Problem - 3
function oilPrice(diesel, patrol, octen){
    if (typeof diesel === 'number' && typeof patrol === 'number' && typeof octen === 'number') { // check valid input
        const totalPrice =  (diesel * 114) +
                            (patrol * 130) +
                            (octen * 135);
        return totalPrice;
    }
    else
        return "Please enter a valid input";
}

//  Problem - 4
function publicBusFare(peoples){
    if (typeof peoples === 'number') {  // check valid input
        let remaining = Math.floor(peoples / 50);
        let remainingMicro = 50 * remaining;
        let reamingFistMicro = peoples - remainingMicro;
        let remainingMini = Math.floor(reamingFistMicro / 11);
        let remainingFirstMini = remainingMini * 11;
        let remainingPublic = peoples - remainingMicro - remainingFirstMini;

        return remainingPublic * 250;
    }
    else
        return "Please enter a valid input";
}

// problem - 5
function isBestFriend(friends) {
    if (typeof friends === 'object') {  // Check valid input
        if ((friends[0].name === friends[1].friend) && friends[0].friend === friends[1].name)
            return true;
        else
            return false;
    }
    else
        return "Please enter a valid input";
}