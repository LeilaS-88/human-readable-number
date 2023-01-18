module.exports = function toReadable (number) {
    let finalNumber = '';    
    
    if(number == 0) {
        finalNumber = 'zero';
    } else if(number < 20) {
        let one = findOnes(number);
        finalNumber = one;
    } else if(19 < number && number < 100) {
        let ten = findTens(number);
        let number1 = number % 10;
        let one = findOnes(number1);

        finalNumber = concatWords(ten, one);
    } else if(99 < number && number < 1000) {
        let a = Math.floor(number / 100);
        let hundred = findOnes(a);
        
        let number1 = number % 100;
        let ten = findTens(number1);

        let one = (number1 > 9 && number1 < 20) ? (findOnes(number1)) : (findOnes(number1 % 10));

        finalNumber = concatWords(concatWords(hundred, 'hundred'), concatWords(ten, one));

    }
    return finalNumber;
}

function concatWords(a, b) {
    if(a != '' && b != '') {
        return a + ' ' + b;
    } else if(b == '') {
        return a;
    } else {
        return b;
    }
    
}

function findTens(tens) {

    if(Math.floor(tens / 10) == 2) {
        return 'twenty';
    } else if(Math.floor(tens / 10) == 3) {
        return 'thirty';
    } else if(Math.floor(tens / 10) == 4) {
        return 'forty';
    } else if(Math.floor(tens / 10) == 5) {
        return 'fifty';
    } else if(Math.floor(tens / 10) == 6) {
        return 'sixty';
    } else if(Math.floor(tens / 10) == 7) {
        return 'seventy';
    } else if(Math.floor(tens / 10) == 8) {
        return 'eighty';
    } else if(Math.floor(tens / 10) == 9) {
        return 'ninety';
    } else return ''
}

function findOnes(ones) {
    
    if(ones == 1) {
        return 'one';
    } else if(ones == 2) {
        return 'two';
    } else if(ones == 3) {
        return 'three';
    } else if(ones == 4) {
        return 'four'; 
    } else if(ones == 5) {
        return 'five';
    } else if(ones == 6) {
        return 'six';
    } else if(ones == 7) {
        return 'seven';
    } else if(ones == 8) {
        return 'eight';
    } else if(ones == 9) {
        return 'nine';
    } else if(ones == 10) {
        return 'ten';
    } else if(ones == 11) {
        return 'eleven';
    } else if(ones == 12) {
        return 'twelve';
    } else if(ones == 13) {
        return 'thirteen';
    } else if(ones == 14) {
        return 'fourteen';
    } else if(ones == 15) {
        return 'fifteen';
    } else if(ones == 16) {
        return 'sixteen';
    } else if(ones == 17) {
        return 'seventeen';
    } else if(ones == 18) {
        return 'eighteen';
    } else if(ones == 19) {
        return 'nineteen';            
    } else {
        return ''
    }
}
