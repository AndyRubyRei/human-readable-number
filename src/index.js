module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convertToWords(num) {
        if (num < 20) {
            return ones[num];
        } else {
            return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
    }

    if (number === 0) {
        return "zero";
    }

    let words = "";

    if (number >= 1000000) {
        words += convertToWords(Math.floor(number / 1000000)) + " million ";
        number %= 1000000;
    }

    if (number >= 1000) {
        words += convertToWords(Math.floor(number / 1000)) + " thousand ";
        number %= 1000;
    }

    if (number >= 100) {
        words += convertToWords(Math.floor(number / 100)) + " hundred ";
        number %= 100;
    }

    if (number > 0) {
        words += convertToWords(number);
    }

    return words.trim();
};

