// function to calculate if the input strings have the same length

function sameLength(a, b) {
    return a.length === b.length;
}

// function to calculate if the input strings have the same characters 
function sameContent(a, b) {

    // pass the two strings to lowercase for cases where some strings have uppercase
    var auxA = a.toLowerCase().split('');
    var auxB = b.toLowerCase().split('');

    var c = auxA.filter(v => auxB.indexOf(v) !== -1);

    return c.length === auxA.length;
}


function funWithAnagrams(text) {
    var i = 0;
    while (true) {
        var sL = sameLength(text[i], text[i + 1]);
        var sC = sameContent(text[i], text[i + 1]);

        if (sL && sC) {
            text.splice(i + 1, 1);
        } else {
            i++;
        }

        if (!text[i + 1]) {
            break
        }
    }
    return text.sort();

}