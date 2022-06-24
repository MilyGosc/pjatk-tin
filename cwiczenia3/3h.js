// druga największa i najmniejsza liczba z tablicy
function seconds(array) {
    let sLargest = array.sort(function(a,b){return b-a})[1];
    let sLowest = array.sort(function(a,b){return b-a})[array.length-1];
    console.log('sec biggest: ' + sLargest + "; sec lowest: " + sLowest);
}