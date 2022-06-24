// czy jest palindromem
function checkPalindrom (str) {
    console.log(str == str.split('').reverse().join(''));
}